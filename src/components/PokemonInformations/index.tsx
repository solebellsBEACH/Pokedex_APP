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
            console.log('getPokemon')
        }
    }
    const getPokemonGender = async () => {
        try {
            const { data } = await api.get(`gender/${id}`)
            setGender(data.name)

        } catch (error) {
            console.log('getPokemonGender')

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
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            numColumns={2}
            keyExtractor={(item, index) => `key-${index}`}
            data={pokemon != undefined ? pokemon.stats : []}
            renderItem={({ item, index }) => <StatusItem
                name={item.stat.name}
                score={item.base_stat}
                type={{ pokemonType: pokemon?.types[0].type.name }}
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