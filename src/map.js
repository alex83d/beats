let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.757936, 37.597423],
    zoom: 15,
    controls: []
  });

  const coords = [
    [55.752004, 37.5761336],
    [55.756694, 37.616698],
    [55.759228, 37.580876],
    [55.749988, 37.604969],
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: './img/map/marker.svg',
      iconImageSize: [30, 42],
      iconContentOffset: [15, 15]
  });

  coords.forEach(coord => {
      myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);
}


ymaps.ready(init);