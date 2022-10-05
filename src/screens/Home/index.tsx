import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, DrawerLayoutAndroid, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView, FiltersContent, PokemonInput, PokemonList } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer, ContentBottom, } from './styles'
import { IHomeDuckInitialState } from '../../utils/interfaces';
import { RootState } from '../../store';
import { api } from '../../utils/api';

export const Home = (props: any) => {
    const drawer = useRef(null)
    const [filtersActiveds, setFiltersActiveds] = useState<string[]>([])
    const homeData = useSelector((state: RootState) => state.home)

    const getPokemons = async () => {
        try {
            const response = await api.get('pokemon')
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [props])

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
                        {/* <PokemonList
                            results={homeData.pokemons}
                            handleOnEndReached={handleOnEndReached} /> */}
                    </ContentBottom>
                </Container>
            </DrawerLayoutAndroid>
        </>
    )
}