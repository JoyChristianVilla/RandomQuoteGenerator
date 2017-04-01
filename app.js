$(document).ready(function() {


  var author;

  var quote = '"What\'s another word for thesaurus?"  - Steven Wright';

/*var array = [
    ['"Comedy is simply a funny way of being serious."', '- Peter Ustinov'],
    ['"Instant gratification takes too long."', '- Carrie Fisher'],
    ['"If you don\'t mind, it doesn\'t matter."', '- Jack Benny'],
    ['"Don\'t talk about yourself; it will be done when you leave. "', '- Wilson Mizner'],
    ['"It always seems impossible until it\'s done."', '- Nelson Mandela'],
    ['"To succeed in life, you need three things: a wishbone, a backbone and a funny bone."', '- Reba McEntire'],
    ['"Hate is too great a burden to bear."', '- Martin Luther King, Jr.'],
    ['"Try and fail, but never fail to try."', '- Jared Leto'],
    ['"Love harder than any pain you’ve ever felt."', '- Unknown']
  ];
  */

  /* function getQuote() {
     axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=jsonp&lang=en')
     .then(function({ data }) {
       console.log(data);
       $('#quote').html(data.quoteText);
       $('#person').html(data.quoteAuthor);
       quote = data.quoteText + '- ' + data.quoteAuthor;
     })
     .catch(function(error) {
       console.error(error);
     })
   } */

  function getQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(data) {
        console.log(data);

        if (data.quoteAuthor) {
          author = ' - ' + data.quoteAuthor;
        } else {
          author = ' - unknown';
        }
        $('#quote').html(data.quoteText);
        $('#person').html(author);
        quote = data.quoteText + author;
      },
      error: function(errorMessage) {
        alert('error');
      }
    });
  }

  $('#quote-button').on('click', function() {
    getQuote();
  });

  $('#twitter').on('click', function() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
  });
});
