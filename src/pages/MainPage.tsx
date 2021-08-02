import { useEffect, useState } from 'react';
import { Character, getPeoplePage, Page } from '../components/ap'
import { CharacterList } from '../components/CharacterList';
import { CharacterItem } from '../components/CharacterItem';
import { Button, Card, Container, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useQuery } from "../router/hooks";
import { useHistory, useLocation} from 'react-router-dom';

export function MainPage(): JSX.Element {
    let query = useQuery();
    const [peoplePage, setPeoplePage] = useState<Page<Character> | null>(null);
    const [pageNumber, setPage] = useState(1);
    const [searchParam, setSearchParam] = useState(query.get('search')!);
    const querySearch = query.get('search') || '';

    if(querySearch !== searchParam){
        console.log("query has change", searchParam, querySearch)
        setSearchParam(querySearch);
        getPeoplePage(pageNumber, querySearch).then(page =>{
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
            <div>Loading...</div>
        );
    }

    return (
        <Container className='section-cards'>
            <CharacterList characters={peoplePage.results} />
            <div className='pagination'>
                <Button variant="btn btn-warning"
                    onClick={handleClickPrev}>
                    Предыдущая
                </Button>
                <div className="btn btn-warning">{pageNumber}</div>
                <Button variant="btn btn-warning"
                    onClick={handleClickNext}>
                    Следующая
                </Button>
            </div>
        </Container>
    );
};

