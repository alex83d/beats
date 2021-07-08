let myMap;



const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.755333, 37.598672],
    zoom: 13,
    controls: []
  }, {
    maxZoom: 16
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

  myMap.behaviors.disable('scrollZoom');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //... отключаем перетаскивание карты
    myMap.behaviors.disable('drag');
  }


}


ymaps.ready(init);