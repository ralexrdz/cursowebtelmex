// VARIABLE GLOBAL
let map
let pointsArray

// DOM READY
document.addEventListener("DOMContentLoaded", function () {
    map = L.map("mapid").setView([19.4, -99.4], 10)
    
    // Tiles de open street maps
    //L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.satellite'
    }).addTo(map);
    let marker1 = L.marker([19.4, -99.4]).addTo(map)
    let marker2 = L.marker([19.5, -99.5]).addTo(map)
    let marker3 = L.marker([19.3, -99.5]).addTo(map)
    let marker4 = L.marker([19.2, -99.6]).addTo(map)
    let markerTelmexHub = L.marker([19.431326, -99.136773]).addTo(map)
    marker1.bindPopup("<ul><li>Hola 1</li><li>Hola 2</li><li>Hola 3</li><li>Hola 4</li><li>Hola 5</li</ul>")
    marker2.bindTooltip("")
    marker3.bindTooltip("Aloha")
    marker4.bindTooltip("YOLO")
    markerTelmexHub.bindTooltip("TelmexHub")
})

function onMapClick(e) {
    pointsArray.push([e.latlng.lat, e.latlng.lng])
    console.log(pointsArray)
}

function startPolygon() {
    pointsArray = []
    document.getElementById("start-polygon").setAttribute("disabled", true)
    document.getElementById("draw-polygon").removeAttribute("disabled")
    map.on('click', onMapClick)
}

function finishPolygon() {
    document.getElementById("draw-polygon").setAttribute("disabled", true)
    document.getElementById("start-polygon").removeAttribute("disabled")
    map.off('click', onMapClick)
    let coords = "<ul>" + pointsArray.map(p => `<li>${p}</li>`).join('') + "</ul>"
    L.polygon(pointsArray,{}).bindPopup(coords).addTo(map)
    // L.polygon(pointsArray,{}).addTo(map)
}

function showLocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(moveToLocation)
    } else {
        console.log("No tienes acceso a GPS")
    }
}

function moveToLocation (position) {
    console.log(position)
    map.flyTo([position.coords.latitude, position.coords.longitude], 16)
}
