import { useEffect, useState } from 'react';
import { Character, getPeoplePage, Page } from '../components/ap'
import { CharacterList } from '../components/CharacterList';
import { Button, Container } from "react-bootstrap";
import { useQuery } from "../router/hooks";

export function MainPage(): JSX.Element {
    let query = useQuery();
    const [peoplePage, setPeoplePage] = useState<Page<Character> | null>(null);
    const [pageNumber, setPage] = useState(1);
    const [searchParam, setSearchParam] = useState(query.get('search')!);
    const querySearch = query.get('search') || '';

    if (querySearch !== searchParam) {
        setSearchParam(querySearch);
        getPeoplePage(pageNumber, querySearch).then(page => {
            setPeoplePage(page)
        })
    }

    useEffect(() => {
        getPeoplePage(pageNumber, searchParam).then(page => {
            setPeoplePage(page)
        })
    }, []);

    function handleClickNext() {
        setPage(pageNumber + 1);
        getPeoplePage(pageNumber + 1, searchParam).then(
            page => setPeoplePage(page)
        );
    }

    function handleClickPrev() {
        setPage(pageNumber - 1);
        getPeoplePage(pageNumber - 1, searchParam).then(
            page => setPeoplePage(page)
        );
    }

    if (!peoplePage) {
        return (
            <div className='section-cards'>Loading...</div>
        );
    }

    return (
        <Container className='section-cards'>
            <CharacterList characters={peoplePage.results} />
            <div className='pagination'>
                <Button variant="btn btn-warning"
                    disabled={peoplePage.previous == null}
                    onClick={handleClickPrev} >
                    Previous
                </Button>
                <div className="btn btn-warning">{pageNumber}</div>
                <Button variant="btn btn-warning"
                    disabled={peoplePage.next == null}
                    onClick={handleClickNext} >
                    Next
                </Button>
            </div >
        </Container >
    );
};