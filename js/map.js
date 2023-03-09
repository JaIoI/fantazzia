ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [55.876152, 37.588808],
            zoom: 11,
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-icon.svg',
            iconImageSize: [rem(7), rem(9.6)],
            iconImageOffset: [rem(-3.5), rem(-9.2)],
        });

    myMap.geoObjects.add(myPlacemark);
});