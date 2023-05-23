const input1 = document.getElementById('input1');
        const input2 = document.getElementById('input2');
        const minusBtn = document.getElementById('minus');
        const plusBtn = document.getElementById('plus');
        const divideBtn = document.getElementById('divide');
        const calculateBtn = document.getElementById('calculate');
        const resultDiv = document.getElementById('result');
         function calculateResult() {
            const number1 = parseFloat(input1.value);
            const number2 = parseFloat(input2.value);

            if (isNaN(number1) || isNaN(number2)) {
                resultDiv.textContent = 'Введите два числа!';
                return;
            }

            if (this.id === 'minus') {
                const result = number1 - number2;
                resultDiv.textContent = 'Результат: ' + result;
            } else if (this.id === 'plus') {
                const result = number1 + number2;
                resultDiv.textContent = 'Результат: ' + result;
            } else if (this.id === 'divide') {
                if (number2 === 0) {
                    resultDiv.textContent = 'Деление на ноль невозможно!';
                } else {
                    const result = number1 / number2;
                    resultDiv.textContent = 'Результат: ' + result;
                }
            }
        }

        minusBtn.addEventListener('click', calculateResult);
        plusBtn.addEventListener('click', calculateResult);
        divideBtn.addEventListener('click', calculateResult);
        calculateBtn.addEventListener('click', calculateResult);