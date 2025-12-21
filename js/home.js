let isEnglish = true;

function toggleLanguage() {
  const text = document.getElementById("welcome-text");

  const englishText = `
    I'm <strong>Ananda David Saputra</strong>, an Informatics Engineering student with a strong focus on
    <strong>Android and Web development</strong>.<br><br>

    I build practical digital products - from responsive websites to mobile applications -
    with an emphasis on clean logic, usability, and modern interfaces.<br><br>

    Currently, I am sharpening my skills in full-stack development while exploring better ways
    to turn ideas into efficient, real-world solutions.
  `;

  const indoText = `
    Saya <strong>Ananda David Saputra</strong>, mahasiswa Teknik Informatika dengan fokus kuat pada
    <strong>pengembangan Android dan Web</strong>.<br><br>

    Saya membangun produk digital yang praktis - mulai dari website responsif hingga aplikasi mobile -
    dengan penekanan pada logika yang rapi, kemudahan penggunaan, dan antarmuka modern.<br><br>

    Saat ini, saya sedang mengasah kemampuan full-stack sambil mengeksplorasi cara yang lebih baik
    untuk mengubah ide menjadi solusi nyata.
  `;

  text.innerHTML = isEnglish ? indoText : englishText;
  isEnglish = !isEnglish;
}

function openGameModal() {
  document.getElementById("game-modal").style.display = "flex";
  if (typeof initBrickGame === "function") initBrickGame();
}

function closeGameModal() {
  document.getElementById("game-modal").style.display = "none";
}

function closeWinAlert() {
  document.getElementById("win-alert").style.display = "none";
}

function openDevWin() {
  openGameModal();
  setTimeout(() => {
    if (typeof devAutoDestroy === "function") {
      devAutoDestroy();
    }
  }, 300);
}

function openCvModal() {
  document.getElementById("cv-modal").classList.add("flex");
  document.getElementById("cv-modal").classList.remove("hidden");
}

function closeCvModal() {
  document.getElementById("cv-modal").classList.add("hidden");
  document.getElementById("cv-modal").classList.remove("flex");
}
