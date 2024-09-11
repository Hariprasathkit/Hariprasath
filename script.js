const colorPicker = document.getElementById('color-picker');
const colorValue = document.getElementById('color-value');

colorPicker.addEventListener('input', function() {
    document.body.style.backgroundColor = colorPicker.value;
    colorValue.textContent = colorPicker.value;
});
