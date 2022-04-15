import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, DrawerLayoutAndroid, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView, FiltersContent, PokemonInput, PokemonList } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer, ContentBottom, } from './styles'
import { RootState } from '../../store';
import { actionSetOffsetCres, asyncGetPokemons } from '../../store/ScreensStore/ScreensStore.store';


export const Home = () => {
    const screensStoreState = useSelector((state: RootState) => state.screensStore);
    const drawer = useRef(null)
    const dispatch = useDispatch();
    const [filtersActiveds, setFiltersActiveds] = useState<string[]>([])
    useEffect(() => { dispatch(asyncGetPokemons(screensStoreState.offset)) }, [screensStoreState.offset])

    const handleOnEndReached = () => {
        dispatch(actionSetOffsetCres())
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
                            drawer.current.closeDrawer()
                        }} />
                }}
            >
                <Container>
                    <LogoPokemon height={RFValue(40)} />
                    <ContentTop>
                        <PokemonInput />
                        <LogoConfigContainer
                            onPress={() => { drawer.current.openDrawer() }}
                        >
                            <LogoConfig height={RFValue(40)} />
                        </LogoConfigContainer>
                    </ContentTop>
                    <ContentBottom>
                        {/* <Text></Text> */}
                        <FiltersContent filters={filtersActiveds} />
                        <PokemonList
                            results={screensStoreState.pokemonsRequest.results}
                            handleOnEndReached={handleOnEndReached} />
                    </ContentBottom>
                </Container>
            </DrawerLayoutAndroid>
        </>
    )
}