import { useEffect, useState } from 'react';
import { Character, getPeoplePage, Page } from '../components/ap'
import { CharacterList } from '../components/CharacterList';
import { Button, Container } from "react-bootstrap";
import { useQuery } from "../router/hooks";
import { useHistory } from "react-router-dom";


export function MainPage(): JSX.Element {
    let query = useQuery();
    const [peoplePage, setPeoplePage] = useState<Page<Character>>({
        count: 0,
        next: null,
        previous: null,
        results: [],
    });

    const [pageNumber, setPage] = useState(
        parseInt(query.get('page') || '1')
    );

    const [searchParam, setSearchParam] = useState(query.get('search')!);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const querySearch = query.get('search') || '';
    let history = useHistory();

    if (querySearch !== searchParam) {
        setSearchParam(querySearch);
        setPage(1);
        getPeoplePage(pageNumber, querySearch).then(page => {
            setPeoplePage(page);
        }).catch(err => {
            history.push('/notfound')
        });
    }

    function loadPage(pageNumber: number): void {
        setIsLoading(true);
        setPage(pageNumber);
        getPeoplePage(pageNumber, searchParam).then(page => {
            setPeoplePage(page);
            setIsLoading(false);
        }).catch(err => {
            history.push('/notfound')
        });
    }

    function navigateTo(pageNumber: number): void {
        history.push(`/?page=${pageNumber}`);
        loadPage(pageNumber);
    }

    useEffect(() => {
        loadPage(pageNumber);
    }, []);


    if (isLoading === true) {
        return (
            <div className='container-xxl page-loader section-content'>Loading...</div>
        )
    } else {
        return (<Container className='section-content container-xxl'>
            <CharacterList characters={peoplePage.results} />
            <div className='pagination'>
                <Button variant="btn btn-warning"
                    className='button'
                    disabled={peoplePage.previous == null}
                    onClick={() => navigateTo(pageNumber - 1)} >
                    Previous
                </Button>
                <div className="button button_currentPage btn btn-warning">{pageNumber}</div>
                <Button variant="btn btn-warning"
                    className='button'
                    disabled={peoplePage.next == null}
                    onClick={() => navigateTo(pageNumber + 1)} >
                    Next
                </Button>
            </div >
        </Container >)
    }
};