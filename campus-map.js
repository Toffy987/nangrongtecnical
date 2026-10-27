// เมาส์ใช้ hover ได้ ส่วนมือถือแตะเพื่อเปิด/ปิดชื่ออาคาร
document.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector("#campusMap");
  if (!map) return;
  const pins = [...map.querySelectorAll(".building-pin")];
  pins.forEach(pin => {
    pin.addEventListener("click", event => {
      event.stopPropagation();
      const wasActive = pin.classList.contains("is-active");
      pins.forEach(item => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      if (!wasActive) {
        pin.classList.add("is-active");
        pin.setAttribute("aria-pressed", "true");
      }
    });
    pin.setAttribute("aria-pressed", "false");
  });
  map.addEventListener("click", event => {
    if (event.target === map || event.target.classList.contains("campus-map-image")) {
      pins.forEach(pin => {
        pin.classList.remove("is-active");
        pin.setAttribute("aria-pressed", "false");
      });
    }
  });
});
