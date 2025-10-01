// navigation.js
export function setupEnhancedNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const navLinks = nav.querySelectorAll('a');
    
    navLinks.forEach(link => {
        link.style.transition = 'all 0.3s ease';
        
        link.addEventListener('mouseover', function() {
            this.style.color = '#4CAF50';
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.transform = '';
        });
    });
}
