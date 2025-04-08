document.addEventListener('DOMContentLoaded', async () => {
    // Инициализация вкладок
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            navButtons.forEach(b => b.classList.remove('active'));
            
            // Скрываем все вкладки
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Активируем выбранную
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Добавляем тестовые проекты
    const projectsGrid = document.querySelector('.projects-grid');
    const testProjects = [
        { 
            name: 'Мой первый проект', 
            lastModified: 'Сегодня', 
            engineVersion: '1.7.0',
            path: '/projects/first-project'
        },
        {
            name: 'RPG Демо',
            lastModified: '3 дня назад',
            engineVersion: '1.6.3',
            path: '/projects/rpg-demo'
        },
        {
            name: 'Аркада',
            lastModified: '1 неделю назад',
            engineVersion: '1.5.9',
            path: '/projects/arcade'
        }
    ];

    projectsGrid.innerHTML = testProjects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${project.name}</h3>
                <span class="project-version">v${project.engineVersion}</span>
            </div>
            <div class="project-details">
                <p class="project-modified">Последнее изменение: ${project.lastModified}</p>
                <p class="project-path">${project.path}</p>
            </div>
        </div>
    `).join('');

    // Добавляем тестовые версии движка
    const versionsList = document.querySelector('.versions-list');
    const testVersions = [
        {
            version: '1.7.0',
            type: 'Стабильная',
            releaseDate: '15 мая 2024',
            changes: ['Оптимизация рендеринга', 'Новая система частиц']
        },
        {
            version: '1.8.0-beta',
            type: 'Бета',
            releaseDate: 'В разработке',
            changes: ['Предпросмотр новой UI системы', 'Experimental Vulkan support']
        },
        {
            version: '1.6.5',
            type: 'Патч',
            releaseDate: '1 апреля 2024',
            changes: ['Исправление критических ошибок', 'Обновление документации']
        }
    ];

    versionsList.innerHTML = testVersions.map(version => `
        <div class="version-card ${version.type.toLowerCase()}">
            <div class="version-header">
                <h3 class="version-title">Flax Engine v${version.version}</h3>
                <span class="version-badge">${version.type}</span>
            </div>
            <div class="version-info">
                <p class="release-date">Дата выпуска: ${version.releaseDate}</p>
                <ul class="changes-list">
                    ${version.changes.map(change => `<li>${change}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Загрузка версии приложения
    try {
        const version = await window.electronAPI.getAppVersion();
        document.getElementById('app-version').textContent = version;
    } catch (error) {
        console.error('Ошибка загрузки версии:', error);
        document.getElementById('app-version').textContent = '1.0.0';
    }

    // Обработчик кнопки настроек
    document.querySelector('.settings-btn').addEventListener('click', () => {
        console.log('Открытие настроек...');
        alert("test");
    });
});