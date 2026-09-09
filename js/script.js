// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// Sticky header shadow on scroll
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 4px 16px rgba(0,0,0,0.06)' : 'none';
  });
}

// Gallery filter
const filterBar = document.getElementById('filterBar');
if (filterBar) {
  const buttons = filterBar.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.cat === filter) ? '' : 'none';
      });
    });
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const note = document.getElementById('formNote');
    const message = [
      'New rental enquiry from the website',
      '',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Equipment: ${formData.get('equipment')}`,
      `Rental Date: ${formData.get('date') || 'Not specified'}`,
      `Duration: ${formData.get('duration')}`,
      `Message: ${formData.get('message') || 'Not specified'}`
    ].join('\n');

    note.textContent = 'Opening WhatsApp with your enquiry...';
    window.location.href = `https://wa.me/917893728505?text=${encodeURIComponent(message)}`;
  });
}
