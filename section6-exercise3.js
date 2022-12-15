// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(numOne, numTwo){
  let frequency = {}
  const strOne = numOne.toString()
  const strTwo = numTwo.toString()

  if (strOne.length !== strTwo.length) {
    return false
  }

  for (let char in strOne) {
      let digit = strOne[char]
      frequency[digit] ? frequency[digit] ++ : frequency[digit] = 1
  }


  for (let char in strTwo) {
    let digit = strTwo[char]
    if (!frequency[digit]) {
        return false
    } else {
        frequency[digit]--
    }
}
  
  return true
}

sameFrequency(322,323)