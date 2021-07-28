export const BASE_API_URL = 'https://swapi.dev/api';

export interface Page<T> {
    count: number,
    next: string,
    previous: string,
    results: T[]
}

export interface Character {
    name: string,
    url: string,
    favorites: boolean,
    id: number
    birth_year: string,
    homeworld: string
}

export function getResourcesURL(resourcesName: string, id?: number): string {
    if (id) {
        return `${BASE_API_URL}/${resourcesName}/${id}`
    } else {
        return `${BASE_API_URL}/${resourcesName}/`
    }
}

export function getPeoplePage(page: number, searchName: string): Promise<Page<Character>> {
    const url = `${getResourcesURL('people')}?page=${page}&name=${searchName}`;

    return fetch(url).then(
        (response) => {
            return response.json();
        })
}

export function getPeople(id: number): Promise<any> {
    const url = getResourcesURL('people', 1);
    return fetch(url)
        .then((response) => {
            return response.json();
        })
}