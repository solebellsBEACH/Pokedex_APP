import React, { useEffect, useRef, useState } from 'react'
import { DrawerLayoutAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView, FiltersContent, PokemonInput, PokemonItem } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer, ContentBottom, PokemonItensContent } from './styles'
import { RootState } from '../../store';


export const Home = () => {
    const homeScreenState = useSelector((state: RootState) => state.homeScreen);
    const drawer = useRef(null)
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
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => `key-${index}`}
                            data={homeScreenState.pokemonsRequest.results}
                            renderItem={({ item, index }) => {
                                console.log()
                                return <PokemonItem index={index} label={item.name} url={item.url} />
                            }
                            }
                            numColumns={2}
                        />
                    </ContentBottom>
                </Container>
            </DrawerLayoutAndroid>
        </>
    )
}