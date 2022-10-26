const readyForFight = ({ computer, you }: { you: any | null, computer: any | null }): boolean => {
    return you !== null && computer !== null
}

export { readyForFight } 