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
        console.log("query has change", searchParam, querySearch)
        setSearchParam(querySearch);
        getPeoplePage(pageNumber, querySearch).then(page => {
            setPeoplePage(page)
        })
    }
    //страница рендерится 1 раз всегдда. Либо со всеми карточками(searchParam==null/'') либо с теми элементами которые искались(т.е. ссфлка сразу в браузере введена с searchParam== искомому значению). Иначе если срабатыает поиск то срабатывает условие стр 14 и каждый раз компонент перерисовывет в зависимости от searchParam
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

    let previousPage = pageNumber - 1;
    let nextPage = pageNumber + 1;

    return (
        <Container className='section-cards'>
            <CharacterList characters={peoplePage.results} />
            <div className='pagination'>
                <Button variant="btn btn-warning"
                    disabled={previousPage == 0 ? true : false}
                    onClick={handleClickPrev} >
                    Предыдущая
                </Button>
                <div className="btn btn-warning">{pageNumber}</div>
                <Button variant="btn btn-warning"
                    disabled={nextPage == 0 ? true : false}
                    onClick={handleClickNext} >
                    Следующая
                </Button>
            </div >
        </Container >
    );
};