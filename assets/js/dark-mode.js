document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  var body = document.body;
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }
  toggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
});
