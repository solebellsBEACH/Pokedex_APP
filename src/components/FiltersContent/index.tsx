import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ExitCircleIcon } from '../../assets';
import { useCapitalizeFirstLetter } from '../../utils/hooks';
import { Container, ItemContainer, ItemContent, ItemText } from './styles'

interface IFiltersContent {
    filters: string[]
}

export const FiltersContent = ({ filters }: IFiltersContent) => {

    interface IItemProps {
        label: string;
    }

    const Item = ({ label }: IItemProps) => {
        return <>
            <ItemContainer>
                <ItemContent>
                    <ItemText>
                        {useCapitalizeFirstLetter(label)}
                    </ItemText>
                    <TouchableOpacity>
                        <ExitCircleIcon style={{ marginTop: RFValue(2), }} />
                    </TouchableOpacity>
                </ItemContent>
            </ItemContainer>
        </>
    }

    useEffect(() => { console.log('TROCOU') }, [filters])

    return (
        <>
            {filters.length == 0 ? <Item label={'Todos'} key={'Todos'} /> :
                <Container
                    data={filters}
                    keyExtractor={(item, index) => `key-${index}`}
                    renderItem={({ item, index }) => {
                        return <Item label={item} key={index} />
                    }}
                    numColumns={3}

                />
            }
        </>
    )
}