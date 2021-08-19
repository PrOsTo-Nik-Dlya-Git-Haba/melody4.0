$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path')
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    // при наведении на этаж 
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor') // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor');// получаем значение текущего этажа
        $('.counter').text(currentFloor);// записываем значение этажа в счётчик справа
    });


    counterUp.on('click', function () { // отслеживаем клмк по кнопке вверх  
        if (currentFloor < 18) { // проверяем значение этажа
            currentFloor++;// прибавляем этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});// форматируем переменную сэтажом,из 1 в 01
            $('.counter').text(usCurrentFloor);// записываем значение этажа в счётчик справа
            floorPath.removeClass('current-floor');// удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');// подсвечием текущий этаж
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }

    });
});

