import heartYellow from "../img/heartYellow.png";
import heartGrey from "../img/heartGrey.png";
import { useState } from "react";
import { Character } from "./ap";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export function CharacterItem(props: { character: Character }): JSX.Element {
    const valueFromStorage = localStorage.getItem(
        getFavoriteKey(props.character) //передаем Объект персонажа
    );

    let [isFavorite, setFavorites] = useState(
        !!valueFromStorage
    );

    function getFavoriteKey(character: Character): string { //создаем ключ с  `favorite: id;
        return `favorite:${character.id}`;
    };

    function addInFavorite() {
        setFavorites(true)
        localStorage.setItem(//добавляем в хранилище ключ  `favorite: id;
            getFavoriteKey(props.character),
            JSON.stringify(props.character)//преобразуем объект в строку формат jSON
        );
    };

    function removeFromFavorite() {
        setFavorites(false)
        localStorage.removeItem(
            getFavoriteKey(props.character) //удаляем объект по ключу
        );
    };

    let btnRemove;
    let btnAdd;

    if (isFavorite) {
        btnRemove = <div className='card__group_favorite'
            onClick={() => removeFromFavorite()}>
            Remove from favorites
            <img className='icon' src={heartYellow} alt={'like'} />
        </div>
    } else {
        btnAdd = <div className='card__group_favorite'
            onClick={() => addInFavorite()}>
            Add to favourites
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
