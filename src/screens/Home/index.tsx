import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, DrawerLayoutAndroid, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Creators as HomeActions } from '../../store/ducks/home'

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView, FiltersContent, PokemonInput, PokemonList } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer, ContentBottom, } from './styles'
import { IHomeDuckInitialState } from '../../utils/interfaces';

export const Home = (props:any) => {
    const drawer = useRef(null)
    const [filtersActiveds, setFiltersActiveds] = useState<string[]>([])
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const dispatch = useDispatch();

    const handleOnEndReached = () => {
        console.log('handleOnEndReached')
    }
    useEffect(() => {
        dispatch(HomeActions.HomePokemonsRequest({
          offset: 0,
          limit: 20
        }))
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
                        <PokemonList
                            results={homeData.pokemons}
                            handleOnEndReached={handleOnEndReached} />
                    </ContentBottom>
                </Container>
            </DrawerLayoutAndroid>
        </>
    )
}