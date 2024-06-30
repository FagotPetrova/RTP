// Получаем все слайдеры и текстовые поля
const sliders = document.querySelectorAll('input[type="range"]');
const valueFields = document.querySelectorAll('input[type="number"]');

// Функция для синхронизации значения слайдера и текстового поля
function syncValues(source, target) {
  target.value = source.value;
}

// Назначаем обработчики событий для слайдеров
sliders.forEach((slider, index) => {
  slider.addEventListener('input', () => {
    syncValues(slider, valueFields[index]);
  });
});

// Назначаем обработчики событий для текстовых полей
valueFields.forEach((field, index) => {
  field.addEventListener('input', () => {
    syncValues(field, sliders[index]);
  });
});
