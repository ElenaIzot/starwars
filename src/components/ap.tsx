import NotFoundPage from "../pages/NotFoundPage";

export const BASE_API_URL = 'https://swapi.dev/api';
export interface Page<T> {
    count: number,
    next: string | null,
    previous: string | null,
    results: T[]
}
export interface Character {
    name: string;
    url: string;
    favorites: boolean;
    id: number;
    birth_year: string;
    homeworld: string;
}

export function getResourcesURL(resourcesName: string, id?: number): string {
    if (id) {
        return `${BASE_API_URL}/${resourcesName}/${id}`
    } else {
        return `${BASE_API_URL}/${resourcesName}/`
    }
}

export function getPeoplePage(page: number, searchName: string)
    : Promise<Page<Character>> {
    const url = `${getResourcesURL('people')}?page=${page}&search=${searchName}`;

    return fetch(url).then(response => {
        if (response.status === 404) {
            throw new Error("Not found");
        }
        return response;
    }).then(
        response => { return response.json() }
    ).then((page: any) => {
        page.results = page.results.map((character: any) => {
            const id = character.url.replace(`${BASE_API_URL}/people/`, '')
                .replace('/', '');
            const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
            return {
                ...character,
                id: id,
                imageUrl: imageUrl,
                // isFavorite: false,
            };
        });
        return page;
    })
}

export function getImgPeople(id: number): Promise<any> {
    const url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    return fetch(url)
        .then((response) => {
            return response.json();
        }).then(json => {
            return console.log(json)
        }).catch(error => console.error(error));
}