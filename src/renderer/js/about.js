export function initAbout() {
    window.electronAPI.getAppVersion().then(version => {
        document.getElementById('app-version').textContent = version;
    });

    const aboutContent = `
        <h1>Flax Engine Launcher</h1>
        <div class="project-card">
            <div class="about-content">
                <img src="public/images/logo.png" alt="Flax Logo" class="about-logo">
                <div class="about-info">
                    <p class="version">Версия: <span id="app-version">...</span></p>
                    <p>© 2024 Flax Engine. Все права защищены.</p>
                    <div class="links">
                        <a href="#" class="link">Документация</a>
                        <a href="#" class="link">Лицензия</a>
                        <a href="#" class="link">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('about').innerHTML = aboutContent;
}