function randomQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#quote-text").html("<span id='quote-text'>" + "   " + response.quoteText + "</span>");
      $("#author-text").html("<span id='author-text'>" + response.quoteAuthor + "</span>");   
      $("#twitter").attr("href", "https://twitter.com/home/?status=" + response.quoteText + '('+ response.quoteAuthor +')' );
    }
  });
}

$(function() {
  randomQuote();
});

$("button").click(function() {
  randomQuote();
});