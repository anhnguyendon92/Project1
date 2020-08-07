const key = 'cywm9F3bjJCv5L6vBDxE6Y8xJ26x0LKz';

let searchResults = $('.place-search-input').val();
$(document).ready(function(){

$('.searchButton').on('click', function(){
    $('.place-search-input').val('');
})
const file = log,
log = new Log('info');
var queryUrl = 'http://www.mapquestapi.com/search/v2/radius?&key=cywm9F3bjJCv5L6vBDxE6Y8xJ26x0LKz'
$.ajax({
    url: queryUrl,
    dataType: 'json',
    type: 'POST',
    contentType:'json',
    data: {
        key: decodeURIComponent(key),
        json : JSON.stringify( 
            {
                location: { "postalCode": "98765"}, options: { thumbMaps: false}
            }) 
    },
    success: function(data) { log( data ) },
    error: function(data) { log( 'error occurred - ' + zipCode + ' - ' + data ) },


   
});
      
});
