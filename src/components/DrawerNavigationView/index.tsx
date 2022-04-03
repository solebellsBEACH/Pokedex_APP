import AppLoading from 'expo-app-loading'
import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { api } from '../../utils/api'
import { IPokemonTypeRequest } from '../../utils/interfaces'
import { TypePokemonButton } from '../TypePokemonButton'
import { ContentTypes, ClearFilterText, Container, ContentTop, Title, ExitIcon, ExitIconContainer, Content, ContentTitle } from './styles'


interface IDrawerNavigationViewProps {
    onCloseDrawer: () => void
}

export const DrawerNavigationView = ({ onCloseDrawer }: IDrawerNavigationViewProps) => {

    const [pokemonTypes, setPokemonTypes] = useState<IPokemonTypeRequest>()
    const getPokemonTypes = async () => {
        try {
            const { data } = await api.get('type')
            console.log(data)
            setPokemonTypes(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getPokemonTypes()
    }, [])

    return (
        <>
            {pokemonTypes == undefined ? <AppLoading /> : <Container>
                <ContentTop>
                    <Title>Filtro</Title>
                    <TouchableOpacity><ClearFilterText>Limpar filtros</ClearFilterText></TouchableOpacity>
                    <ExitIconContainer
                        onPress={onCloseDrawer}
                    ><ExitIcon /></ExitIconContainer>
                </ContentTop>
                <Content>
                    <ContentTitle>Tipo</ContentTitle>
                    <ContentTypes
                        data={pokemonTypes.result}
                        renderItem={({ item, index }) => {
                            console.log(item)
                            return <TypePokemonButton key={index} />
                        }}
                        numColumns={2}
                    />
                </Content>
            </Container>}

        </>
    )
}