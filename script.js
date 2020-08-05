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
		console.log(e); 
		L.marker(e.latlng).addTo(mymap);
		
		// Add Location Information to DOM Element usign JQUERY
        $("#latlng").append("Latitude: "+e.latitude+", Longitude: "+e.longitude); 


	});
});
