import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, DrawerLayoutAndroid, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView, FiltersContent, PokemonInput, PokemonList } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer, ContentBottom, } from './styles'
import { Creators as HomeActions } from '../../store/ducks/home'
import { IReduxState } from '../../utils/interfaces';

export const Home = (props: any) => {
    const drawer = useRef(null)
    const dispatch = useDispatch()
    const [filtersActiveds, setFiltersActiveds] = useState<string[]>([])

    const homeData = useSelector((state: IReduxState) => state.home)
    useEffect(() => {
        dispatch(HomeActions.HomePokemonsRequest({
            offset: 0,
            limit: 20
        }))
    }, [])

    const handleOnEndReached = (): void => {

    }

    return (
        <>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={RFValue(340)}
                drawerPosition='right'
                renderNavigationView={() => {
                    return <DrawerNavigationView
                        filtersActiveds={filtersActiveds} setFiltersActiveds={setFiltersActiveds}
                        onCloseDrawer={() => {
                            // drawer.current.closeDrawer()
                        }} />
                }}
            >
                <Container>
                    <LogoPokemon height={RFValue(40)} />
                    <ContentTop>
                        <PokemonInput />
                        <LogoConfigContainer
                            onPress={() => {
                                // drawer.current.openDrawer()
                            }}
                        >
                            <LogoConfig height={RFValue(40)} />
                        </LogoConfigContainer>
                    </ContentTop>
                    <ContentBottom>
                        {/* <FiltersContent filters={filtersActiveds} /> */}
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