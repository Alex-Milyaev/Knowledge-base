$(document).ready(function() {

    $.each($('.checkbox'), function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }    
    });
    $(document).on('click', '.checkbox', function(event) {
        if($(this).hasClass('active')){
            $(this).find('input').prop('checked',false);
        }else{
            $(this).find('input').prop('checked',true);
        }    
        $(this).toggleClass('active');

        return false;
    });
});

const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element, {
        searchEnabled: false,
    });   
};

defaultSelect(); 

const multiDefault = () => {
    const elements = document.querySelectorAll('.multi-default');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
        });
    });
}

multiDefault();


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872197, 2.354224],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12
    });

    var myPlacemark = new ymaps.Placemark([48.872197, 2.354224], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'Subtract.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}

$(".form").on("submit", function (e) {
    e.preventDefault();
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7 (999)-999-99-99");

im.mask(inputs);

new JustValidate('.form_validate', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone)
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        },
    },
    messages: {
        name: "Как вас зовут?",
        tel: "Укажите ваш телефон",
        mail: "Укажите ваш E-mail",
    }
});   