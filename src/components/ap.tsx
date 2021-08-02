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
    const url = `${getResourcesURL('people')}?page=${page}&search=${searchName}`;
    // /people/?name=?search=skywalker
    // 'https://swapi.dev/api/people/?page=&name=search=skywalker
    // const url = `${getResourcesURL('people')}?page=${page}2&name=%3Fsearch%3D${searchName}`;

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

// export function MeRequest() {
//     const url = 'https://swapi.dev/api/planets/';
//     return fetch(url, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': '2',
//         },
//     }).then((response) => {
//         return response.json();
//     }).then(json => {
//         console.log(json)
//     })
// }

// export function getImgPeople(id: number): Promise<any> {
//     const url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
//     return fetch(url)
//         .then((response) => {
//             // console.log(response)
//             return response.json();
//     }).then(json => {
//         return console.log(json)
//     })
// }

//get img
//https://starwars-visualguide.com/assets/img/characters/{characterId}.jpg