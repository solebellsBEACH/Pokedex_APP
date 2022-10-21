import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch } from 'react-redux';
import { ExitCircleIcon } from '../../../../../assets';
import { useCapitalizeFirstLetter } from '../../../../../utils/hooks';
import { Creators as HomeActions } from '../../../../../store/ducks/home'
import { Container, ItemContainer, ItemContent, ItemText } from './styles'

interface IFiltersContent {
    filterActived: string;
    setFilterActived: React.Dispatch<React.SetStateAction<string>>;
}

export const FiltersContent = ({ setFilterActived, filterActived }: IFiltersContent) => {
    const dispatch = useDispatch()
    interface IItemProps {
        label: string;
        onPress?: () => void;
    }

    const handlePress = (label: string) => {
        setFilterActived('')
    }
    const handlePressDefaultFilterButton = (): void => {
        dispatch(HomeActions.HomePokemonsRequest({
            offset: 0,
            limit: 20
        }))
    }

    const Item = ({ label, onPress }: IItemProps) => {
        return <>
            <ItemContainer
                onPress={() => {
                    if (onPress) onPress()
                    else handlePress(label)
                }}
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
            {filterActived == '' ? <Item
                onPress={handlePressDefaultFilterButton}
                label={'Todos'} key={'Todos'} /> : <Item label={filterActived} key={filterActived} />
            }
        </>
    )
}

