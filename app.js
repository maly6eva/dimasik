

const secretNum =5
let tries = 0;

function guessNum(num) {
if (tries >5) return alert('Игра окончена');

if (num === secretNum) {
    alert('Вы угадали!')
    tries = 5;
} else {
    alert('Вы не угадали')
    tries++
}

}


const riddle = {
    question: 'Висит груша, нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(str) {
        if (this.tries < 1) {
            console.log('Игра окончена')
            return alert('игра окончена')
        }
        if(str.toLowerCase().includes(this.correctAnswer)) {
            alert('правильно')
            console.log('правильно')
        }else {
            alert('неправильно')
            console.log('неправильно')
            this.tries--;


            const hint = this.hints[this.tries === 2 ? 0 : 1];
            if(this.tries) {
                alert('Подсказка: ' + hint)
            }


        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    const input = document.getElementsByTagName('input')[0];
    const guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);

    }
}






function handleClick() {
    const list = document.getElementById('todo');
    const newTodo = list.value;
    console.log(newTodo)

}