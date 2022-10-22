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
import { ProgressBar } from 'react-native-paper';
import { AbilitiesList } from '../AbilitiesList'


export const PokemonInformations = ({ pokemon }: IPokemonInformationsProps) => {

    const [activeTab, setActiveTab] = useState<'About' | 'Status' | 'Abilities'>('About')
    interface ITabSelectorProps {
        label: 'About' | 'Status' | 'Abilities';
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

    const renderContentBottomAboutTab = () => {
        return (
            <>
                <InformationItem label='Type' value={pokemon != undefined ? useCapitalizeFirstLetter(pokemon.type) : ''} />
                <InformationItem label='Height' value={pokemon != undefined ? pokemon.height + ' cm' : '0cm'} />
                <InformationItem label='Gender' value={'Genderless'} />
            </>
        )
    }


    const renderContentBottomStatusTab = () => {
        return <StatusTabFlatList<any>
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            numColumns={2}
            keyExtractor={(props: { name: string }, index: number) => `key-${index}StatusItem${props.name}`
            }
            data={pokemon != undefined ? pokemon.stat_value : []}
            renderItem={({ item }: IStatusTabRenderItemsProps) => <StatusItem
                name={item.name}
                score={item.stats_value}
                type={{ pokemonType: pokemon?.type }}
            />}
        />
    }
    const renderContentBottomAbilities = () => {
        if (pokemon) return <AbilitiesList pokemon={pokemon} />
        return <></>
    }


    const renderContentBottom = () => {
        switch (activeTab) {
            case 'About':
                return renderContentBottomAboutTab()
            case 'Status':
                return renderContentBottomStatusTab()
            case 'Abilities':
                return renderContentBottomAbilities()

            default:
                break;
        }
    }

    return (
        <Container>
            <ContentTop>
                <TabSelector label='About' />
                <TabSelector label='Status' />
                <TabSelector label='Abilities' />
            </ContentTop>
            <ContentBottom>
                {pokemon != undefined ? renderContentBottom() : <ActivityIndicator size={100} color='black' />}
            </ContentBottom>
        </Container>
    )
}