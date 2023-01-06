// https://www.youtube.com/watch?v=oAmHpQAe9DI&ab_channel=EmileyPalmquist

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function formatWord(word){
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function formatTutorial(element){
  let arry = element.split(" ");
  return arry.map(formatWord).join(" ")
}

const titleCased = () => {
  let formattedArray = tutorials.map(formatTutorial);
  return formattedArray;
}

// console.log(titleCased())