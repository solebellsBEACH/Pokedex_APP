import React, { useRef } from 'react'
import { DrawerLayoutAndroid } from 'react-native'
import { useDispatch } from 'react-redux';

import { RFValue } from 'react-native-responsive-fontsize'
import { DrawerNavigationView, PokemonInput, PokemonItem } from '../../components'
import { Container, LogoPokemon, ContentTop, LogoConfig, LogoConfigContainer, ContentBottom, PokemonItensContent } from './styles'


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
                    <ContentBottom>
                        <PokemonItensContent
                            keyExtractor={(item, index) => `key-${index}`}
                            data={['', '', '', '', '', '', '', '', '', '', '', '', '']}
                            renderItem={({ item, index }) => <PokemonItem key={index} />
                            }
                            numColumns={2}
                        />
                    </ContentBottom>
                </Container>
            </DrawerLayoutAndroid>
        </>
    )
}