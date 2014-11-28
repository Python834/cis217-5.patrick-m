/**
 * Created by Owner on 10/24/2014.
 */
$(document).ready(function(){
    var total = 0;
    $('input[type="checkbox"]').click( function(){
        var data_value = $(this).data('price');
        if ($(this).is(":checked")) {
            var grand_total = total + data_value;
            total += data_value;
            $( "#total" ).text('$' + Math.round(grand_total*100)/100);
        } else {
            var grand_total =  total - data_value;
            total -= data_value;
            $( "#total" ).text('$' + Math.round(grand_total*100)/100);
        }
    });
});