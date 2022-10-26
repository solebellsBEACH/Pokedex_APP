import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { LoadingComponent } from '../../components'
import { ParamList } from '../../utils/types'
import { Container, HeadLogo, Content } from './styles'
import { BattleResult } from './useBattleScreen/components'

export const BattleScreen = () => {
    const [loading, setLoading] = useState(false)
    const route = useRoute<RouteProp<ParamList, 'BattleScreen'>>();
    const { computer, you } = route.params

    

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
                    <BattleResult />
                </>
            }
            </Content>
        </Container>
    )
}