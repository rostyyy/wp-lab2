// offers.js
const dailyOffers = [
    "🔥 Hot deal! iPhone 17 with 15% off today only!",
    "🎧 Buy Samsung Buds3 Pro and get a free case!",
    "📱 Trade-In: trade your old phone and get a discount!",
    "⚡ Free fast delivery across Kyiv for orders over 10,000 UAH!",
    "🎁 Free screen protector with any purchase today!",
    "💳 0% installment on all Apple products!",
    "📅 Xiaomi 15 with extended 24-month warranty!"
];

export function showDailyOffer() {
    const randomOffer = dailyOffers[Math.floor(Math.random() * dailyOffers.length)];
    
    const offerBanner = document.createElement('div');
    offerBanner.style.cssText = `
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        color: white;
        padding: 15px;
        margin: 20px 0;
        border-radius: 10px;
        text-align: center;
        font-weight: bold;
        border-left: 5px solid #ffd700;
        animation: pulse 2s infinite;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    offerBanner.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
            <span>🎯</span>
            <span>${randomOffer}</span>
            <span>🎯</span>
        </div>
        <button id="closeOffer" style="background: rgba(255,255,255,0.2); border: 1px solid white; color: white; padding: 5px 15px; border-radius: 15px; cursor: pointer; margin-top: 10px; font-size: 0.8rem;">Close</button>
    `;
    
    const section = document.querySelector('section');
    if (section) {
        section.insertBefore(offerBanner, section.firstChild);
        document.getElementById('closeOffer')?.addEventListener('click', () => offerBanner.remove());
    }
}
