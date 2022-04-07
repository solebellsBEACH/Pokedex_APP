import React, { useEffect, useState } from 'react'

import { Label, Value, Container, ContentTop, TabSelectorContainer, TabSelectorText, ContentBottom, InformationItemContainer, StatusTabFlatList } from './styles'
import { IPokemon } from '../../utils/interfaces'
import { api } from '../../utils/api'
import { useCapitalizeFirstLetter } from '../../utils/hooks'
import { StatusItem } from './StatusItem'

export const PokemonInformations = () => {

    const [pokemon, setPokemon] = useState<IPokemon>()
    const [gender, setGender] = useState<'female' | 'male' | 'genderless'>()
    const id = 1;

    const getPokemon = async () => {
        try {
            const { data } = await api.get(`pokemon/${id}`)
            setPokemon(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getPokemonGender = async () => {
        try {
            const { data } = await api.get(`gender/${id}`)
            setGender(data.name)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        getPokemonGender()
        getPokemon()
    }, [id])



    const [activeTab, setActiveTab] = useState<'About' | 'Status' | 'Evolution'>('Status')
    interface ITabSelectorProps {
        label: 'About' | 'Status' | 'Evolution';
    }


    const TabSelector = ({ label }: ITabSelectorProps) => {
        return <TabSelectorContainer
            onPress={() => { setActiveTab(label) }}
            isActive={activeTab == label}>
            <TabSelectorText isActive={activeTab == label}>{label}</TabSelectorText>
        </TabSelectorContainer>
    }

    const data = {
        especie: 'Dragão',
        tamanho: '1m',
        habilidades: 'Hab1, Hab2, Hab3',
        genero: 'Fem'
    }

    interface IInformationItem {
        label: string;
        value: string;
    }

    const InformationItem = ({ label, value }: IInformationItem) => {
        return <InformationItemContainer><Label>{label}</Label><Value>{value}</Value></InformationItemContainer>
    }
    const listAbilities = (abilities: { ability: { name: string } }[]): string => {
        let array: string[] = []
        abilities.map(e => { array.push(" " + useCapitalizeFirstLetter(e.ability.name)) })
        return array.toString()
    }

    const renderContentBottomAboutTab = () => {
        return (
            <>
                <InformationItem label='Species' value={pokemon != undefined ? useCapitalizeFirstLetter(pokemon.species.name) : ''} />
                <InformationItem label='Height' value={pokemon != undefined ? pokemon.height + ' cm' : '0cm'} />
                <InformationItem label='Abilities' value={pokemon != undefined ? listAbilities(pokemon.abilities) : '0cm'} />
                <InformationItem label='Gender' value={gender != undefined ? useCapitalizeFirstLetter(gender) : 'genderless'} />
            </>
        )
    }


    const renderContentBottomStatusTab = () => {
        return <StatusTabFlatList
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            numColumns={2}
            data={[{ name: 'Status1', score: 35, type: 'water' }, { name: 'Status2', score: 78, type: 'water' }, { name: 'Status3', score: 90, type: 'water' }]}
            renderItem={({ item, index }) => <StatusItem
                name={item.name}
                score={item.score}
                type={{ pokemonType: item?.type }}
                key={index} />}
        />
    }


    const renderContentBottom = () => {
        switch (activeTab) {
            case 'About':
                return renderContentBottomAboutTab()
            case 'Status':
                return renderContentBottomStatusTab()

            default:
                break;
        }
    }

    return (
        <Container>
            <ContentTop>
                <TabSelector label='About' />
                <TabSelector label='Status' />
                <TabSelector label='Evolution' />
            </ContentTop>
            <ContentBottom>
                {renderContentBottom()}
            </ContentBottom>
        </Container>
    )
}