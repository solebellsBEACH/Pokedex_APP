import { returnBattleResult } from "../../screens/BattleScreen/useBattleScreen/hooks"
import { IPokemon } from "../../utils/interfaces"

test('Testando hook que verifica o resultado da batalha dos Pokemons', () => {
    const you: IPokemon = {
        "_id": "62fe6de7fac8d1653db59508",
        "name": "bulbasaur",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "height": 7,
        "type": "grass",
        "abilities": [
            {
                "name": "overgrow",
                "value": 1
            },
            {
                "name": "chlorophyll",
                "value": 3
            }
        ],
        "stat_value": [
            {
                "stats_value": 45,
                "name": "hp"
            },
            {
                "stats_value": 49,
                "name": "attack"
            },
            {
                "stats_value": 49,
                "name": "defense"
            },
            {
                "stats_value": 65,
                "name": "special-attack"
            },
            {
                "stats_value": 65,
                "name": "special-defense"
            },
            {
                "stats_value": 45,
                "name": "speed"
            }
        ],
    }
    const computer: IPokemon = {
        "_id": "62fe6de7fac8d1653db59509",
        "name": "ivysaur",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        "height": 10,
        "type": "grass",
        "abilities": [
            {
                "name": "overgrow",
                "value": 1
            },
            {
                "name": "chlorophyll",
                "value": 3
            }
        ],
        "stat_value": [
            {
                "stats_value": 60,
                "name": "hp"
            },
            {
                "stats_value": 62,
                "name": "attack"
            },
            {
                "stats_value": 63,
                "name": "defense"
            },
            {
                "stats_value": 80,
                "name": "special-attack"
            },
            {
                "stats_value": 80,
                "name": "special-defense"
            },
            {
                "stats_value": 60,
                "name": "speed"
            }
        ],
    }

    expect(returnBattleResult({ you, computer }))
})