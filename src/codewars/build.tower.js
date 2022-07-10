function towerBuilder(nFloors) {
    tower = []
    countOfStars = 1 + 2 * (nFloors - 1) 
    toweFloor = '*'.repeat(countOfStars)
    for (let i = 0; i < nFloors; i++){
        start = new RegExp(`^.{${i}}`, 'g')
        end = new RegExp(`.{${i}}$`)
        tower.push(toweFloor.replace(start,' '.repeat(i)).replace(end, ' '.repeat(i)))
        console.log(tower[i]);
    }

    return tower.reverse()
}

console.log(towerBuilder(6))