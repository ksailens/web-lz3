var x = document.getElementById("contacts");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
	document.getElementById("fullName").style.backgroundColor = "yellow";
}

function myBlurFunction() {
	document.getElementById("fullName").style.backgroundColor = "";
}


// checkedName.onfocus = function() {
// 	if (this.className == 'error') { // сбросить состояние "ошибка", если оно есть
// 		this.className = "";
// 		error.innerHTML = "";
// 	}
// };

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
