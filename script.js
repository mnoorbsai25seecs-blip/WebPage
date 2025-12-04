document.addEventListener('DOMContentLoaded', () => {
  // FAQ toggle
  const faqBtns = document.querySelectorAll('.faq-question');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = btn.nextElementSibling;
      const isVisible = ans.style.display === 'block';
      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      // Toggle current one
      ans.style.display = isVisible ? 'none' : 'block';
    });
  });

  // Dark/Light Mode Toggle
  const toggleBtn = document.getElementById('toggle-mode');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      // You can save user preference in localStorage here if wanted
    });
  }
});