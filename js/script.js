function loadSection(file) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error("Failed to fetch");
            return res.text();
        })
        .then(html => {
            const contentEl = document.getElementById('main-content');
            contentEl.innerHTML = html;

            // Buat container sementara untuk ambil <script>
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Eksekusi ulang semua <script>
            tempDiv.querySelectorAll("script").forEach(oldScript => {
                const newScript = document.createElement("script");

                if (oldScript.src) {
                    newScript.src = oldScript.src;

                    // Cek apakah ini script brickgame
                    newScript.onload = () => {
                        if (oldScript.src.includes("brickgame.js") && typeof initBrickGame === "function") {
                            initBrickGame();
                        }
                    };

                } else {
                    newScript.textContent = oldScript.textContent;
                }

                document.body.appendChild(newScript);
            });
        })
        .catch(() => {
            document.getElementById('main-content').innerHTML =
                "<p class='text-red-500'>Failed to load section.</p>";
        });
}

function getFileFromHash() {
    const hash = window.location.hash.substring(1);
    if (!hash) return 'home.html';
    return `${hash}.html`;
}

window.addEventListener('DOMContentLoaded', () => {
    if (!window.location.hash) window.location.hash = "home";
    loadSection(getFileFromHash());
});

window.addEventListener('hashchange', () => {
    loadSection(getFileFromHash());
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1);
        window.location.hash = target;

        // Hide mobile nav
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav && window.innerWidth < 768) {
            mobileNav.classList.add('hidden');
            mobileNav.classList.remove('flex');
        }
    });
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
        mobileNav.classList.add('flex');
    } else {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('flex');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        document.getElementById('mobile-nav').classList.add('hidden');
    }
});

function updatePageTitle() {
    const hash = window.location.hash.substring(1) || 'home';
    const titleMap = {
        home: "Home",
        projects: "Projects",
        contact: "Contact",
    };
    const section = titleMap[hash] || hash.charAt(0).toUpperCase() + hash.slice(1);
    document.title = `David Space | ${section}`;
}

window.addEventListener('DOMContentLoaded', updatePageTitle);
window.addEventListener('hashchange', updatePageTitle);