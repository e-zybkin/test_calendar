(function () {
	const darkTheme = 'lara-dark-indigo';
	
	const lightTheme = 'lara-light-indigo';
	
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	
	const darkMode = localStorage.getItem('darkMode') === 'true' ?? prefersDarkMode;
	
	const themeLink = document.getElementById('app-theme');
	
	if (themeLink) {
		themeLink.href = `/themes/${darkMode ? darkTheme : lightTheme}/theme.css`;
	}

})();