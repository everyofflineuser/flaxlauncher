export function initSettings() {
    document.querySelector('.settings-btn').addEventListener('click', () => {
        window.electronAPI.openSettings(() => {
            // Логика открытия настроек
            console.log('Opening settings...');
        });
    });
}