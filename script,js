const slider = document.getElementById('slider');
  const valueField = document.getElementById('valueField');

  // Функция обновления текстового поля при изменении слайдера
  slider.oninput = function() {
    valueField.value = this.value;
  }

  // Функция обновления слайдера при изменении текстового поля
  valueField.oninput = function() {
    slider.value = this.value;
  }
