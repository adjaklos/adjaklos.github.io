const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const newTheme = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
