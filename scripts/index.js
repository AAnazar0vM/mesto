let openPopup = document.querySelector('.profile__button'); //Кнопка открытия попап
let closedPopup = document.querySelector('.popup__close');//Кнопка закрытия попап

let popup = document.querySelector('.popup'); //Попап
let formPopup = document.querySelector('.popup__form'); //Попап форма

let nameForm = document.querySelector('#formName'); //Имя В ФОРМЕ
let formSpecial = document.querySelector('#formSpecial'); //Описание под именем В ФОРМЕ
let profileName = document.querySelector('.profile__name'); //Имя 
let profileSubtitle = document.querySelector('.profile__subtitle'); //Описание под именем



function showPopup() {
	popup.classList.add('popup__opened');
};
function hiddenPopup() {
	popup.classList.remove('popup__opened');
};
function handleFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = nameForm.value;
	profileSubtitle.textContent = formSpecial.value;
	hiddenPopup();
};

formPopup.addEventListener('submit', handleFormSubmit); //Сохранить

openPopup.addEventListener('click', showPopup);
closedPopup.addEventListener('click', hiddenPopup);