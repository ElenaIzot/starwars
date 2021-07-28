import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPeoplePage } from "../components/ap";

export function FavoritesPage(character: any): JSX.Element {
    // const {character.url} = useParams();

       useEffect(() => {
        localStorage.getItem(character.url);
    }, [character.url])


       return (
        <div>null</div>
    )
}