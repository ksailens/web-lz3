function sessionStorage(name) {
	var pages = ['Главная', 'Обо мне', 'Мои интересы', 'Мой фотоальбом', 'Образование', 'Связь со мной', 'Входное тестирование'];
	for (var i = 0; i < pages.length; i++) {
		var iValue = localStorage[pages[i]] || 0;
		localStorage.setItem(pages[i], iValue);
	}

	localStorage.setItem(name, parseInt(localStorage.getItem(name)) + 1);

}

function deleteStorage(name) {
	localStorage.removeItem(name);
	return '';
}