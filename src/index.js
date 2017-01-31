/**
 * Module dependencies.
 */
import qs from 'qs';
import daum from 'daum';

/**
 * Setting up map.
 */

const options = {
  width: 600, // width of map container
  height: 300, // height of map container
  zoom: 3,
  center: '33.450701, 126.570667',
  // upper properties are **default** values, these values can be override.
  ...qs.parse(location.search.slice(1))
};

const mapContainer = document.getElementById('map');

// Setup map container size
['width', 'height'].forEach((k) => {
  const v = options[k];
  mapContainer.style[k] = ~v.toString().indexOf('px') ? v : v + 'px';
});

// Initialize map
const map = new daum.maps.Map(mapContainer, {
  center: options.center ? toLatLng(options.center) : new daum.maps.LatLng(33.450701, 126.570667),
  level: +options.zoom || 3
});

// Add markers if exists
options.marker && options.marker.length && options.marker.forEach((v) => {
  const markerLatLng = toLatLng(v.center);
  const marker = new daum.maps.Marker({
    position: markerLatLng
  });
  marker.setMap(map);

  if (v.label) {
    let infoWindow = new daum.maps.InfoWindow({
      position: markerLatLng,
      content: `<p style="text-align: center; padding: 5px; margin: 0;">${v.label}</p>`
    });

    infoWindow.open(map, marker);
  }
});


function toLatLng(str) {
  const [lat, lng] = str.split(',').map((v) => v && +v.trim());

  return new daum.maps.LatLng(lat, lng);
}
