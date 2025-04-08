import { initTabs } from './tabs.js';
import { initAbout } from './about.js';
import { initSettings } from './settings.js';

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initAbout();
    initSettings();
});