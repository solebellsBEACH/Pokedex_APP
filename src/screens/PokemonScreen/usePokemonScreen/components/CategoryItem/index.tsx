import { usePokemonColors } from "../../../../../utils/hooks"
import { CategoriesContainer, CategoryText, CategoryItemContent } from "./styles"
import { ICategoryItem } from "../../interface"

export const CategoryItem = ({ index, label, pokemon }: ICategoryItem) => {
    return <>
        <CategoriesContainer
            key={index}
        >
            <CategoryItemContent
                color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.type }).primary : 'blue'}>
                <CategoryText>{label}</CategoryText>
            </CategoryItemContent>
        </CategoriesContainer>
    </>
}