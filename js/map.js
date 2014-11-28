/**
 * Created by Owner on 11/20/2014.
 */
$(document).on("pageinit", "#map_page", function() {
    initialize();
    if ( navigator.geolocation ) {
        function success(pos) {
            $("#from").val(pos.coords.latitude + "," + pos.coords.longitude);
            calculateRoute();
        }
        function fail(error) {
            $("#from").val("Spokane, WA");
            alert("Couldn't get your location. Are your location services enabled?");
            calculateRoute();
        }
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    }
});

$(document).on('click', '#submit', function(e) {
    e.preventDefault();
    calculateRoute();
});

var directionDisplay,
    directionsService = new google.maps.DirectionsService(),
    map;

function initialize()
{
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapCenter = new google.maps.LatLng(47.6726703,-117.3607677);

    var myOptions = {
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directions"));
}

function calculateRoute()
{
    var selectedMode = $("#mode").val(),
        start = $("#from").val(),
        end = "301 E Woodin Ave, Chelan, WA 98816";

    $("#to").val("some address here");

    if(start == '' || end == '')
    {
// cannot calculate route
        $("#results").hide();
        alert("No good!");
        return;
    }
    else
    {
        var request = {
            origin:start,
            destination:end,
            travelMode: google.maps.DirectionsTravelMode[selectedMode]
        };

        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                $("#results").show();
            }
            else {
                $("#results").hide();
            }
        });
    }
}