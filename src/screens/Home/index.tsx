import React, { useRef } from 'react'
import { DrawerLayoutAndroid } from 'react-native'
import { useSelector } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer } from './styles'
import { RootState } from '../../context/store';

export const Home = () => {
    const homeScreenState = useSelector((state: RootState) => state.homeScreen);

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