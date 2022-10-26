import { IBattleResult, IPokemon } from "../../../../utils/interfaces";

const returnBattleResult = ({ computer, you }: { computer: IPokemon; you: IPokemon }) => {
    let result: IBattleResult = { hp: 'goalless', attack: 'goalless', defense: 'goalless', ['special-attack']: 'goalless', ['special-defense']: 'goalless', speed: 'goalless', }
    let lose: number = 0;
    let win: number = 0
    you.stat_value.map((e, i) => {
        if (e.stats_value > computer.stat_value[i].stats_value) {
            win = win + 1
            result[e.name] = 'win'
        }
        else {
            lose = lose + 1
            result[e.name] = 'lose'
        }
    })
    return {
        lose,
        win,
        result
    }
}

export {
    returnBattleResult
}