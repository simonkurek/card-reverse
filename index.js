const numOfCards = 22

const equality = (num) => {
    let zero = 0
    let one = 0
    for(let i=0; i<num.length; i++){
        let letter = num.charAt(i)
        if(letter=='0'){
            zero++
        } else if(letter=='1'){
            one++
        } else {
            console.log('error!')
        }
    }
    if(zero==one){
        return num
    }
    return false
}

const addZeros = (num) => {
    let adding = numOfCards-num.length
    let result = ''
    for (let i = 0; i < adding; i++) {
        result += '0'      
    }
    result += num
    return result
}

const numToArray = (num) => {
    if(num!=false){
        return Array.from(num)
    }
    return false
}

const test = (cards) => {
    if(cards!=false){
        let result = ''
        for(let i=0; i<numOfCards; i++){
            result += cards.shift()
            cards.push(cards.shift())
        }
        return Array.from(result)
    }
    return false
}

const alternans = (array) => {
    let result = true
    let last
    array.forEach(element => {
        if(element==last){
            result = false
        } else {
            last=element
        }
    })
    return result
}

let pow = Math.pow(2,numOfCards)
let result
let numbers = []
for(let i=0; i<pow; i++){
    result = parseInt(i,10).toString(2)
    numbers.push(equality(addZeros(result)))
}
//alternans(test(numToArray(
let doublets = []
for(let i=0; i<numbers.length; i++){
    let array = numToArray(numbers[i])
    let tested = test(numToArray(numbers[i]))
    if(array!=false || tested!=false){
        doublets.push({array,tested})
    }
}

for (let i = 0; i < doublets.length; i++) {
    if(alternans(doublets[i].tested)){
        console.log('Result:')
        console.log(doublets[i].array)
    }
}