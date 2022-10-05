import { IPokemon } from "../../../../utils/interfaces";

export interface ICategoryItem {
    label: string;
    index: number;
    pokemon: IPokemon
}

export interface ICategoriesFlatListProps {
    item: {
        value: number;
        name: string;
    },
    index: number
}

export interface IPokemonInformationsProps {
    pokemon: IPokemon
}