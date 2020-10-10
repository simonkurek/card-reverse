// let cards = [1,1,1,1,2,2,2,2]
// let result = ''
// for(let i=0; i<8; i++){
//     result += cards.shift()
//     cards.push(cards.shift())
// }
// console.log(result)

const numOfCards = 8

// const realTest = (cards) => {
//     let result = ''
//     if(cards!=false){
//         for(let i=0; i<numOfCards; i++){
//             result += cards.shift()
//             cards.push(cards.shift())
//         }
//     }
//     let array = Array.from(result)
//     return array
// }

// const test = (cardsArray) => {
//     const cards = cardsArray
//     console.log(cards)
//     const array = realTest(cards)
//     console.log(cards)
//     console.log(array)
//     return {array,cards}
// }

const backup = (cards) => {
    console.log('cards:')
    console.log(cards)
    let result = []
    for(let i=0; i<numOfCards; i++){
        result.push(cards.shift())
    }
    console.log('result')
    console.log(result)
    console.log('end result')
    return result
}

const test = (cards) => {
    let result = ''
    if(cards!=false){
        for(let i=0; i<numOfCards; i++){
            result += cards.shift()
            cards.push(cards.shift())
        }
    }
    let array = Array.from(result)
    return array
}

console.log(test([ '1', '1', '1', '1', '0', '0', '0', '0' ]))