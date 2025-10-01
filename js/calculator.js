// calculator.js
export function setupPriceCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'product-card';
    calculator.innerHTML = `
        <h3>🔄 Price Calculator</h3>
        <div style="display: grid; gap: 10px; margin: 15px 0;">
            <label>Product price (UAH):</label>
            <input type="number" id="productPrice" value="10000" style="padding: 8px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.6); color: var(--white); border-radius: 5px;">
            
            <label>Quantity:</label>
            <input type="number" id="productQuantity" value="1" min="1" style="padding: 8px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.6); color: var(--white); border-radius: 5px;">
            
            <label>Discount (%):</label>
            <input type="number" id="productDiscount" value="10" min="0" max="100" style="padding: 8px; border: 1px solid var(--border-color); background: rgba(0,0,0,0.6); color: var(--white); border-radius: 5px;">
            
            <button id="calcBtn" style="background: linear-gradient(45deg, #333, #555); color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; margin: 10px 0;">Calculate</button>
        </div>
        <div id="calculationResult" style="margin-top: 15px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 5px;"></div>
    `;
    
    const section = document.querySelector('section');
    if (section) {
        section.appendChild(calculator);
        const btn = document.getElementById('calcBtn');
        if (btn) btn.addEventListener('click', calculateTotal);
    }
}

export function calculateTotal() {
    const price = parseFloat(document.getElementById('productPrice')?.value) || 0;
    const quantity = parseInt(document.getElementById('productQuantity')?.value) || 1;
    const discount = parseFloat(document.getElementById('productDiscount')?.value) || 0;
    
    const totalWithoutDiscount = price * quantity;
    const discountAmount = totalWithoutDiscount * (discount / 100);
    const totalWithDiscount = totalWithoutDiscount - discountAmount;
    
    const result = document.getElementById('calculationResult');
    if (result) {
        result.innerHTML = `
            <strong>Calculation result:</strong><br>
            Subtotal: <b>${totalWithoutDiscount.toFixed(2)} UAH</b><br>
            Discount: <b style="color: #4CAF50;">-${discountAmount.toFixed(2)} UAH</b><br>
            <strong>Total: ${totalWithDiscount.toFixed(2)} UAH</strong>
        `;
    }
}
