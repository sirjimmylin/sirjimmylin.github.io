window.addEventListener('scroll', () => {
    const containers = document.querySelectorAll('.scrolly-container');
    
    containers.forEach(container => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const containerHeight = rect.height;
        
        // scrollPercent is 0 at the top of the container, 1 at the bottom
        let scrollPercent = -rect.top / (containerHeight - windowHeight);
        scrollPercent = Math.max(0, Math.min(1, scrollPercent));
        
        const bg = container.querySelector('.scrolly-bg');
        const steps = container.querySelectorAll('.scrolly-step');
        
        if (steps.length >= 2) {
            const step1 = steps[0];
            const step2 = steps[1];
            
            // Step 1: 0% -> 0.4%
            if (scrollPercent < 0.2) {
                step1.style.opacity = scrollPercent / 0.2;
                step2.style.opacity = 0;
            } else if (scrollPercent < 0.4) {
                step1.style.opacity = 1 - (scrollPercent - 0.2) / 0.2;
                step2.style.opacity = 0;
            } 
            // Step 2: 0.4% -> 0.8%
            else if (scrollPercent < 0.6) {
                step1.style.opacity = 0;
                step2.style.opacity = (scrollPercent - 0.4) / 0.2;
            } else if (scrollPercent < 0.8) {
                step1.style.opacity = 0;
                step2.style.opacity = 1 - (scrollPercent - 0.6) / 0.2;
            } else {
                step1.style.opacity = 0;
                step2.style.opacity = 0;
            }
            
            // Background fade: 0.8% -> 1.0%
            if (scrollPercent > 0.8) {
                bg.style.opacity = 1 - (scrollPercent - 0.8) / 0.2;
            } else {
                bg.style.opacity = 1;
            }
        }
    });
});
