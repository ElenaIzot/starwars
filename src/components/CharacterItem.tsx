import heartYellow from "../img/heartYellow.png";
import heartGrey from "../img/heartGrey.png";
import { useState } from "react";
import { Character } from "./ap";

export function CharacterItem(props: { character: Character }): JSX.Element {
    const valueFromStorage: string | null = localStorage.getItem(
        getFavoriteKey(props.character)
    );

    let [isFavorite, setFavorites] = useState<boolean>(
        !!valueFromStorage
    );

    function getFavoriteKey(character: Character): string {
        return `favorite:${character.id}`;
    };

    function addInFavorite(): void {
        setFavorites(true)
        localStorage.setItem(
            getFavoriteKey(props.character),
            JSON.stringify(props.character),
        );
    };

    function removeFromFavorite(): void {
        setFavorites(false)
        localStorage.removeItem(
            getFavoriteKey(props.character)
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
        <div className='card text-white bg-dark'>
            <img
                className="card__photo"
                src={`https://starwars-visualguide.com/assets/img/characters/${props.character.id}.jpg`}
            />
            <div className='card__body'>
                <div className='card__title'>
                    {props.character.name}
                </div>
            </div>

            <div className='card__body'>
                <div className="card__text like text-white bg-dark mb-3 ">
                    {btnRemove}
                    {btnAdd}
                </div>
            </div>
        </div>
    )
};
