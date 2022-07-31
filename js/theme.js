document.addEventListener('DOMContentLoaded', () => {
  // We want to add a click event listener to the theme button, in order to toggle different theme colors.

  const themeToggleBtns = document.getElementsByClassName('theme-toggle-btn');

  for (let i = 0; i < themeToggleBtns.length; i++) {
    const themeToggleBtn = themeToggleBtns[i];

    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const bodyTag = document.querySelector('body');
      const headerTag = document.querySelector('header');
      const mainTag = document.querySelector('main');
      const previousThemeToggleBtn = document.querySelector('.theme-toggle-btn.toggled');
      
      previousThemeToggleBtn.classList.remove('toggled');
      previousThemeToggleBtn.classList.add('hide');

      themeToggleBtn.classList.remove('hide');
      themeToggleBtn.classList.add('toggled');

      bodyTag.classList.remove(`${previousThemeToggleBtn.id}`);
      bodyTag.classList.add(themeToggleBtn.id);
      headerTag.classList.remove(`${previousThemeToggleBtn.id}`);
      headerTag.classList.add(themeToggleBtn.id);
      mainTag.classList.remove(`${previousThemeToggleBtn.id}`);
      mainTag.classList.add(themeToggleBtn.id);
    });
  }
});