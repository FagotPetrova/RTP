// Получаем все слайдеры и текстовые поля
const sliders = document.querySelectorAll('input[type="range"]');
const valueFields = document.querySelectorAll('input[type="number"]');


let h_c = 8.737
let h_H = 2.488
let h_0 = -0.522
let h_N = -0.494
let h_f = 0.0236


function result() {
    let c = parseFloat(document.getElementById("value_C").value)
    let H = parseFloat(document.getElementById("value_H").value)
    let O = parseFloat(document.getElementById("value_O").value)
    let N = parseFloat(document.getElementById("value_N").value)

    let dH0 = parseFloat(document.getElementById("value_dH0").value)
    let calculatedResult = 100 / (h_c * c + h_H * H + h_0 * O + h_N * N + h_f * dH0 + 1);
    document.getElementById("value_result").value = calculatedResult;

}

// Функция для синхронизации значения слайдера и текстового поля
function syncValues(source, target) {
    target.value = source.value;
}

// Назначаем обработчики событий для слайдеров
sliders.forEach((slider, index) => {
    slider.addEventListener('input', () => {
        syncValues(slider, valueFields[index]);
        result()
    });
});

// Назначаем обработчики событий для текстовых полей
valueFields.forEach((field, index) => {
    field.addEventListener('input', () => {
        syncValues(field, sliders[index])
        result();
    });
});
