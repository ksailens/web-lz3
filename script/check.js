// function checkData() {
//     var valid = true;
//     var elems = document.contactsForm;
//     var textArea = elems.FIO.value;
//     var wordCounter = textArea.split(' ').length;
//     var el4 = document.querySelector(".focusP2");
//     var el5 = document.querySelector(".focusSelect3");
//
//     elems.tel.pattern = "(\\+7|\\+3)[0-9]{9,11}";
//
//     if ((elems.question.value === '')) {
//         alert ( "Пожалуйста, напишите свой вопрос." );
//         elems.question.focus();
//         valid = false;
//     }
//
//     if (elems.email.value === '') {
//         alert ( "Пожалуйста, заполните поле 'Ваш e-mail'." );
//         elems.email.focus();
//         valid = false;
//     }
//
//     if (elems.age.selectedIndex === 0) {
//         alert ( "Пожалуйста, выберите Ваш возраст." );
//         el5.style.border = "1px solid red";
//         valid = false;
//     } else {
//         el5.style.border = "";
//     }
//
//     if ((elems.pol[0].checked === false) && (elems.pol[1].checked === false)) {
//         alert ( "Пожалуйста, выберите Ваш пол." );
//         el4.style.border = "1px solid red";
//         valid = false;
//     } else {
//         el4.style.border = "";
//     }
//
//     if ((elems.tel.value === '')) {
//         alert ( "Пожалуйста, заполните номер телефона в формате: +7 или +3, без пробелов, от 9 до 11 цифр, включая код." );
//         elems.tel.focus();
//         valid = false;
//     }
//
//     if ((wordCounter<3) || elems.FIO.value === '') {
//         alert ( "Пожалуйста, заполните поле 'Ваше ФИО' полностью.");
//         elems.FIO.focus();
//         valid = false;
//     }
//
//     return valid;
// }

function validate() {
	var valid_global = validate_form(document.form__contact),
		valid_specific = validate_contacts(document.form__contact);
	document.form__contact.submit.disabled = valid_global || valid_specific;
}

function validate_contacts(form) {
	var validates = [
		validate_field(form.name, /^[\wа-яё]+\s+[\wа-яё]+\s*[\wа-яё]*$/i, 'Введите в формате: Фамилия Имя Отчество'),
		validate_field(form.tel, /^\+?(?:380(\d){9}|7\s*\(?\d{3}\)?\s*(?:-?\d){7})$/i, 'Допустимы действительные номера +7 и +380'),
		validate_field(form.email, /^.+@.+\..+$/i, 'Введите действительную почту')
	];
	for (var i = 0; i < validates.length; i++) {
		if (validates[i]) {
			return true;
		}
	}
	return false;
}

function initValidation() {
	var form = document.form__contact,
		inputs = form.getElementsByTagName('input'),
		selects = form.getElementsByTagName('select'),
		i;
	for (i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('change', validate);
		if (inputs[i].type != 'checkbox' && inputs[i].type != 'radio') {
			inputs[i].addEventListener('keyup', validate);
		}
	}
	for (i = 0; i < selects.length; i++) {
		selects[i].addEventListener('change', validate);
	}
}

var once_contact = true;
document.body.addEventListener('load', function () {
	if (!once_contact) {
		return;
	}
	once_contact = false;

	initValidation();
}, true);
