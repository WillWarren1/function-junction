/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

function max(firstNum, secondNum) {
  if (firstNum > secondNum) {
    return firstNum
  } else {
    return secondNum
  }
}

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

const maxOfThree = (num1, num2, num3) => {
  num1 = +num1 || 0
  num2 = +num2 || 0
  num3 = +num3 || 0

  if (num1 == 0 && num2 == 0 && num3 == 0) {
    return NaN
  } else {
    return Math.max(num1, num2, num3)
  }
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = (num1, num2) => {
  return num1 + num2
}

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

const getSum = (total, num) => {
  return total + num
}

const sumOfArray = array => {
  if (array === undefined || array.length == 0) {
    return 0
  } else {
    return array.reduce(getSum)
  }
}

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

const isVowel = string => {
  {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(string.toLowerCase()) !== -1
  }
}

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

const rovarspraket = text => {
  let string = text.toLowerCase()
  let vowels = ['a', 'e', 'i', 'o', 'u', ' ']
  let y = ''
  for (let i = 0; i < string.length; i++) {
    let current = string.charAt(i)
    if (vowels.indexOf(current) != -1) {
      y = y + current
    } else {
      y = y + (current + 'o' + current)
    }
  }
  return y
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

const reverse = string => {
  return string
    .split('')
    .reverse()
    .join('')
}

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */
function longer(a, b) {
  return b.length > a.length ? b : a
}

const findLongestWord = str => {
  let words = str.split(' ')
  return words.reduce(longer)
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
})

test('maxOfThree()', t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
})

test('sum()', t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', t => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

test('max() can handle non numbers', t => {
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree() can handle non numbers', t => {
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

/* eslint-enable */
