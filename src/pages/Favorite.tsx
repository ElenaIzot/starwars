import { Container } from "react-bootstrap";
import { Character } from "../components/ap";
import { CharacterList } from "../components/CharacterList";

export function FavoritePage(): JSX.Element {
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
        <Container className='section-content container-xxl'>
            <CharacterList characters={characters} />
        </Container >
    );
}