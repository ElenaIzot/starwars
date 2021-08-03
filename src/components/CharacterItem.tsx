import heartYellow from "../img/heartYellow.png";
import heartGrey from "../img/heartGrey.png";
import { useState } from "react";
import { FavoritesPage } from "../pages/Favorite";
import { Character } from "./ap";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export function CharacterItem(props: { character: Character }): JSX.Element {
    const valueFromStorage = localStorage.getItem(props.character.url);
    let [isFavorites, setFavorites] = useState(
        !!valueFromStorage
    );

    function addInFavorite() {
        setFavorites(true)
        localStorage.setItem(props.character.url, props.character.name);
        <FavoritesPage hero={props.character}></FavoritesPage>
    }

    function removeFromFavorite() {
        setFavorites(false)
        localStorage.removeItem(props.character.url);
    }

    let btnRemove;
    let btnAdd;

    if (isFavorites) {
        btnRemove = <div className='card__group_favorite'
            onClick={() => removeFromFavorite()}>
            Удалить из избранного
            <img className='icon' src={heartYellow} alt={'like'} />
        </div>
    } else {
        btnAdd = <div className='card__group_favorite'
            onClick={() => addInFavorite()}>
            Добавить в избранное
            <img className='icon' src={heartGrey} alt={'like'} />
        </div>
    }

    return (
        <Card className='card text-white bg-dark' style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                className="card__photo"
                src={`https://starwars-visualguide.com/assets/img/characters/${props.character.id}.jpg`}
            />
            <Card.Body>
                <Card.Title>{props.character.name}</Card.Title>
                <Card.Text>
                    Homeworld: {props.character.homeworld}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="like text-white bg-dark mb-3">
                    {btnRemove}
                    {btnAdd}
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
};
