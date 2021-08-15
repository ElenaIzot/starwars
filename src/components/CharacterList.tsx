import { Character } from "./ap";
import { CharacterItem } from "./CharacterItem";

export function CharacterList(props: { characters: Character[] }): JSX.Element {

    const peopleList = props.characters.map((character: Character) => (
        <CharacterItem key={character.url} character={character}></CharacterItem>
    ))

    return (
        <div className='card-lists'>{peopleList}</div>
    )
}


