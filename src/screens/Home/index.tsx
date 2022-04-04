import React, { useEffect, useRef } from 'react'
import { DrawerLayoutAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView, PokemonInput } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer } from './styles'
import { asyncGetTypes } from '../../store/HomeScreen/HomeScreen.store'
import { RootState } from '../../store';

export const Home = () => {
    // const homeScreenState = useSelector((state: RootState) => state.homeScreen);
    const dispatch = useDispatch()
    const drawer = useRef(null)
    return (
        <>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={RFValue(340)}
                drawerPosition='right'
                renderNavigationView={() => { return <DrawerNavigationView onCloseDrawer={() => { drawer.current.closeDrawer() }} /> }}
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
                </Container>
            </DrawerLayoutAndroid>
        </>
    )
}