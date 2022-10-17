import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ExitCircleIcon } from '../../../../../assets';
import { useCapitalizeFirstLetter } from '../../../../../utils/hooks';

import { Container, ItemContainer, ItemContent, ItemText } from './styles'

interface IFiltersContent {
    filterActived: string;
    setFilterActived: React.Dispatch<React.SetStateAction<string>>;
}

export const FiltersContent = ({ setFilterActived, filterActived }: IFiltersContent) => {

    interface IItemProps {
        label: string;
    }

    const handlePress = (label: string) => {
        setFilterActived('')
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

    useEffect(() => { console.log(filterActived) }, [filterActived])

    return (
        <>
            {filterActived == '' ? <Item label={'Todos'} key={'Todos'} /> : <Item label={filterActived} key={filterActived} />
            }
        </>
    )
}

