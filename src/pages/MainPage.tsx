import { useEffect, useState } from 'react';
import { BASE_API_URL, Character, getPeoplePage, Page } from '../components/ap'
import { CharacterList } from '../components/CharacterList';
import { Button, Container } from "react-bootstrap";
import { useQuery } from "../router/hooks";
import { useLocation, useHistory, useParams } from "react-router-dom";

//номер страницы мой. Есть номер страницы в арi. Нужно вытщаить номер стр в апи и рендерить стр по нему.
export function MainPage(): JSX.Element {
    let query = useQuery();
    const [peoplePage, setPeoplePage] = useState<Page<Character>>({
        count: 0,
        next: null,
        previous: null,
        results: [],
    });

    const [pageNumber, setPage] = useState(1);
    const [searchParam, setSearchParam] = useState(query.get('search')!);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const querySearch = query.get('search') || '';

    // let location = useLocation();

    // const history = useHistory();
    // // console.log('HISTORY', history)
    // console.log('Location', location.search)

    if (querySearch !== searchParam) {
        setSearchParam(querySearch);
        getPeoplePage(pageNumber, querySearch).then(page => {
            setPeoplePage(page)
        })
    }

    useEffect(() => {
        setIsLoading(true);
        getPeoplePage(pageNumber, searchParam).then(page => {
            setPeoplePage(page);
            setIsLoading(false);
        });
    }, []);
    //преобразовать в число
    //let currentPage = ++(peoplePage?.next?.replace(`${BASE_API_URL}/people/?search=&page=`, '',));

    // if(currentPage == pageNumber){
    //     getPeoplePage(pageNumber, querySearch).then(page => {
    //         setPeoplePage(page)
    //     })
    // }

    //https://swapi.dev/api/people/?page=2

    function handleClickNext() {
        // history.push(`/?page=${pageNumber + 1}`)
        setIsLoading(true);
        setPage(pageNumber + 1);
        getPeoplePage(pageNumber + 1, searchParam)
            .then(page => {
                setPeoplePage(page);
                setIsLoading(false);
            }
            );
    }

    function handleClickPrev() {
        // history.push(`/?page=${pageNumber - 1}`)
        setIsLoading(true);
        setPage(pageNumber - 1);
        getPeoplePage(pageNumber - 1, searchParam).then(
            page => {
                setPeoplePage(page)
                setIsLoading(false);
            }
        );
    }

    if (isLoading === true) {
        return (
            <div className='page-loader'>Loading...</div>
        )
    } else {
        return (<Container className='section-cards'>
            <CharacterList characters={peoplePage.results} />
            <div className='pagination'>
                <Button variant="btn btn-warning"
                    className='button'
                    disabled={peoplePage.previous == null}
                    onClick={handleClickPrev} >
                    Previous
                </Button>
                <div className="button button_currentPage btn btn-warning">{pageNumber}</div>
                <Button variant="btn btn-warning"
                    className='button'
                    disabled={peoplePage.next == null}
                    onClick={handleClickNext} >
                    Next
                </Button>
            </div >
        </Container >)
    }


    // return (
    //     <Container className='section-cards'>
    //         <CharacterList characters={peoplePage.results} />
    //         <div className='pagination'>
    //             <Button variant="btn btn-warning"
    //                 disabled={peoplePage.previous == null}
    //                 onClick={handleClickPrev} >
    //                 Previous
    //             </Button>
    //             <div className="btn btn-warning">{pageNumber}</div>
    //             <Button variant="btn btn-warning"
    //                 disabled={peoplePage.next == null}
    //                 onClick={handleClickNext} >
    //                 Next
    //             </Button>
    //         </div >
    //     </Container >
    // );
};