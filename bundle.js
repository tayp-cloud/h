// bundle.js - Basic JavaScript functionality for the personal page

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Welcome to taypme\'s page!');
        
        // Add smooth scrolling to all links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add interactive hover effects to list items
        const listItems = document.querySelectorAll('li');
        listItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });
        
        // Add a greeting based on time of day
        const header = document.querySelector('header h1');
        const hour = new Date().getHours();
        let greeting = 'Welcome to My Page';
        
        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning! Welcome to My Page';
        } else if (hour >= 12 && hour < 18) {
            greeting = 'Good Afternoon! Welcome to My Page';
        } else if (hour >= 18 && hour < 22) {
            greeting = 'Good Evening! Welcome to My Page';
        } else {
            greeting = 'Welcome to My Page';
        }
        
        if (header) {
            header.textContent = greeting;
        }
        
        // Add a simple visitor counter (using session storage)
        let visitCount = sessionStorage.getItem('visitCount') || 0;
        visitCount = parseInt(visitCount) + 1;
        sessionStorage.setItem('visitCount', visitCount);
        
        console.log(`You've visited this page ${visitCount} time(s) this session.`);
        
        // Add click tracking to external links
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        externalLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('External link clicked:', this.href);
            });
        });
        
        // Log page load time
        if (window.performance) {
            const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                           window.performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }
    });
    
    // Add a simple easter egg
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
        
        if (konamiCode.join('').includes(konamiSequence.join(''))) {
            document.body.style.transform = 'rotate(360deg)';
            document.body.style.transition = 'transform 2s ease';
            setTimeout(() => {
                document.body.style.transform = 'rotate(0deg)';
            }, 2000);
            console.log('🎉 Konami Code activated!');
        }
    });
})();
