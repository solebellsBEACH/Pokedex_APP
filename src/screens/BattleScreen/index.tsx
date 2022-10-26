import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { DefaultButton, LoadingComponent } from '../../components'
import { INavigationProps } from '../../utils/interfaces'
import { ParamList } from '../../utils/types'
import { Container, HeadLogo, Content, LoseLogo, WinLogo, GoallessLogo } from './styles'
import { BattleResult } from './useBattleScreen/components'
import { returnBattleResult, returnFinishResult } from './useBattleScreen/hooks'

export const BattleScreen = (props: any) => {
    const [loading, setLoading] = useState(true)
    const route = useRoute<RouteProp<ParamList, 'BattleScreen'>>();
    const { computer, you } = route.params
    const navigation = useNavigation<INavigationProps>()
    const { lose, win } = returnBattleResult({ computer, you })
    const finishResult = returnFinishResult({ lose, win })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2800);
    }, [props])


    const chooseLogo = () => {
        switch (finishResult) {
            case 'win':
                return <WinLogo
                    height={80}
                    source={require('../../assets/you_win.png')} />
            case 'lose':
                return <LoseLogo
                    height={80}
                    source={require('../../assets/you_lose.png')} />
            case 'goalless':
                return <GoallessLogo
                    height={100}
                    source={require('../../assets/withoutWinner.png')} />
            default:
                break;
        }
    }

    return (
        <Container>
            <HeadLogo
                height={120}
                source={require('../../assets/pokemon_battle_screen.png')} />

            <Content>{loading ?
                <View
                    style={{ marginTop: RFValue(100) }}
                >
                    <LoadingComponent size={250} />
                </View> :
                <>
                    {chooseLogo()}
                    <BattleResult computer={computer} you={you} />
                </>
            }
            </Content>
            {!loading && <DefaultButton
                height={RFValue(50) + 'px'}
                label='Voltar para Home'
                handlePress={() => { navigation.navigate('Home') }}
            />}

        </Container>
    )
}