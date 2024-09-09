const numbers=[1,2,3,4,5,6,7,8,9,10]
const oddNumbers=[]
const evenNumbers=[]

numbers.map(
    num=>num%2===0?evenNumbers.push(num):oddNumbers.push(num)
)
console.log("oddNumbers:",oddNumbers)
console.log("evenNumbers:",evenNumbers)