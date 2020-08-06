var mymap = L.map('leaflet-map');
mymap.setView([26,87],4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicmhld2l0dCIsImEiOiJTLTM2V3hVIn0.aEYNRWBcgyWFEkZNEIfsqg', {
	maxZoom: 15,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
	}).addTo(mymap);


$('.press-me').on('click',function(){
	mymap.locate({setView:true, maxZoom:15});

	mymap.on('locationfound', function(e){
		L.marker(e.latlng).addTo(mymap);
		// console.log(e); 

		// $.getJSON(`https://eu1.locationiq.com/v1/reverse.php?key=305a936c6c0f8f&lat=${e.latitude}&lon=${e.longitude}&format=json`,function(data){
		// 	$("#latlng").append(`<b>Reverse Geocoding with LocationIQ API</b>
		// 	`)
		// });

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": `https://us1.locationiq.com/v1/reverse.php?key=305a936c6c0f8f&lat=${e.latitude}&lon=${e.longitude}&format=json`,
			"method": "GET"
		  }	
		  
		  $.ajax(settings).done(function (response) {
			$("#latlng").empty()
			$("#latlng").append("Latitude: "+e.latitude+", Longitude: "+e.longitude+`</br></br>`); 
			$("#latlng").append(` \n <b>Reverse Geocoding with LocationIQ API</b> </br>
			 Address: ${response.display_name}`);	

		  });

	});

	mymap.on('locationerror', function(e){
		console.log("Error in loading location");
	});


});
