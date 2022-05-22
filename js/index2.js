// Iteration 1: Names and Input

const hacker1 = 'Guillem'
    console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'BERNAT'
    console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}



//Iteration 3: Loops
let newDriver = ''

for(let i = 0; i < hacker1.length; i++){
    newDriver += hacker1[i].toUpperCase() + ' '
}
  console.log(newDriver)



// for (let i = 0; i < hacker1.length; i++) {
//     console.log(hacker1.charAt[i].toUpperCase)
// }

// console.log('Y AHORA AL REVÉS')

// for (let i = sentence.length - 1; i >= 0; i--) {
//     console.log(`El caracter es ${sentence.charAt(i)}`)
// }






//1
const hacker10 = 'Guillem'
    console.log(`The driver's name is ${hacker10}`)

const hacker20 = 'Bernat'
console.log(`The navigator's 's name is ${hacker20}`)


//2
if (hacker10.length > hacker20.length) {
    console.log(`The driver has the longest name, it has ${hacker10.length} characters.`)
} else if  (hacker10.length > hacker20.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker20.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker20.length} characters!`)
}


//3.1
let capsName = ''

for (let i = 0; i < hacker10.length ; i++) {
    capsName += hacker10[i].toUpperCase() + ' '
}

console.log(capsName)



//3.2
let reverse = ''
for (let i = hacker20.length -1; i >= 0; i--) {
    reverse += hacker20[i] 
}

console.log(reverse)





//----------------------------------------------------------------------------------------


console.log('----------------------------->   JUST DO IT AGAIN   <--------------------------------')
//1
const coder1 = 'Guillem'
const coder2 = 'Bernat'

console.log(`The driver's name is ${coder1}`)
console.log(`The navigator's name is ${coder2}`)


//2
if (coder1.length > coder2.length) {
    console.log(`The driver has the longest name, it has ${coder1.length} characters.`)
} else if (coder1.length > coder2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${coder2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${coder1.length} characters!`)
}

//3.1
let newCoder = ''
for (let i = 0; i <= coder1.length -1; i++) {
    newCoder += coder1[i].toUpperCase() + ' '
}
console.log(newCoder)


//3.2
let reverseCoder = ''
for (let i = coder1.length - 1; i >= 0; i--) {
    reverseCoder += coder1[i]
}
console.log(reverseCoder)


//3.3

if (coder1.localeCompare(coder2) === -1) {
    console.log(`The driver's name goes first.`)
} else if (coder1.localeCompare(coder2) === 1) {
    console.log(`Yo, the navigator's name goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)}