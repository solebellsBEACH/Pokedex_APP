import React, { useEffect, useRef, useState } from 'react'
import { DrawerLayoutAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView } from '../../components'
import { FiltersContent, PokemonInput, PokemonList } from './useHome/components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer, ContentBottom, } from './styles'
import { Creators as HomeActions } from '../../store/ducks/home'
import { Creators as PokemonActions } from '../../store/ducks/pokemons'
import { IReduxState } from '../../utils/interfaces';
import { ActivityIndicator } from 'react-native-paper';

export const Home = (props: any) => {
    const drawer = useRef(null)
    const dispatch = useDispatch()
    const [filterActived, setFilterActived] = useState<string>('')

    const homeData = useSelector((state: IReduxState) => state.home)
    const pokemonData = useSelector((state: IReduxState) => state.pokemon)
    useEffect(() => {
        dispatch(PokemonActions.getPokemonTypesRequest())
    }, [props])

    useEffect(() => {
        if (filterActived.length < 1) dispatch(HomeActions.HomePokemonsRequest({
            offset: 0,
            limit: 20
        }))
        else dispatch(HomeActions.HomePokemonsForTypeRequest({
            limit: 20,
            page: 1,
            pokemonType: filterActived
        }))
    }, [filterActived])

    const handleOnEndReached = (): void => { }

    return (
        <>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={RFValue(340)}
                drawerPosition='right'
                renderNavigationView={() => {
                    return <DrawerNavigationView
                        filterActived={filterActived}
                        setFilterActived={setFilterActived}
                        filters={pokemonData?.pokemonTypes?.data !== undefined ? pokemonData?.pokemonTypes?.data : []}
                        onCloseDrawer={() => {
                            drawer.current.closeDrawer()
                        }} />
                }}
            >
                <Container>
                    <LogoPokemon height={RFValue(40)} />
                    <ContentTop>
                        <PokemonInput />
                        <LogoConfigContainer
                            onPress={() => {
                                if (pokemonData?.pokemonTypes?.data) {
                                    drawer.current.openDrawer()
                                }
                            }}
                        >
                            {!pokemonData?.pokemonTypes?.data ? <ActivityIndicator
                                style={{ marginTop: '40%' }}
                                size={20} color='blue'
                            /> : <LogoConfig height={RFValue(40)} />}
                        </LogoConfigContainer>
                    </ContentTop>
                    <ContentBottom>
                        <FiltersContent
                            filterActived={filterActived}
                            setFilterActived={setFilterActived}
                        />
                        {homeData.pokemons &&
                            <PokemonList
                                results={homeData.pokemons.data}
                                handleOnEndReached={handleOnEndReached} />
                        }

                    </ContentBottom>
                </Container>
            </DrawerLayoutAndroid>
        </>
    )
}