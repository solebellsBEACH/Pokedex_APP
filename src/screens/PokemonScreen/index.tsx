import {
    RouteProp,
    useNavigation,
    useRoute
} from '@react-navigation/native';
import React,
{ useEffect } from 'react'
import {
    ActivityIndicator,
    Linking,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { Creators as PokemonScreenActions } from '../../store/ducks/pokemonsScreen'
import { CategoryItem, PokedexLinkButton, PokemonInformations, PokemonItem } from './usePokemonScreen/components';
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
    PokemonNumber,
    CategoriesFlatList,
    ContentBottom,

} from './styles'
import {
    ICategoriesFlatListProps,
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


    const renderContentTop = () => {
        return <ContentTop>
            <ContentLeft>
                {pokemon ? <PokemonName>{useCapitalizeFirstLetter(pokemon.name)}</PokemonName> :
                    <PokemonName>
                        <ActivityIndicator size={40} color='black' />
                    </PokemonName>}
                <CategoriesFlatList<any>
                    keyExtractor={({ index }: ICategoriesFlatListProps) => `key-${index}`}
                    data={pokemon != null ? pokemon.abilities : []}
                    renderItem={({ item, index }: ICategoriesFlatListProps) => {
                        if (pokemon) return <CategoryItem label={useCapitalizeFirstLetter(item.name)} index={index} pokemon={pokemon} />;
                        return <></>
                    }}
                    numColumns={3}
                />
            </ContentLeft>
            <ContentRight>
                <PokemonNumber>#{useAddZeroInNumber(10)}</PokemonNumber>
            </ContentRight>
        </ContentTop>
    }


    return (
        <>
            <Container>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                ><ArrowLeftIcon width={18} height={18} /></TouchableOpacity>
                {renderContentTop()}
                <ContentBottom>
                    {pokemon && <PokemonItem pokemon={pokemon} />}
                    {pokemon &&<PokedexLinkButton _id={pokemon._id} pokemon={pokemon}/>}
                </ContentBottom>
            </Container>
            
            {pokemon && <PokemonInformations pokemon={pokemon} />}
        </>
    )
}