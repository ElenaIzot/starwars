import { Container, Row, Col } from "react-bootstrap";
import { Character } from "./ap";
import { CharacterItem } from "./CharacterItem";

export function CharacterList(props: { characters: Character[] }) {
    
    const peopleList = props.characters.map((character: Character) => (
        <CharacterItem key={character.url} character={character}></CharacterItem>
    ))
  
    return (
        <>
            <div className='section-cards'>{peopleList}</div>
        </>

    )
}


