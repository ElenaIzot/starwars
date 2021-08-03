import { useEffect } from "react";

export function FavoritesPage(character: any): JSX.Element {   
       useEffect(() => {
        localStorage.getItem(character.url);
    }, [character.url])

       return (
        <div>null</div>
    )
}