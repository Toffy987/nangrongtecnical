# เว็บไซต์แนะนำวิทยาลัยเทคนิคนางรอง

เว็บไซต์ตัวอย่างแบบ Multi-page ใช้ HTML, CSS และ JavaScript ล้วน ไม่ต้องติดตั้งฐานข้อมูลหรือ build tools

## วิธีเปิดใช้งาน
1. แตกไฟล์ ZIP
2. เปิดโฟลเดอร์ `nangrong-technical-college` ด้วย Visual Studio Code
3. เปิด `index.html` ในเบราว์เซอร์ หรือใช้ส่วนขยาย Live Server เพื่อทดสอบ
4. ใช้งานเมนูทั้ง 10 หน้าได้จากแถบนำทาง

## ไฟล์หลัก
- `index.html` — Home
- `about.html` — About
- `service.html` — Service
- `detail.html` — Detail
- `contact.html` — Contact
- `building.html` — Building
- `location.html` — Location
- `department.html` — Department
- `facilities.html` — Facilities
- `gallery.html` — Gallery
- `assets/css/style.css` — รูปแบบเว็บไซต์
- `assets/js/main.js` — เมนูมือถือ, ปีลิขสิทธิ์, แบบฟอร์มตัวอย่าง และอัปโหลดภาพเพื่อ preview

## วิธีใส่รูปภาพจริง
นำรูปภาพไปวางใน `assets/images` แล้วแก้ HTML ของแต่ละหน้าให้ใช้ `<img src="assets/images/ชื่อไฟล์.jpg" alt="คำอธิบายภาพ">` แทนกล่อง `.image-placeholder` ตัวอย่างชื่อไฟล์ที่เตรียมตำแหน่งไว้แสดงอยู่ในแต่ละกล่อง

## จุดที่ควรแก้ก่อนเผยแพร่
- หน้า About: เติมปีที่ก่อตั้งและประวัติจากเอกสารทางการของวิทยาลัย
- หน้า Building: แก้ชื่ออาคารและรายละเอียดให้ตรงกับสถานที่จริง
- หน้า Department: แทนหมวดตัวอย่างด้วยรายชื่อแผนกวิชาปัจจุบัน
- หน้า Facilities และ Service/Detail: ตรวจสอบว่ามีสถานที่ดังกล่าวจริง
- หน้า Location: เปลี่ยน `campus-map.jpg` เป็นภาพผังภายในวิทยาลัย
- หน้า Contact: ตรวจสอบหมายเลขโทรศัพท์และข้อมูลติดต่อก่อนใช้งานจริง

## ข้อจำกัด
- ไม่มีฐานข้อมูลและไม่มีระบบผู้ดูแลเว็บไซต์
- แบบฟอร์ม Contact เป็นเพียงตัวอย่างตรวจสอบข้อมูล ไม่ได้ส่งข้อความ
- ภาพที่เลือกใน Gallery เป็นการ preview ในเบราว์เซอร์เท่านั้น ไม่ได้อัปโหลดหรือบันทึกถาวร
- Google Maps ต้องเชื่อมต่ออินเทอร์เน็ต
