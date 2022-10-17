import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ExitCircleIcon } from '../../../../../assets';
import { useCapitalizeFirstLetter } from '../../../../../utils/hooks';

import { Container, ItemContainer, ItemContent, ItemText } from './styles'

interface IFiltersContent {
    filters: string[]
    filterActived: string;
    setFilterActived: React.Dispatch<React.SetStateAction<string>>;
}

export const FiltersContent = ({ filters, setFilterActived, filterActived }: IFiltersContent) => {

    interface IItemProps {
        label: string;
    }

    const handlePress = (label: string) => {
        // const array = [...filterActived];
        // array.splice(array.indexOf(label))
        // setFilterActived(array)
    }

    const Item = ({ label }: IItemProps) => {
        return <>
            <ItemContainer
                onPress={() => { handlePress(label) }}
            >
                <ItemContent>
                    <ItemText>
                        {useCapitalizeFirstLetter(label)}
                    </ItemText>
                    <TouchableOpacity
                        onPress={() => { handlePress(label) }}
                    >
                        <ExitCircleIcon style={{ marginTop: RFValue(2), }} />
                    </TouchableOpacity>
                </ItemContent>
            </ItemContainer>
        </>
    }

    useEffect(() => { console.log(filters) }, [filters])

    return (
        <>
            {filters.length == 0 ? <Item label={'Todos'} key={'Todos'} /> :
                <Container<any>
                    data={filters}
                    keyExtractor={(index: { index: number, item: string }) => `key-pokemonType-${index}`}
                    renderItem={({ item, index }: { index: number, item: string }) => {
                        return <Item label={item} key={index} />
                    }}
                    numColumns={3}

                />
            }
        </>
    )
}

