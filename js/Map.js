let pos = {
    lat: 21.543346,
    lng: 39.215517,
};

/*-----------------------------------------------------------------------------------
initializes the map
-------------------------------------------------------------------------------------*/
function initMap() {
  var myLatLng = pos;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
    gestureHandling: 'cooperative',
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

/*-----------------------------------------------------------------------------------
adds a marker for the current location along with the animation
-------------------------------------------------------------------------------------*/
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'My current location!'
  });    
    map.addListener('rightclick', function() {  
    document.getElementById('panel').innerHTML  = 'Rightclick Event';
    window.setTimeout(function() {  
      document.getElementById('panel').innerHTML = '';
    }, 2000);  
  });  

/*-----------------------------------------------------------------------------------
adds animation to the current location marker
-------------------------------------------------------------------------------------*/
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
    const infoWindow = new google.maps.InfoWindow;
/*-----------------------------------------------------------------------------------
to display the list of restaurants from JSON file
-------------------------------------------------------------------------------------*/

//var details =  {
//		"restaurantName": "Sandwich Shop",
//		"image": "https://lh5.googleusercontent.com/p/AF1QipNoJ58v885O1M0SC7G_1YF23X6o2F1l7NEoUnCy=w425-h240-k-no",
//		"address": "6496 Prince Mutaib bin Abdulaziz Rd, Mushrifah, Jeddah 23341",
//		"cusine": "Arabian",
//		"priceRange": "$$",
//		"lat": 21.543412,
//		"long": 39.216096,
//		"ratings": [{
//				"stars": 5,
//				"comment": "Delicious! "
//			},
//			{
//				"stars": 5,
//				"comment": "That was the best Shawerma I have ever had. "
//			},
//			{
//				"stars": 2,
//				"comment": "Yummmmy"
//			},
//			{
//				"stars": 5,
//				"comment": "What a sandwich!"
//			}
//		]
//	}
//    
//const str = JSON.parse(details, (key, value) => {
//    // filter-out password from final string
//    if (key === 'stars') {
//        return new Date(value);
//    } else {
//    return value;
//    }
//});
//document.getElementById("showData").innerHTML = str.restaurantName + ", " + str.stars;
//}
//
// 
    
function markStore(storeInfo){

	// Create a marker and set its position.
	var marker = new google.maps.Marker({
		map: map,
		position: storeInfo.location,
		title: storeInfo.name
	});

	// show store info when marker is clicked
	marker.addListener('click', function(){
		showStoreInfo(storeInfo);
	});
}

// show store info in text box
function showStoreInfo(storeInfo){
	var info_div = document.getElementById('nearbyCard1');
	info_div.innerHTML = 'Store name: '
		+ storeInfo.name
		+ '<br>Hours: ' + storeInfo.hours;
}
    var stores = [
		{
			name: 'Store 1',
			location: {lat: 40.785091, lng: -73.968285},
			hours: '8AM to 10PM'
		},
		{
			name: 'Store 2',
			location: {lat: 40.790091, lng: -73.968285},
			hours: '9AM to 9PM'
		}
	];
    stores.forEach(function(store){
	markStore(store);
});
    
    
}