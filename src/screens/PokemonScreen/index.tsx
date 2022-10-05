import {
    RouteProp,
    useNavigation,
    useRoute
} from '@react-navigation/native';
import React,
{ useEffect } from 'react'
import {
    ActivityIndicator,
    TouchableOpacity,
    View
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgUri } from 'react-native-svg';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { Creators as PokemonScreenActions } from '../../store/ducks/pokemonsScreen'
import { PokemonInformations } from './usePokemonScreen/components';
import {
    useAddZeroInNumber,
    useCapitalizeFirstLetter,
    usePokemonColors
} from '../../utils/hooks';
import {
    INavigationProps,
    IReduxState
} from '../../utils/interfaces';
import { ParamList } from '../../utils/types';
import {
    Container,
    ArrowLeftIcon,
    ContentTop,
    ContentLeft,
    PokemonName,
    ContentRight,
    CategoryText,
    PokemonNumber,
    CategoriesContainer,
    CategoryItem,
    CategoriesFlatList,
    ContentBottom,
    PokemonItemContent,
    PokemonItemContainer,
    PokemonImage
} from './styles'
import {
    ICategoriesFlatListProps,
    ICategoryItem
} from './usePokemonScreen/interface';

export const PokemonScreen = (props: any) => {
    const route = useRoute<RouteProp<ParamList, 'PokemonScreen'>>();
    const { _id } = route.params
    const navigation = useNavigation<INavigationProps>()
    const dispatch = useDispatch()
    const { pokemonData } = useSelector((state: IReduxState) => state.pokemonScreen)
    const pokemon = pokemonData?.data[0]

    useEffect(() => {
        dispatch(PokemonScreenActions.getPokemonsScreenRequest({ id: _id }))
    }, [props])


    const renderCategoryItem = ({ index, label }: ICategoryItem) => {
        return <>
            <CategoriesContainer
                key={index}
            >
                <CategoryItem
                    color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.type }).primary : 'blue'}>
                    <CategoryText>{label}</CategoryText>
                </CategoryItem>
            </CategoriesContainer>
        </>
    }



    const renderContentTop = () => {
        return <ContentTop>
            <ContentLeft>
                {pokemon ? <PokemonName>{useCapitalizeFirstLetter(pokemon.name)}</PokemonName> : <PokemonName><ActivityIndicator size={40} color='black' /></PokemonName>}
                <CategoriesFlatList<any>
                    keyExtractor={({ item, index }: ICategoriesFlatListProps) => `key-${index}`}
                    data={pokemon != null ? pokemon.abilities : []}
                    renderItem={({ item, index }: ICategoriesFlatListProps) => {
                        return renderCategoryItem({ label: useCapitalizeFirstLetter(item.name), index });
                    }}
                    numColumns={3}
                />
            </ContentLeft>
            <ContentRight>
                <PokemonNumber>#{useAddZeroInNumber(10)}</PokemonNumber>
            </ContentRight>
        </ContentTop>



    }

    const renderPokemonItem = () => {
        return <PokemonItemContainer
        >
            <PokemonItemContent
                colors={pokemon != null ? [usePokemonColors({ pokemonType: pokemon.type }).primary, usePokemonColors({ pokemonType: pokemon.type }).secondary] : ['gray', 'white']}
            >
                {pokemon != null ? <SvgUri
                    height={RFValue(170) + ''}
                    uri={pokemon.front_default}
                /> : <ActivityIndicator size={80} color='black' />}
            </PokemonItemContent>
        </PokemonItemContainer>
    }
    return (
        <>
            <Container>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                ><ArrowLeftIcon width={18} height={18} /></TouchableOpacity>
                {renderContentTop()}
                <ContentBottom>
                    {renderPokemonItem()}
                </ContentBottom>
            </Container>
            {/* <PokemonInformations id={id} /> */}
        </>
    )
}