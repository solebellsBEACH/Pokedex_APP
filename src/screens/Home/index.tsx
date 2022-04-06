import React, { useEffect, useRef, useState } from 'react'
import { DrawerLayoutAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView, FiltersContent, PokemonInput, PokemonItem } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer, ContentBottom, PokemonItensContent } from './styles'
import { RootState } from '../../store';


export const Home = () => {
    const homeScreenState = useSelector((state: RootState) => state.homeScreen);
    const dispatch = useDispatch()
    const drawer = useRef(null)
    const [first, setfirst] = useState(1)
    const [filtersActiveds, setFiltersActiveds] = useState<string[]>([])
    useEffect(() => { console.log(filtersActiveds) }, [filtersActiveds])
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
                        <PokemonItensContent
                            keyExtractor={(item, index) => `key-${index}`}
                            data={homeScreenState.pokemonsRequest.results}
                            renderItem={({ item, index }) => <PokemonItem index={index} label={item.name} />
                            }
                            numColumns={2}
                        />
                    </ContentBottom>
                </Container>
            </DrawerLayoutAndroid>
        </>
    )
}