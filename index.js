// Code your solutions in this file
const birthday = ["Charli", "Samip", "Ali"]

function writeCards(birthday) {
    for (let n = 0; n < birthday.length; n++) {
        console.log(`Thank you, ${birthday[n]}, for the wonderful birthday gift!`)
    }

    return birthday
}

writeCards(birthday)

let countDown = 10
while (countDown > -1) {
    console.log(countDown--)
}
