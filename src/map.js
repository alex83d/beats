let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.752004, 37.5761336],
    zoom: 17,
    controls: []
  })
}


ymaps.ready(init);