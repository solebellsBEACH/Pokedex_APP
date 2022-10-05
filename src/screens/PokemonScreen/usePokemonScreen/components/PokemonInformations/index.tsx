import React, { useEffect, useState } from 'react'

import {
    Label,
    Value,
    Container,
    ContentTop,
    TabSelectorContainer,
    TabSelectorText,
    ContentBottom,
    InformationItemContainer,
    StatusTabFlatList
} from './styles'
import { StatusItem } from '../StatusItem'
import { ActivityIndicator } from 'react-native'
import { IPokemon } from '../../../../../utils/interfaces'
import { IPokemonInformationsProps } from '../../interface'
import { api } from '../../../../../utils/api'
import { useCapitalizeFirstLetter } from '../../../../../utils/hooks'



export const PokemonInformations = ({ pokemon }: IPokemonInformationsProps) => {

    const [activeTab, setActiveTab] = useState<'About' | 'Status' | 'Evolution'>('About')
    interface ITabSelectorProps {
        label: 'About' | 'Status' | 'Evolution';
    }

    interface IStatusTabRenderItemsProps {

        item: {
            stats_value: number;
            name: string;
        }, index: number

    }

    const TabSelector = ({ label }: ITabSelectorProps) => {
        return <TabSelectorContainer
            onPress={() => {
                console.log('Clickou no ' + label)
                setActiveTab(label)
            }}
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
    const listAbilities = (abilities: { name: string }[]): string => {
        let array: string[] = []
        abilities.map(e => { array.push(" " + useCapitalizeFirstLetter(e.name)) })
        return array.toString()
    }

    const renderContentBottomAboutTab = () => {
        return (
            <>
                <InformationItem label='Type' value={pokemon != undefined ? useCapitalizeFirstLetter(pokemon.type) : ''} />
                <InformationItem label='Height' value={pokemon != undefined ? pokemon.height + ' cm' : '0cm'} />
                <InformationItem label='Abilities' value={pokemon != undefined ? listAbilities(pokemon.abilities) : '0cm'} />
                {/* <InformationItem label='Gender' value={gender != undefined ? useCapitalizeFirstLetter(gender) : 'genderless'} /> */}
            </>
        )
    }


    const renderContentBottomStatusTab = () => {
        return <StatusTabFlatList<any>
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            numColumns={2}
            keyExtractor={({ index }: IStatusTabRenderItemsProps) => `key-${index}StatusItem`}
            data={pokemon != undefined ? pokemon.stat_value : []}
            renderItem={({ item }: IStatusTabRenderItemsProps) => <StatusItem
                name={item.name}
                score={item.stats_value}
                type={{ pokemonType: pokemon?.type }}
            />}
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
                {pokemon != undefined ? renderContentBottom() : <ActivityIndicator size={100} color='black' />}
            </ContentBottom>
        </Container>
    )
}