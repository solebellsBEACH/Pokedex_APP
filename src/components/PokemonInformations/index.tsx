import React, { useState } from 'react'

import { Label, Value, Container, ContentTop, TabSelectorContainer, TabSelectorText, ContentBottom, InformationItemContainer } from './styles'

export const PokemonInformations = () => {

    const [activeTab, setActiveTab] = useState<'Sobre' | 'Status' | 'Evolução'>('Sobre')
    interface ITabSelectorProps {
        label: 'Sobre' | 'Status' | 'Evolução';
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

    return (
        <Container>
            <ContentTop>
                <TabSelector label='Sobre' />
                <TabSelector label='Status' />
                <TabSelector label='Evolução' />
            </ContentTop>
            <ContentBottom>
                <InformationItem label='Especie' value={data.especie} />
                <InformationItem label='Tamanho' value={data.tamanho} />
                <InformationItem label='Habilidades' value={data.habilidades} />
                <InformationItem label='Genero' value={data.genero} />
            </ContentBottom>
        </Container>
    )
}