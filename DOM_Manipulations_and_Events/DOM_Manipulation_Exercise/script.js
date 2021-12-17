const container = document.querySelector('#container');

const firstExercise = document.createElement('p');
firstExercise.classList.add('firstExercise');
firstExercise.style.color = 'red';
firstExercise.textContent = 'Hey I\'m red!';

container.appendChild(firstExercise);

const secondExercise = document.createElement('h3');
secondExercise.classList.add('secondExercise');
secondExercise.style.color = 'blue';
secondExercise.textContent = 'I\'m a blue h3!';

container.appendChild(secondExercise);

const thirdExercise = document.createElement('div');
thirdExercise.classList.add('thirdExercise');
thirdExercise.style.border = '8px solid black';
thirdExercise.style.backgroundColor = 'pink';

//doesn't work if appended after appending one and two to thirdElement
container.appendChild(thirdExercise);

const thirdElement = document.querySelector('.thirdExercise');

const one = document.createElement('h1');
one.classList.add('one');
one.textContent = 'I\'m in a div';

thirdElement.appendChild(one);

const two = document.createElement('p');
two.classList.add('two');
two.textContent = 'ME TOO!';

thirdElement.appendChild(two);