// quickSelector.js
export function setupQuickCategorySelector() {
    const selector = document.createElement('div');
    selector.style.cssText = `
        background: rgba(20,20,20,0.7);
        padding: 15px;
        margin: 20px 0;
        border-radius: 10px;
        border: 1px solid var(--border-color);
    `;
    
    selector.innerHTML = `
        <h3>🚀 Quick category jump</h3>
        <select id="quickCategory" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px;">
            <option value="">Select category...</option>
            <option value="apple.html">📱 Apple</option>
            <option value="samsung.html">📱 Samsung</option>
            <option value="xiaomi.html">📱 Xiaomi</option>
            <option value="accessories.html">🎧 Accessories</option>
            <option value="contacts.html">📞 Contacts</option>
        </select>
    `;
    
    const section = document.querySelector('section');
    if (section) {
        section.insertBefore(selector, section.firstChild);
        const sel = document.getElementById('quickCategory');
        if (sel) sel.addEventListener('change', (e) => quickNavigate(e.target.value));
    }
}

export function quickNavigate(url) {
    if (url) {
        window.location.href = url;
    }
}
