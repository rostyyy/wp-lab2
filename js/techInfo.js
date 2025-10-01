// techInfo.js
export function addTechInfoBlock(browserInfo) {
    const techInfo = document.createElement('div');
    techInfo.className = 'product-card';
    techInfo.style.marginTop = '20px';
    techInfo.innerHTML = `
        <h3>🛠 Site technologies</h3>
        <p>Running on: <strong>${browserInfo.name} ${browserInfo.version}</strong></p>
        <p>JavaScript enabled: <strong style="color: #4CAF50;">✓ Active</strong></p>
        <p>Modern features supported: <strong style="color: #4CAF50;">✓ Available</strong></p>
    `;
    
    document.querySelector('section')?.appendChild(techInfo);
}
