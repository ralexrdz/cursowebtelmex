document.addEventListener("DOMContentLoaded", function () {
    let map = L.map("mapid").setView([19.4, -99.4], 10)
    
    // Tiles de open street maps
    //L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.dark'
    }).addTo(map);
    let marker1 = L.marker([19.4, -99.4]).addTo(map)
    let marker2 = L.marker([19.5, -99.5]).addTo(map)
    let marker3 = L.marker([19.3, -99.5]).addTo(map)
    let marker4 = L.marker([19.2, -99.6]).addTo(map)
    let markerTelmexHub = L.marker([19.431326, -99.136773]).addTo(map)
    marker1.bindPopup("<ul><li>Hola 1</li><li>Hola 2</li><li>Hola 3</li><li>Hola 4</li><li>Hola 5</li</ul>")
    marker2.bindPopup("")
    marker3.bindPopup("Aloha")
    marker4.bindPopup("YOLO")
    markerTelmexHub.bindPopup("TelmexHub")

    map.on('click', onMapClick);
})

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
