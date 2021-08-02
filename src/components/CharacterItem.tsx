import heartYellow from "../img/heartYellow.png";
import heartGrey from "../img/heartGrey.png";
import { useState } from "react";
import { FavoritesPage } from "../pages/Favorite";
import { Character } from "./ap";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export function CharacterItem (props: { character: Character }): JSX.Element {
    const valueFromStorage = localStorage.getItem(props.character.url);
    let [isFavorites, setFavorites] = useState(
        !!valueFromStorage
    ); 
    // console.log(props.character.id)

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
        btnRemove = <div onClick={() => removeFromFavorite()}>
            Удалить из избранного
            <img className='icon' src={heartYellow} alt={'like'} />
        </div>
    } else {
        btnAdd = <div onClick={() => addInFavorite()}>
            Добавить в избранное
            <img className='icon' src={heartGrey} alt={'like'} />
        </div>
    }


    // let srcImg = getImgPeople(props.character.id);

    return (
        <Card className='card text-white bg-dark mb-3' style={{ width: '18rem' }}>
            <Card.Img 
                variant="top" 
                className="card__photo" 
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaJAcJ22qolg9QTSVV994P2JGQESCb8_Gqg&usqp=CAU}"} 
            />
            <Card.Body>
                <Card.Title>{props.character.name}</Card.Title>
                <Card.Text>
                    Вirth year: {props.character.birth_year}
                </Card.Text>
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
