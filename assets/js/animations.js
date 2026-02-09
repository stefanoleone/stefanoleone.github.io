/**
 * Animations & Interactions
 */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {

    // ========== Scroll Reveal Animation ==========
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
      const revealObserver = new IntersectionObserver(
        function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Optional: unobserve after reveal
              // revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      revealElements.forEach(function(element) {
        revealObserver.observe(element);
      });
    }

    // ========== Header Scroll Effect ==========
    const header = document.getElementById('header');
    let lastScroll = 0;

    if (header) {
      window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when scrolled down
        if (currentScroll > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
      });
    }

    // ========== Smooth Scroll for Anchor Links ==========
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
          e.preventDefault();
          return;
        }

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const headerHeight = header ? header.offsetHeight : 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without triggering scroll
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });

    // ========== Active Nav Link on Scroll ==========
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length > 0 && navLinks.length > 0) {
      window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 200; // offset for header

        sections.forEach(function(section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(function(link) {
          link.classList.remove('active');
          const href = link.getAttribute('href');

          if (href === '#' + current) {
            link.classList.add('active');
          }
        });
      });
    }

    // ========== Mobile Menu Toggle ==========
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navDesktop = document.querySelector('.nav-desktop');

    if (mobileMenuToggle && navDesktop) {
      mobileMenuToggle.addEventListener('click', function() {
        navDesktop.classList.toggle('mobile-active');

        // Change icon
        const svg = this.querySelector('svg');
        if (navDesktop.classList.contains('mobile-active')) {
          svg.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
        } else {
          svg.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      });

      // Close mobile menu when clicking on a nav link
      const mobileNavLinks = navDesktop.querySelectorAll('.nav-link');
      mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          navDesktop.classList.remove('mobile-active');
          const svg = mobileMenuToggle.querySelector('svg');
          svg.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        });
      });
    }

    // ========== Card Hover Effects Enhancement ==========
    const cards = document.querySelectorAll('.card, .service-card, .contact-card');

    cards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
      });
    });

    // ========== Parallax Effect on Hero ==========
    const hero = document.querySelector('.hero');

    if (hero) {
      window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (scrolled < window.innerHeight) {
          hero.style.transform = 'translateY(' + (scrolled * parallaxSpeed) + 'px)';
        }
      });
    }

    // ========== Performance: Debounce Scroll Events ==========
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = function() {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    // Apply debounce to scroll-heavy operations if needed
    // Example: window.addEventListener('scroll', debounce(heavyFunction, 100));

    // ========== Accessibility: Focus Trap for Mobile Menu ==========
    // Ensure keyboard navigation works well with mobile menu
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (navDesktop && navDesktop.classList.contains('mobile-active')) {
          navDesktop.classList.remove('mobile-active');
          if (mobileMenuToggle) {
            mobileMenuToggle.focus();
          }
        }
      }
    });

    // ========== Console Welcome Message ==========
    console.log(
      '%c👋 Welcome to Stefano Leone\'s Portfolio',
      'font-size: 16px; font-weight: bold; color: #0066FF;'
    );
    console.log(
      '%cInterested in the code? Check it out on GitHub!',
      'font-size: 12px; color: #6B7280;'
    );

  });

})();
