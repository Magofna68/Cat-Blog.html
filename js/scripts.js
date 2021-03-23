// first $: is the document ready? 
// If it is, the contents of the function() can run
$(function() {
  // second $: when we "click" #lightswitch, run the following function()
  $("#lightswitch").on("click", function() { 
    // third $: add or remove the class "darkmode" from our <body>
    $("body").toggleClass("darkmode")
  })
})


function sub(a, b) { 
  return a - b 
}

const add = (a, b) => {
  return a + b
}

const mul = (a, b) => a * b // auto return!

const foodReviews = { // this is an Object with 2 properties
  boiledEgg: 'overcooked',
  banana: 'perfectly ripe but delicious',
  any: food => food + ' was pretty good!'
}

// foodReviews.boiledEgg -> 'overcooked'
// foodReviews.any(orange) -> 'orange was pretty good!'


console.log(add(2, 2))