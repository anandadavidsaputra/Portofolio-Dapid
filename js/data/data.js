// Experiences
const experiences = [
  {
    title: "PT Artivisi Intermedia",
    desc: "Menyelesaikan magang 6 bulan dengan fokus pada pengembangan perangkat lunak dan kerja tim.",
    year: "2024 - 2025",
    tag: "#Pengalaman",
    tagColor: "#2c5d96",
    badge: "Magang",
    badgeGradient: "linear-gradient(to left, #3a6fab, #2c5d96)",
    img: "assets/Experiences/pkl.jpg",
    alt: "Magang di Artivisi",
  },
  {
    title: "LKS IT Software - Tingkat Provinsi",
    desc: "Membuat aplikasi desktop dan Android untuk lomba dalam batas waktu terbatas.",
    year: "2024",
    tag: "#Kompetisi",
    tagColor: "#0f9d58",
    badge: "Juara Harapan",
    badgeGradient: "linear-gradient(to left, #28b96f, #0f9d58)",
    img: "assets/Experiences/lks2024.jpg",
    alt: "Kompetisi LKS IT Software",
  },
  {
    title: "Art of the Year 2024",
    desc: "Meraih juara 1 lomba poster infografis di SMKN 10 Jakarta.",
    year: "2024",
    tag: "#Juara",
    tagColor: "#b38c5d",
    badge: "Juara 1",
    badgeGradient: "linear-gradient(to left, #c9a97d, #b38c5d)",
    img: "assets/Experiences/aot2024.jpg",
    alt: "Art of the Year 2024",
  },
  {
    title: "Art of the Year 2023",
    desc: "Meraih juara 2 lomba poster infografis di SMKN 10 Jakarta.",
    year: "2023",
    tag: "#RunnerUp",
    tagColor: "#007ea7",
    badge: "Juara 2",
    badgeGradient: "linear-gradient(to left, #00a9d9, #007ea7)",
    img: "assets/Experiences/aot2023.png",
    alt: "Art of the Year 2023",
  },
];

// Projects
const techProjects = [
  {
    title: "Sedu",
    desc: "Aplikasi Android sederhana untuk memudahkan pengguna melihat menu dan memesan kopi.",
    images: ["assets/Sedu/logo.png", "assets/Sedu/view.png"],
    tech: ["Android", "Java"],
    linkText: "Lihat Github",
    link: "https://github.com/AnandaDavidSaputra/Sedu",
  },
  {
    title: "PresenTen",
    desc: "Aplikasi mobile untuk mencatat presensi dengan lebih mudah dan meningkatkan akurasi harian.",
    images: ["assets/PresenTen/logo.png", "assets/PresenTen/view.png"],
    tech: ["Flutter", "PHP", "MySQL"],
    linkText: "Lihat Github",
    link: "https://github.com/AnandaDavidSaputra/PresenTen",
  },
  {
    title: "Sahabat Qur’an (Mobile)",
    desc: "Aplikasi mobile untuk membantu belajar Al-Qur’an dengan cara yang terstruktur dan menyenangkan.",
    images: [
      "assets/Sahabat Quran Mobile/logo.png",
      "assets/Sahabat Quran Mobile/view.png",
    ],
    tech: ["Flutter", "Canva"],
  },
  {
    title: "Sahabat Qur’an (Web)",
    desc: "Sistem web terpusat untuk mengelola kelas Al-Qur’an, peserta, materi, dan catatan akademik.",
    images: [
      "assets/Sahabat Quran Web/logo.png",
      "assets/Sahabat Quran Web/view.png",
    ],
    tech: ["Spring-Boot", "PostgreSQL", "Docker"],
  },
  {
    title: "ValutaGo",
    desc: "Aplikasi web sederhana untuk memudahkan pengguna mengecek kurs mata uang dan menghitung konversi dengan cepat.",
    images: [
      "assets/ValutaGo/logo.png", 
      "assets/ValutaGo/view.png"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    linkText: "Buka Aplikasi",
    link: "https://anandadavidsaputra.github.io/ValutaGo",
  },
];
const artProjects = [
  {
    title: "Tahun Baru Resolusi 2023",
    desc: "Poster edukasi buatan tangan tentang resolusi tahun baru dengan konsep DUIT (Doa, Usaha, Ikhtiar, Tawakal).",
    images: ["assets/Art/tahun-baru-resolusi-2023.jpg"],
    tech: ["Manual Drawing"],
  },
  {
    title: "Fakta Menarik Daun Pepaya",
    desc: `Infografis singkat tentang manfaat kesehatan dan potensi ekonomi daun pepaya.
          <br><span class="template-cta">Tertarik membuat versi sendiri? <a href="https://lynk.id/anandadavidsaputra/ekp333oeqn6m" target="_blank">Klik di sini</a>.</span>`,
    images: ["assets/Art/fakta-menarik-daun-pepaya.png"],
    tech: ["Canva", "AI-Assisted"],
  },
  {
    title: "Kreativitas Jurnalisme di Tengah Gelombang Transformasi",
    desc: `Poster naratif visual tentang jurnalisme beradaptasi dengan kreativitas, teknologi, dan audiens di era digital.
          <br><span class="template-cta">Tertarik membuat versi sendiri? <a href="https://lynk.id/anandadavidsaputra/y50ppp1ne84d" target="_blank">Klik di sini</a>.</span>`,
    images: [
      "assets/Art/kreativitas-jurnalisme-di-tengah-gelombang-transformasi.png",
    ],
    tech: ["Canva", "AI-Assisted"],
  },
  {
    title: "Jembatan Mimpi",
    desc: `Poster drama yang menggambarkan harapan dan mimpi sebagai jembatan menuju masa depan.
          <br><span class="template-cta">Tertarik membuat versi sendiri? <a href="https://lynk.id/anandadavidsaputra/qm6llg2kw824" target="_blank">Klik di sini</a>.</span>`,
    images: ["assets/Art/jembatan-mimpi.png"],
    tech: ["Canva"],
  },
  {
    title: "Logo Mochi Moo",
    desc: "Logo dessert mochi dengan gaya lucu dan kekinian, dibuat dalam proyek kewirausahaan kelompok.",
    images: ["assets/Art/mochi-moo.png"],
    tech: ["Canva", "AI-Assisted"],
  },
  {
    title: "Logo Dapoer Azizah",
    desc: "Logo hasil proyek kelas yang terpilih sebagai desain terbaik, menggambarkan nuansa hangat dan sederhana dari usaha kuliner rumahan.",
    images: ["assets/Art/dapoer-azizah.png"],
    tech: ["Canva", "AI-Assisted"],
  },
];

// certificates
const certificates = [
  {
    img: "assets/Certificates/sertifikat-seminar-unsada.jpg",
    title: "Industry-Ready Talents - Unsada",
    desc: `Sertifikat partisipasi diberikan kepada <strong>Ananda David Saputra</strong> dalam seminar "<strong>Building Industry-Ready Talents: Strategies & Career Opportunities</strong>" yang diselenggarakan di <strong>Universitas Darma Persada</strong>`,
    year: "2025",
    tag: "#SeminarKarir",
    tagColor: "#9097d6",
  },
  {
    img: "assets/Certificates/sertifikat-pkl.jpg",
    title: "Sertifikat Magang - Artivisi",
    desc: `Sertifikat magang diberikan kepada <strong>Ananda David Saputra</strong> atas kontribusinya dalam <strong>pengembangan perangkat lunak</strong> di <strong>PT Artivisi Intermedia</strong>`,
    year: "2024 - 2025",
    tag: "#Magang",
    tagColor: "#338c03",
  },
  {
    img: "assets/Certificates/sertifikat-infografis-uki.jpg",
    title: "Poster Infografis - UKI",
    desc: `Sertifikat partisipasi dalam <strong>kompetisi Poster Infografis</strong> pada Festival Jurnalistik 2024 oleh LPM GEMA, Fakultas Hukum, <strong>Universitas Kristen Indonesia</strong>.`,
    year: "2024",
    tag: "#Infografis",
    tagColor: "#011978",
  },
  {
    img: "assets/Certificates/sertifikat-seminar-uki.jpg",
    title: "Seminar RUU Penyiaran - UKI",
    desc: `Sertifikat partisipasi diberikan pada seminar bertema "<strong>RUU Penyiaran: Hambatan atau Solusi?</strong>" yang diselenggarakan oleh <strong>LPM GEMA FH UKI</strong>.`,
    year: "2024",
    tag: "#Seminar",
    tagColor: "#c48a02",
  },
  {
    img: "assets/Certificates/sertifikat-lks.jpg",
    title: "IT Software Solution - LKS",
    desc: `Sertifikat <strong>Juara Harapan 1</strong> dalam kategori IT Software Solution for Business pada Kompetisi LKS 2024 yang diadakan oleh Dinas Pendidikan Jakarta Timur II, mewakili <strong>SMKN 10 Jakarta</strong>.`,
    year: "2024",
    tag: "#KompetisiIT",
    tagColor: "#22b0f2",
  },
  {
    img: "assets/Certificates/sertifikat-pelatihan-kominfo.jpg",
    title: "Pelatihan Dasar Cyber Security - Kominfo",
    desc: `Sertifkat diberikan karena telah menyelesaikan <strong>pelatihan 12 jam</strong> tentang Dasar Keamanan Siber yang diselenggarakan oleh <strong>Puslitbang SDP3I</strong>.`,
    year: "2024",
    tag: "#KeamananSiber",
    tagColor: "#026ead",
  },
];
