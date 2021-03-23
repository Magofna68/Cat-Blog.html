// first $: is the document ready?
$(function() {
  // second $: when we "click" #lightswitch, run the following function()
  $("#lightswitch").on("click", function() { 
    // third $: add or remove the class "darkmode" from our <body>
    $("body").toggleClass("darkmode")
  })
})