let isEnglish = true;

function toggleLanguage() {
    const text = document.getElementById("welcome-text");
    if (isEnglish) {
        text.innerHTML = `Saya <strong>Ananda David Saputra</strong>, seseorang yang suka teknologi dan tertarik banget sama <strong>pengembangan aplikasi</strong> dan <strong>antarmuka modern</strong>.<br><br>
        Saya senang membangun hal-hal entah itu website responsif, aplikasi mobile, atau sekadar eksperimen desain baru.<br><br>
        Fokus utama saya ada di <strong>Android & Web</strong>, tapi saya juga suka eksplorasi ke <strong>desktop</strong> dan mencari cara lebih baik buat mewujudkan ide-ide.<br><br>
        Saya percaya pada <strong>kerja sama</strong>, <strong>belajar</strong> terus-menerus, dan <strong>mengubah</strong> ide mentah jadi produk nyata.`;
    } else {
        text.innerHTML = `I'm <strong>Ananda David Saputra</strong>, a tech enthusiast with a strong interest in <strong>app
          development</strong> and <strong>modern user interfaces</strong>.<br><br>
        I enjoy building things whether it's a responsive website, a mobile app, or just trying new design
        systems.<br><br>
        Most of my focus is on <strong>Android & Web</strong>, but I'm also open to <strong>desktop development</strong>
        and always exploring better ways to bring ideas to life.<br><br>
        I value <strong>collaboration</strong>, constant <strong>learning</strong>, and <strong>turning</strong> rough thoughts into polished, usable
        products.`;
    }
    isEnglish = !isEnglish;
}

function openGameModal() {
    document.getElementById('game-modal').style.display = 'flex';
    if (typeof initBrickGame === 'function') initBrickGame();
}

function closeGameModal() {
    document.getElementById('game-modal').style.display = 'none';
}

function closeWinAlert() {
    document.getElementById("win-alert").style.display = "none";
}

function openDevWin() {
    openGameModal();
    setTimeout(() => {
        if (typeof devAutoDestroy === 'function') {
            devAutoDestroy();
        }
    }, 300);
}

function openCvModal() {
    document.getElementById('cv-modal').classList.add('flex');
    document.getElementById('cv-modal').classList.remove('hidden');
  }

  function closeCvModal() {
    document.getElementById('cv-modal').classList.add('hidden');
    document.getElementById('cv-modal').classList.remove('flex');
  }