
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
      toggle.textContent = opened ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const message = document.getElementById("formMessage");
    message.textContent = "ตรวจสอบข้อมูลเรียบร้อย (ตัวอย่างนี้ยังไม่ได้ส่งข้อมูลไปยังวิทยาลัย)";
    form.reset();
  });

  const upload = document.getElementById("galleryUpload");
  const grid = document.getElementById("galleryGrid");
  if (upload && grid) upload.addEventListener("change", () => {
    [...upload.files].forEach(file => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = event => {
        const slot = document.createElement("div");
        slot.className = "gallery-slot has-image";
        const img = document.createElement("img");
        img.src = event.target.result;
        img.alt = file.name;
        const caption = document.createElement("span");
        caption.textContent = file.name;
        slot.append(img, caption);
        grid.appendChild(slot);
      };
      reader.readAsDataURL(file);
    });
    upload.value = "";
  });
});
