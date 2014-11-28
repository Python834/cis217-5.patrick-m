/**
 * Created by Owner on 11/4/2014.
 */
$(".container").tabs({
    collapsible: false,
    show: {effect:"slide", duration: 500}
});

$( "#sortable" ).sortable();

$('#orderLink').on('click', function(event){
    event.preventDefault();
});
