/**
 * =========================================================================
 * PRASOBH KUMAR - CORE JAVASCRIPT & DOM CONTROLLER
 * =========================================================================
 * 
 * Features:
 * - Dynamic data population from js/data.js (Education, Skills, Projects, Ideas)
 * - Apple-Style Monochrome Theme Switcher (Dark / Light) with persistence
 * - Hero Dynamic Typewriter Effect
 * - Interactive 3D Mouse Tilt & Scroll-Linked Parallax for Portrait Photos
 * - Scroll Progress & Back-to-Top
 * - Project Filter & Deep-Dive Modal
 * - Interactive Contact Form & Toast Notification System
 * - 1-Click Copy to Clipboard for Contact info
 * - Intersection Observer for smooth scroll reveals
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const data = window.portfolioData || {};

  // -----------------------------------------------------------------------
  // 1. THEME SWITCHER (Dark & Light Mode)
  // -----------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('prasobh_theme') || 'dark';
  if (savedTheme === 'light') {
    htmlRoot.classList.add('light-theme');
    updateThemeIcon(true);
  } else {
    htmlRoot.classList.remove('light-theme');
    updateThemeIcon(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = htmlRoot.classList.toggle('light-theme');
      localStorage.setItem('prasobh_theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight);
      showToast(isLight ? 'Switched to Light Theme' : 'Switched to Dark Theme', 'ri-sun-line');
    });
  }

  function updateThemeIcon(isLight) {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (icon) {
      icon.className = isLight ? 'ri-moon-line' : 'ri-sun-line';
    }
  }

  // -----------------------------------------------------------------------
  // 2. MOBILE NAVIGATION MENU
  // -----------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('mobile-active');
      const icon = mobileToggleBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'ri-close-line' : 'ri-menu-4-line';
      }
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
        const icon = mobileToggleBtn.querySelector('i');
        if (icon) icon.className = 'ri-menu-4-line';
      });
    });
  }

  // -----------------------------------------------------------------------
  // 3. SCROLL PROGRESS, NAVBAR & SCROLL PARALLAX
  // -----------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');
  const heroPortraitShowcase = document.getElementById('hero-portrait-showcase');
  const aboutPortraitFrame = document.getElementById('about-portrait-frame');
  const portraitBadgeTop = document.querySelector('.portrait-badge-top');
  const portraitBadgeBottom = document.querySelector('.portrait-badge-bottom');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    if (navbar) {
      if (scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (scrollY > 400) backToTopBtn.classList.add('visible');
      else backToTopBtn.classList.remove('visible');
    }

    // Scroll-Linked Parallax on Hero Portrait
    if (heroPortraitShowcase && scrollY < 800) {
      const scrollRatio = scrollY / 800;
      const translateY = -scrollY * 0.14;
      const rotateX = scrollRatio * 8; // subtle tilt on scroll
      heroPortraitShowcase.style.transform = `perspective(1000px) translateY(${translateY}px) rotateX(${rotateX}deg)`;

      if (portraitBadgeTop) {
        portraitBadgeTop.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
      if (portraitBadgeBottom) {
        portraitBadgeBottom.style.transform = `translateY(${-scrollY * 0.06}px)`;
      }
    }

    // Scroll parallax on About section portrait
    if (aboutPortraitFrame) {
      const rect = aboutPortraitFrame.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const offset = (rect.top - windowH / 2) * 0.05;
        aboutPortraitFrame.style.transform = `translateY(${offset}px)`;
      }
    }

    updateScrollSpy();
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -----------------------------------------------------------------------
  // 4. 3D MOUSE TILT ON HERO PORTRAIT
  // -----------------------------------------------------------------------
  if (heroPortraitShowcase) {
    const stage = document.querySelector('.hero-portrait-stage');
    if (stage) {
      stage.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 992) return;
        const rect = heroPortraitShowcase.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (-y / (rect.height / 2)) * 9;
        const rotateY = (x / (rect.width / 2)) * 9;

        heroPortraitShowcase.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      stage.addEventListener('mouseleave', () => {
        heroPortraitShowcase.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      });
    }
  }

  // -----------------------------------------------------------------------
  // 5. SCROLL SPY (Active Nav Link)
  // -----------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateScrollSpy() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // -----------------------------------------------------------------------
  // 6. HERO TYPEWRITER ANIMATION
  // -----------------------------------------------------------------------
  const typingElement = document.getElementById('hero-typing-target');
  const roles = data.personalInfo?.rolesToType || [
    'Mechanical Engineering',
    'Automobile Engineering',
    'Aerospace Propulsion',
    'Aeronautical Design & UAVs'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1900;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 450;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typingElement) {
    typeEffect();
  }

  // -----------------------------------------------------------------------
  // 7. DYNAMIC RENDER: HERO STATS
  // -----------------------------------------------------------------------
  const statsContainer = document.getElementById('hero-stats-row');
  if (statsContainer && data.personalInfo?.stats) {
    statsContainer.innerHTML = data.personalInfo.stats.map(s => `
      <div class="stat-item">
        <div class="stat-icon-wrap">
          <i class="${s.icon || 'ri-tools-line'}"></i>
        </div>
        <div class="stat-info">
          <div class="stat-val">${s.value}</div>
          <div class="stat-lbl">${s.label}</div>
        </div>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------------------
  // 8. DYNAMIC RENDER: EDUCATION TIMELINE
  // -----------------------------------------------------------------------
  const educationContainer = document.getElementById('education-timeline-list');
  if (educationContainer && data.education) {
    educationContainer.innerHTML = data.education.map((edu, idx) => `
      <div class="timeline-item reveal-on-scroll delay-${(idx % 3) + 1}">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-degree">${edu.degree}</h3>
            <span class="timeline-badge">${edu.badge}</span>
          </div>
          <div class="timeline-institution">
            <i class="ri-government-line"></i> ${edu.institution}
          </div>
          <div class="timeline-meta">
            <span><i class="ri-calendar-line"></i> ${edu.period}</span>
            <span><i class="ri-map-pin-line"></i> ${edu.location}</span>
            <span><i class="ri-checkbox-circle-line"></i> ${edu.status}</span>
          </div>
          <p class="timeline-desc">${edu.description}</p>
          ${edu.highlights ? `
            <ul class="timeline-highlights">
              ${edu.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------------------
  // 9. DYNAMIC RENDER: SKILLS SECTION
  // -----------------------------------------------------------------------
  const skillsContainer = document.getElementById('skills-category-container');
  const skillsTabNav = document.getElementById('skills-nav-tabs');

  if (skillsContainer && data.skills?.categories) {
    if (skillsTabNav) {
      skillsTabNav.innerHTML = `
        <button class="skill-tab-btn active" data-skill-category="all">
          <i class="ri-apps-2-line"></i> All Disciplines
        </button>
        ${data.skills.categories.map(cat => `
          <button class="skill-tab-btn" data-skill-category="${cat.id}">
            <i class="${cat.icon}"></i> ${cat.name}
          </button>
        `).join('')}
      `;

      skillsTabNav.querySelectorAll('.skill-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          skillsTabNav.querySelectorAll('.skill-tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const catId = btn.getAttribute('data-skill-category');
          filterSkillCards(catId);
        });
      });
    }

    renderSkillCards(data.skills.categories);
  }

  function renderSkillCards(categories) {
    if (!skillsContainer) return;
    skillsContainer.innerHTML = categories.map((cat, idx) => `
      <div class="skill-group-card reveal-on-scroll delay-${(idx % 3) + 1}" data-skill-cat="${cat.id}">
        <div class="skill-group-header">
          <div class="skill-group-icon">
            <i class="${cat.icon}"></i>
          </div>
          <h3>${cat.name}</h3>
        </div>
        <div class="skills-items-list">
          ${cat.items.map(item => `
            <div class="skill-bar-item">
              <div class="skill-info">
                <div class="skill-title-wrap">
                  <span>${item.icon || '⚙️'}</span>
                  <span>${item.name}</span>
                </div>
                <span class="skill-percentage">${item.level}%</span>
              </div>
              <div class="skill-progress-track">
                <div class="skill-progress-fill" style="width: ${item.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function filterSkillCards(catId) {
    const cards = document.querySelectorAll('.skill-group-card');
    cards.forEach(card => {
      if (catId === 'all' || card.getAttribute('data-skill-cat') === catId) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // -----------------------------------------------------------------------
  // 10. DYNAMIC RENDER: PROJECTS & FILTER
  // -----------------------------------------------------------------------
  const projectsGrid = document.getElementById('projects-grid');
  const projectFilters = document.querySelectorAll('.project-filter-btn');

  if (projectsGrid && data.projects) {
    renderProjectCards(data.projects);

    projectFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        projectFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') {
          renderProjectCards(data.projects);
        } else {
          const filtered = data.projects.filter(p => p.category === filter);
          renderProjectCards(filtered);
        }
      });
    });
  }

  function renderProjectCards(projectsList) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = projectsList.map((p, idx) => `
      <div class="project-card reveal-on-scroll delay-${(idx % 3) + 1}">
        <div class="project-image-wrap">
          <img src="${p.image}" alt="${p.title}" class="project-thumb-img" loading="lazy">
          <span class="project-badge-pill">${p.badge}</span>
        </div>
        <div class="project-body">
          <div class="project-category-meta">${p.categoryLabel}</div>
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          <div class="project-tags-row">
            ${p.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
          </div>
          <div class="project-footer-actions">
            <button class="btn-project-view" onclick="window.openProjectModal('${p.id}')">
              <span>View Specifications</span>
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    observeScrollElements();
  }

  // -----------------------------------------------------------------------
  // 11. PROJECT DEEP-DIVE MODAL SYSTEM
  // -----------------------------------------------------------------------
  const modalBackdrop = document.getElementById('project-modal');
  const modalBodyContainer = document.getElementById('modal-dynamic-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  window.openProjectModal = function (projectId) {
    const project = data.projects?.find(p => p.id === projectId);
    if (!project || !modalBackdrop || !modalBodyContainer) return;

    modalBodyContainer.innerHTML = `
      <div class="modal-image-banner">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="modal-body">
        <div class="modal-header-meta">
          <span class="modal-badge">${project.categoryLabel}</span>
          <h2 class="modal-title">${project.title}</h2>
        </div>
        <p class="modal-desc-full">${project.description}</p>
        
        <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-primary);">
          <i class="ri-settings-5-line"></i> Key Mechanisms & Engineering Specifications
        </h4>
        <ul class="modal-features-list">
          ${project.keyFeatures.map(f => `
            <li>
              <i class="ri-checkbox-circle-line"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-primary);">
          <i class="ri-tools-line"></i> Engineering Software & Tools
        </h4>
        <div class="modal-tools-wrap">
          ${project.toolsUsed.map(t => `<span class="project-tag-pill" style="font-size: 0.85rem; padding: 4px 12px;">${t}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
          <a href="${data.contact?.whatsappLink}" target="_blank" class="btn-primary" style="padding: 0.7rem 1.4rem; font-size: 0.9rem;">
            <i class="ri-discuss-line"></i> Discuss This Project
          </a>
          <button class="btn-secondary" onclick="window.closeProjectModal()" style="padding: 0.7rem 1.4rem; font-size: 0.9rem;">
            Close
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function () {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) window.closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeProjectModal();
  });

  // -----------------------------------------------------------------------
  // 12. DYNAMIC RENDER: FUTURE IDEAS ROADMAP
  // -----------------------------------------------------------------------
  const futureIdeasContainer = document.getElementById('future-ideas-grid');
  if (futureIdeasContainer && data.futureIdeas) {
    futureIdeasContainer.innerHTML = data.futureIdeas.map((idea, idx) => `
      <div class="future-idea-card reveal-on-scroll delay-${(idx % 2) + 1}">
        <div class="idea-card-header">
          <div class="idea-icon-circle">
            <i class="${idea.icon}"></i>
          </div>
          <span class="idea-status-badge">${idea.status}</span>
        </div>
        <div class="idea-timeline-tag">${idea.category} • ${idea.timeline}</div>
        <h3>${idea.title}</h3>
        <p class="idea-overview">${idea.overview}</p>
        <div class="idea-impact-box">
          <p><strong>Impact:</strong> ${idea.impact}</p>
        </div>
        <ul class="idea-concepts-list">
          ${idea.keyConcepts.map(c => `<li>${c}</li>`).join('')}
        </ul>
        <a href="${data.contact?.whatsappLink}" target="_blank" class="btn-project-view" style="margin-top: 0.5rem; display: inline-flex;">
          <span>Collaborate on concept</span>
          <i class="ri-arrow-right-line"></i>
        </a>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------------------
  // 13. CONTACT FORM & INTERACTIVE ACTIONS
  // -----------------------------------------------------------------------
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const subject = document.getElementById('contact-subject')?.value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.', 'ri-error-warning-line');
        return;
      }

      const mailtoUrl = `mailto:prasobhapuz@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${subject} - ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      window.location.href = mailtoUrl;

      showToast('Opening your email client...', 'ri-mail-send-line');
      contactForm.reset();
    });
  }

  // -----------------------------------------------------------------------
  // 14. COPY TO CLIPBOARD HELPER
  // -----------------------------------------------------------------------
  window.copyToClipboard = function (text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} to clipboard!`, 'ri-clipboard-line');
    }).catch(() => {
      showToast(`Failed to copy: ${text}`, 'ri-error-warning-line');
    });
  };

  // -----------------------------------------------------------------------
  // 15. TOAST NOTIFICATION SYSTEM
  // -----------------------------------------------------------------------
  function showToast(message, iconClass = 'ri-information-line') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // -----------------------------------------------------------------------
  // 16. INTERSECTION OBSERVER FOR SCROLL REVEAL
  // -----------------------------------------------------------------------
  function observeScrollElements() {
    const reveals = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  observeScrollElements();
});
