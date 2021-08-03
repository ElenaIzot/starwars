import { Container } from "react-bootstrap";
import { Character } from "../components/ap";
import { CharacterList } from "../components/CharacterList";

export function FavoritesPage(): JSX.Element {
    const keys = Object.keys(localStorage);
    const characters: Character[] = [];

    for (const key of keys) {
        if (key.indexOf('favorite:') !== 0) {
            continue
        }

        const character: Character = JSON.parse(
            localStorage.getItem(key)!
        );

        characters.push(character);
    };


    return (
        <Container className='section-cards'>
            <CharacterList characters={characters} />
        </Container >
    );
}