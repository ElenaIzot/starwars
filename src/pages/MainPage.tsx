import { useEffect, useState } from 'react';
import { Character, getPeoplePage, Page } from '../components/ap'
import { CharacterList } from '../components/CharacterList';
import { Button, Container, Form } from "react-bootstrap";
import { useQuery } from "../router/hooks";

export function MainPage(): JSX.Element {
    let query = useQuery();
    const [peoplePage, setPeoplePage] = useState<Page<Character> | null>(null);
    const [pageNumber, setPage] = useState(1);
    const searchParam = query.get('search') || '';

    useEffect(() => {
        getPeoplePage(pageNumber, searchParam).then(page => {
            setPeoplePage(page);
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
        getPeoplePage(pageNumber, searchParam).then(
            page => {
                setPeoplePage(page);
            });

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

