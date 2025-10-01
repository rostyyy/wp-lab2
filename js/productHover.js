// productHover.js
export function setupProductImageHover() {
    const productImages = document.querySelectorAll('table img, .product-card img');
    
    productImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.style.transition = 'all 0.3s ease';
        
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 8px 25px rgba(255,255,255,0.2)';
            this.style.zIndex = '1000';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.zIndex = '1';
        });
        
        img.addEventListener('click', function() {
            showFullSizeImage(this.src, this.alt);
        });
    });
}

export function showFullSizeImage(src, alt) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 0 50px rgba(255,255,255,0.3);
    `;
    
    overlay.appendChild(img);
    overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    document.body.appendChild(overlay);
}
