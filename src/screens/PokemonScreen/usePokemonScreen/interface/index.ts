export interface ICategoryItem {
    label: string;
    index: number;
}

export interface ICategoriesFlatListProps {
    item: {
        value: number;
        name: string;
    },
    index: number
}

export interface IPokemonInformationsProps {
    id: number
}