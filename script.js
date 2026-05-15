const songs = [
  {
    title: "รอดอกสันติสุขบาน",
    artist: "MT Flow Music",
    genre: "ลูกทุ่งอินดี้",
    releaseDate: "2026",
    cover: "image/cover.jpg",
    description: "เพลงลูกทุ่งอินดี้อบอุ่น ถ่ายทอดความคิดถึงของคนเฝ้ารอ และความหวังว่าสันติสุขจะผลิบาน",
    watchUrl: "https://youtu.be/JG4rxZim8sM?si=xwmFhJiWxNpi94u8",
    listenUrl: "https://open.spotify.com/artist/6JcuWZTuOO0fBNYAPj6J9q?si=OeD4dAECQ2ymZykGeUrYhg",
    lyricsUrl: "#",
    backupUrl: "https://youtube.com/playlist?list=PLJD7bzkhI_M2HjDax76qpnJCTLdh1TOFe&si=3VSgRku3wPgb_A_h",
  },
  {
    title: "ฮู้ว่าเจ้าเป็นไฟ",
    artist: "MT Flow Music",
    genre: "Isan Pop",
    releaseDate: "TBA",
    cover: "image/ฮู้ว่าเจ้าเป็นไฟ.jpg",
    description: "เพลงอีสานร่วมสมัยในโทนอารมณ์เข้ม พร้อมเมโลดี้ที่เล่าเรื่องรักแบบเจ็บลึก",
    watchUrl: "https://youtube.com/playlist?list=PLJD7bzkhI_M2HjDax76qpnJCTLdh1TOFe&si=3VSgRku3wPgb_A_h",
    listenUrl: "https://open.spotify.com/artist/6JcuWZTuOO0fBNYAPj6J9q?si=OeD4dAECQ2ymZykGeUrYhg",
    lyricsUrl: "#",
    backupUrl: "https://www.youtube.com/channel/UCk0w6eNupJINGWGdKvA3vAw",
  },
  {
    title: "รอข้ากลับมา (หลงกาลเวลา)",
    artist: "MT Flow Music",
    genre: "Cinematic Ballad",
    releaseDate: "TBA",
    cover: "image/รอข้ากลับมา.jpg",
    description: "เพลงเล่าเรื่องการรอคอยและความทรงจำที่เดินทางข้ามเวลาในบรรยากาศภาพยนตร์",
    watchUrl: "https://youtu.be/vujc2fhZpgk?si=h_BBQdWxmA7AqD4R",
    listenUrl: "https://open.spotify.com/artist/6JcuWZTuOO0fBNYAPj6J9q?si=OeD4dAECQ2ymZykGeUrYhg",
    lyricsUrl: "#",
    backupUrl: "https://www.youtube.com/channel/UCk0w6eNupJINGWGdKvA3vAw",
  },
  {
    title: "บัวโขง ณ เวียงอุบล",
    artist: "MT Flow Music",
    genre: "Cinematic Isan Folk",
    releaseDate: "TBA",
    cover: "image/บัวโขงณเวียงอุบล.jpg",
    description: "กลิ่นอายลุ่มน้ำโขงและเมืองอุบล ถ่ายทอดผ่านซาวด์อีสานที่อบอุ่นและสง่างาม",
    watchUrl: "https://youtu.be/__5yi3qU214?si=Z1Spo6-r6hEIzUY0",
    listenUrl: "https://open.spotify.com/artist/6JcuWZTuOO0fBNYAPj6J9q?si=OeD4dAECQ2ymZykGeUrYhg",
    lyricsUrl: "#",
    backupUrl: "https://www.youtube.com/channel/UCk0w6eNupJINGWGdKvA3vAw",
  },
  {
    title: "มนต์รักมอดินแดง",
    artist: "MT Flow Music",
    genre: "Campus Isan Pop",
    releaseDate: "TBA",
    cover: "image/มนต์รักมอดินแดง.jpg",
    description: "เพลงรักบรรยากาศวัยเรียนและความทรงจำในมอดินแดง พร้อมสีสันอบอุ่นแบบอีสานป๊อป",
    watchUrl: "https://youtu.be/rdbU6zLcRaw?si=IhGXsxmrMCIr8NIB",
    listenUrl: "https://open.spotify.com/artist/6JcuWZTuOO0fBNYAPj6J9q?si=OeD4dAECQ2ymZykGeUrYhg",
    lyricsUrl: "#",
    backupUrl: "https://www.youtube.com/channel/UCk0w6eNupJINGWGdKvA3vAw",
  },
  {
    title: "นางฟ้าท้ายกระบะ",
    artist: "MT Flow Music",
    genre: "Isan Pop / Luk Thung",
    releaseDate: "TBA",
    cover: "image/นางฟ้าท้ายกระบะ.jpg",
    description: "เพลงจังหวะมีเสน่ห์ เล่าเสน่ห์ความรักริมทางและภาพจำแบบบ้าน ๆ ที่มีชีวิตชีวา",
    watchUrl: "https://youtu.be/qn2QlRZh2_c?si=KxpD1FQdTZ5K3scX",
    listenUrl: "https://open.spotify.com/artist/6JcuWZTuOO0fBNYAPj6J9q?si=OeD4dAECQ2ymZykGeUrYhg",
    lyricsUrl: "#",
    backupUrl: "https://www.youtube.com/channel/UCk0w6eNupJINGWGdKvA3vAw",
  },
  // เพิ่มเพลงใหม่ได้โดย copy object ด้านบน แล้วแก้ title, artist, genre, releaseDate, cover และลิงก์ต่าง ๆ
];

const archiveGrid = document.getElementById("archiveGrid");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

function createCover(song) {
  if (song.cover) {
    return `<img class="song-card__cover" src="${song.cover}" alt="ปกเพลง ${song.title}" loading="lazy" />`;
  }

  return `
    <div class="song-card__cover song-card__placeholder" aria-label="ยังไม่มีรูปปกเพลง ${song.title}">
      <span>${song.title}</span>
    </div>
  `;
}

function createSongCard(song) {
  const card = document.createElement("article");
  card.className = "song-card";

  card.innerHTML = `
    ${createCover(song)}
    <div class="song-card__body">
      <p class="song-card__meta">${song.genre} · ${song.releaseDate}</p>
      <h3>${song.title}</h3>
      <p class="song-card__artist">${song.artist}</p>
      <p class="song-card__description">${song.description}</p>
      <div class="song-card__actions">
        <a href="${song.watchUrl}" target="_blank" rel="noopener noreferrer">Watch MV</a>
        <a href="${song.listenUrl}" target="_blank" rel="noopener noreferrer">Listen</a>
        <a href="${song.lyricsUrl}" target="_blank" rel="noopener noreferrer">Lyrics</a>
        <a href="${song.backupUrl}" target="_blank" rel="noopener noreferrer">Backup Link</a>
      </div>
    </div>
  `;

  return card;
}

if (archiveGrid) {
  songs.forEach((song) => {
    archiveGrid.appendChild(createSongCard(song));
  });
}
