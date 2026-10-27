const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const feedback = document.querySelector('#formFeedback');
    feedback.textContent = `ขอบคุณคุณ${name} แบบฟอร์มตัวอย่างตรวจสอบข้อมูลแล้ว แต่ยังไม่ได้ส่งไปยังวิทยาลัย กรุณาติดต่อผ่านช่องทางทางการ`;
  });
}
