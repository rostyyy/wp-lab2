// language.js
export function setupStoreLanguageSwitcher() {
    const langSwitcher = document.createElement('div');
    langSwitcher.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(20,20,20,0.9);
        padding: 10px;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        z-index: 1000;
        backdrop-filter: blur(10px);
    `;
    
    langSwitcher.innerHTML = `
        <div style="font-size: 0.9rem; margin-bottom: 5px;">🌐 Language:</div>
        <button id="langUA" style="background: none; border: 1px solid #4CAF50; color: #4CAF50; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin: 2px; font-size: 0.8rem;">UA</button>
        <button id="langEN" style="background: none; border: 1px solid var(--border-color); color: var(--accent); padding: 5px 10px; border-radius: 5px; cursor: pointer; margin: 2px; font-size: 0.8rem;">EN</button>
    `;
    
    document.body.appendChild(langSwitcher);
    document.getElementById('langUA')?.addEventListener('click', () => switchStoreLanguage('ua'));
    document.getElementById('langEN')?.addEventListener('click', () => switchStoreLanguage('en'));
}

export function switchStoreLanguage(lang) {
    const messages = {
        'ua': 'Ukrainian language selected',
        'en': 'English language selected',
    };
    
    const currentUrl = window.location.href;
    const pathName = window.location.pathname;
    const basePath = pathName.split('/').pop() || 'index.html';
    
    let targetFile;
    if (lang === 'ua') {
        targetFile = basePath.replace('_en', '');
    } else if (lang === 'en') {
        targetFile = basePath.includes('_en') ? basePath : basePath.replace('.html', '_en.html');
    }
    
    const newUrl = currentUrl.replace(basePath, targetFile);
    window.location.href = newUrl;
    alert(messages[lang] || 'Language changed');
}
