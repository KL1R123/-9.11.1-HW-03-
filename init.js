
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthDay').innerText = initPerson.dayMonth;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('job').innerText = initPerson.jobs;
    document.getElementById('Otchestvo').innerText = initPerson.patronymic;
};

generateButton.addEventListener('click', () => {
    const person = personGenerator.getPerson();
	updateDisplay(person);
});

function updateDisplay(person) {
	document.getElementById('surnameOutput').textContent = person.surname;
	document.getElementById('firstNameOutput').textContent = person.firstName;
	document.getElementById('genderOutput').textContent = person.gender;
    document.getElementById('birthDay').innerText = person.dayMonth;
    document.getElementById('birthYearOutput').innerText = person.year;
    document.getElementById('job').innerText = person.jobs;
    document.getElementById('Otchestvo').innerText = person.patronymic;
}

SLS.addEventListener('click', () => {
    const ejecte = personGenerator.getPerson();
    clearDisplay();
});

function clearDisplay(){
	document.getElementById('surnameOutput').textContent = "";
	document.getElementById('firstNameOutput').textContent = "";
	document.getElementById('genderOutput').textContent = "";
    document.getElementById('birthDay').textContent = "";
    document.getElementById('birthYearOutput').textContent = "";
    document.getElementById('job').textContent = "";
    document.getElementById('Otchestvo').textContent = "";
};

  