// comparator.js
export const productSpecs = {
    'iphone17': {
        name: 'iPhone 17',
        price: '44999 UAH',
        screen: '6.1" OLED',
        camera: '48MP + 12MP',
        processor: 'A19 Bionic',
        battery: '3200 mAh'
    },
    's25': {
        name: 'Samsung Galaxy S25',
        price: '47999 UAH',
        screen: '6.2" Dynamic AMOLED',
        camera: '50MP + 12MP + 12MP',
        processor: 'Snapdragon 8 Elite',
        battery: '4000 mAh'
    },
    'xiaomi15': {
        name: 'Xiaomi 15',
        price: '39999 UAH',
        screen: '6.36" AMOLED',
        camera: '50MP Leica',
        processor: 'Snapdragon 8 Elite',
        battery: '4500 mAh'
    },
    'watch': {
        name: 'Apple Watch Series 11',
        price: '23999 UAH',
        screen: '1.9" Retina',
        features: 'ECG, SpO2, GPS',
        battery: '18 hours',
        compatibility: 'iOS'
    },
    'buds': {
        name: 'Samsung Galaxy Buds3 Pro',
        price: '9599 UAH',
        battery: '8 hours',
        features: 'Noise cancellation',
        connectivity: 'Bluetooth 5.3',
        color: 'Black/White'
    }
};

export function setupProductComparator() {
    const comparator = document.createElement('div');
    comparator.className = 'product-card';
    comparator.innerHTML = `
        <h3>📊 Product comparator</h3>
        <p>Choose products to compare:</p>
        <div id="comparisonForm" style="margin: 15px 0;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                    <label>Product 1:</label>
                    <select id="product1" style="width: 100%; padding: 8px; border-radius: 5px;">
                        <option value="">-- Choose product --</option>
                        <option value="iphone17">iPhone 17</option>
                        <option value="s25">Samsung Galaxy S25</option>
                        <option value="xiaomi15">Xiaomi 15</option>
                        <option value="watch">Apple Watch</option>
                        <option value="buds">Samsung Buds</option>
                    </select>
                </div>
                <div>
                    <label>Product 2:</label>
                    <select id="product2" style="width: 100%; padding: 8px; border-radius: 5px;">
                        <option value="">-- Choose product --</option>
                        <option value="iphone17">iPhone 17</option>
                        <option value="s25">Samsung Galaxy S25</option>
                        <option value="xiaomi15">Xiaomi 15</option>
                        <option value="watch">Apple Watch</option>
                        <option value="buds">Samsung Buds</option>
                    </select>
                </div>
            </div>
            <button id="compareBtn" style="background: linear-gradient(45deg, #3366cc, #2288ff); color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 15px 0; width: 100%;">Compare</button>
        </div>
        <div id="comparisonResult"></div>
    `;
    
    const section = document.querySelector('section');
    if (section) {
        section.appendChild(comparator);
        const btn = document.getElementById('compareBtn');
        if (btn) btn.addEventListener('click', compareProducts);
    }
}

export function compareProducts() {
    const product1 = document.getElementById('product1')?.value;
    const product2 = document.getElementById('product2')?.value;
    const result = document.getElementById('comparisonResult');
    
    if (!result) return;
    if (!product1 || !product2) {
        result.innerHTML = '<p style="color: #ff4444;">Please select both products to compare</p>';
        return;
    }
    if (product1 === product2) {
        result.innerHTML = '<p style="color: #ff4444;">Choose different products to compare</p>';
        return;
    }
    
    const spec1 = productSpecs[product1];
    const spec2 = productSpecs[product2];
    if (!spec1 || !spec2) {
        result.innerHTML = '<p style="color: #ff4444;">Product specs not found</p>';
        return;
    }
    
    let comparisonHTML = `
        <div style="margin-top: 20px; background: rgba(20,20,20,0.8); padding: 15px; border-radius: 10px;">
            <h4>Comparison result:</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr style="background: rgba(0,0,0,0.6);">
                    <th style="padding: 10px; text-align: left; width: 20%;">Spec</th>
                    <th style="padding: 10px; text-align: center; width: 40%;">${spec1.name}</th>
                    <th style="padding: 10px; text-align: center; width: 40%;">${spec2.name}</th>
                </tr>
    `;
    
    const allSpecs = new Set([...Object.keys(spec1), ...Object.keys(spec2)]);
    allSpecs.forEach(spec => {
        if (spec !== 'name') {
            const value1 = spec1[spec] || '-';
            const value2 = spec2[spec] || '-';
            comparisonHTML += `
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 8px; font-weight: bold;">${spec}</td>
                    <td style="padding: 8px; text-align: center;">${value1}</td>
                    <td style="padding: 8px; text-align: center;">${value2}</td>
                </tr>
            `;
        }
    });
    
    comparisonHTML += `</table></div>`;
    result.innerHTML = comparisonHTML;
}
