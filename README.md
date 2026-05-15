# MT Flow Music Static Link Website

เว็บรวมลิงก์ศิลปินสำหรับ MT Flow Music ทำด้วย HTML, CSS และ JavaScript แบบ static ใช้กับ GitHub Pages ได้ฟรี

## ไฟล์ในโปรเจกต์

- `index.html` หน้าเว็บหลัก
- `style.css` ไฟล์ตกแต่งหน้าตาเว็บ
- `README.md` คู่มือใช้งานและเผยแพร่เว็บ

## วิธีแก้ลิงก์

เปิดไฟล์ `index.html` แล้วค้นหาคอมเมนต์ภาษาไทย เช่น

```html
<!-- แก้ลิงก์ YouTube ตรง href ด้านบนให้เป็นช่องจริงของ MT Flow Music -->
```

จากนั้นเปลี่ยนค่า `href="..."` ของปุ่มนั้นให้เป็นลิงก์จริง เช่น YouTube, Spotify, Facebook, TikTok, Presave, Full MV Playlist และลิงก์เพลงล่าสุด

## วิธีเปิดดูบนเครื่อง

ดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดใน browser ได้ทันที

## วิธีลง GitHub Pages

1. สร้าง repository ใหม่บน GitHub
2. อัปโหลดไฟล์ `index.html`, `style.css` และ `README.md`
3. ไปที่ `Settings` > `Pages`
4. ในหัวข้อ `Build and deployment` เลือก `Deploy from a branch`
5. เลือก branch `main` และ folder `/root`
6. กด `Save`

หลังจากนั้น GitHub จะสร้าง URL ให้ใช้งานฟรีภายในไม่กี่นาที

## ปรับแต่งเพิ่มเติม

- เปลี่ยนชื่อศิลปินหรือคำโปรยได้ใน `index.html`
- เปลี่ยนสีหลักได้ใน `style.css` ที่ส่วน `:root`
- เปลี่ยนชื่อเพลงล่าสุดจาก `ฮู้ว่าเจ้าเป็นไฟ` ได้ใน `index.html`
