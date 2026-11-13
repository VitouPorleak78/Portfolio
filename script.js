// 1. Set Current Year
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Tactical HUD Intro Sequence
const hudIntro = document.getElementById('hud-intro');
const hudTelemetry = document.getElementById('hud-telemetry');
const hudProgress = document.getElementById('hud-progress');
const enterBtn = document.getElementById('enter-portfolio-btn');
const replayHudBtn = document.getElementById('replay-hud-btn');
const hudClock = document.getElementById('hud-clock');

setInterval(() => {
    const now = new Date();
    hudClock.textContent = 'UTC ' + now.toISOString().substring(11, 19);
}, 1000);

const bootMessages = [
    '> INITIALIZING TACTICAL TELEMETRY HUD...',
    '> TARGET: VITOU PORLEAK // CADT_SE_Y3',
    '> MODULES LOADED: FULL-STACK, FLUTTER, AI/LLM, UNITY',
    '> SYSTEM READY.'
];

let bootTimer = null;

function runHudBoot() {
    hudIntro.style.display = 'flex';
    requestAnimationFrame(() => {
        hudIntro.classList.remove('opacity-0', 'pointer-events-none');
    });
    hudTelemetry.innerHTML = '';
    hudProgress.style.width = '0%';

    let step = 0;
    clearInterval(bootTimer);
    bootTimer = setInterval(() => {
        if (step < bootMessages.length) {
            const line = document.createElement('div');
            line.textContent = bootMessages[step];
            hudTelemetry.appendChild(line);
            step++;
            hudProgress.style.width = `${(step / bootMessages.length) * 100}%`;
        } else {
            clearInterval(bootTimer);
            setTimeout(dismissHud, 500);
        }
    }, 320);
}

function dismissHud() {
    clearInterval(bootTimer);
    hudIntro.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        hudIntro.style.display = 'none';
        startHeroTyping();
        triggerVisibleReveals();
    }, 650);
}

enterBtn.addEventListener('click', dismissHud);
replayHudBtn.addEventListener('click', runHudBoot);
runHudBoot();

// 3. Hero Typing Animation
const heroSubtitle = "Software Engineering Student @ CADT • Full-Stack Developer";
const heroTypedEl = document.getElementById('hero-typed');
let typedIdx = 0;
let typingStarted = false;

function startHeroTyping() {
    if (typingStarted) return;
    typingStarted = true;
    function typeChar() {
        if (typedIdx < heroSubtitle.length) {
            heroTypedEl.textContent += heroSubtitle.charAt(typedIdx);
            typedIdx++;
            setTimeout(typeChar, 32);
        }
    }
    typeChar();
}

// 4. Consistent Full-Width Rectangular Skill Cards (Graphic Always on Left)
const skillsData = [
    {
        name: 'React & Vite',
        domain: 'Frontend Engineering',
        desc: 'Architecting modular component trees, reactive state flows, and fast single-page web applications with modern bundling.',
        tags: ['React 18', 'Vite', 'Hooks & State', 'SPA'],
        gradient: 'from-sky-500/15 via-blue-500/10 to-indigo-500/15',
        visualSvg: `
            <svg class="w-20 h-20 text-sky-500" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="8" fill="currentColor"/>
                <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" stroke-width="2.5"/>
                <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" stroke-width="2.5" transform="rotate(60 50 50)"/>
                <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" stroke-width="2.5" transform="rotate(120 50 50)"/>
            </svg>`
    },
    {
        name: 'Tailwind CSS & UX/UI',
        domain: 'Design Systems',
        desc: 'Crafting responsive grid architectures, Apple-inspired glassmorphic surfaces, and accessible user interfaces.',
        tags: ['Tailwind CSS', 'Responsive Grids', 'Design Tokens', 'Prototyping'],
        gradient: 'from-teal-500/15 via-cyan-500/10 to-sky-500/15',
        visualSvg: `
            <svg class="w-20 h-20 text-teal-500" viewBox="0 0 100 100" fill="none">
                <rect x="16" y="22" width="68" height="56" rx="12" stroke="currentColor" stroke-width="2.5"/>
                <line x1="16" y1="38" x2="84" y2="38" stroke="currentColor" stroke-width="2"/>
                <rect x="26" y="48" width="22" height="20" rx="4" fill="currentColor" fill-opacity="0.25"/>
                <rect x="54" y="48" width="20" height="8" rx="3" fill="currentColor"/>
                <rect x="54" y="60" width="14" height="8" rx="3" fill="currentColor" fill-opacity="0.5"/>
            </svg>`
    },
    {
        name: 'Node.js & Express',
        domain: 'Backend Architecture',
        desc: 'Developing scalable RESTful APIs, authentication middleware, and structured server-side business logic.',
        tags: ['Node.js', 'Express.js', 'REST APIs', 'Middleware'],
        gradient: 'from-emerald-500/15 via-green-500/10 to-teal-500/15',
        visualSvg: `
            <svg class="w-20 h-20 text-emerald-500" viewBox="0 0 100 100" fill="none">
                <rect x="20" y="20" width="60" height="16" rx="5" stroke="currentColor" stroke-width="2.5"/>
                <rect x="20" y="42" width="60" height="16" rx="5" stroke="currentColor" stroke-width="2.5"/>
                <rect x="20" y="64" width="60" height="16" rx="5" stroke="currentColor" stroke-width="2.5"/>
                <circle cx="30" cy="28" r="2.5" fill="currentColor"/>
                <circle cx="30" cy="50" r="2.5" fill="currentColor"/>
                <circle cx="30" cy="72" r="2.5" fill="currentColor"/>
            </svg>`
    },
    {
        name: 'MySQL Databases',
        domain: 'Data Modeling',
        desc: 'Designing normalized relational schemas, indexing strategies, and high-integrity transactional queries.',
        tags: ['MySQL', 'Relational Schemas', 'Query Optimization', 'ERD'],
        gradient: 'from-amber-500/15 via-orange-500/10 to-yellow-500/15',
        visualSvg: `
            <svg class="w-20 h-20 text-amber-500" viewBox="0 0 100 100" fill="none">
                <ellipse cx="50" cy="26" rx="28" ry="10" stroke="currentColor" stroke-width="2.5"/>
                <path d="M22 26V50C22 55.5 34.5 60 50 60C65.5 60 78 55.5 78 50V26" stroke="currentColor" stroke-width="2.5"/>
                <path d="M22 50V74C22 79.5 34.5 84 50 84C65.5 84 78 79.5 78 74V50" stroke="currentColor" stroke-width="2.5"/>
            </svg>`
    },
    {
        name: 'Flutter & Dart',
        domain: 'Mobile Development',
        desc: 'Building smooth cross-platform mobile experiences with offline local persistence and custom dark/light themes.',
        tags: ['Flutter', 'Dart', 'iOS & Android', 'Offline Storage'],
        gradient: 'from-blue-500/15 via-indigo-500/10 to-sky-500/15',
        visualSvg: `
            <svg class="w-20 h-20 text-blue-500" viewBox="0 0 100 100" fill="none">
                <rect x="30" y="14" width="40" height="72" rx="9" stroke="currentColor" stroke-width="2.5"/>
                <line x1="44" y1="21" x2="56" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <rect x="37" y="30" width="26" height="22" rx="4" fill="currentColor" fill-opacity="0.2"/>
                <line x1="37" y1="60" x2="63" y2="60" stroke="currentColor" stroke-width="2"/>
                <line x1="37" y1="68" x2="53" y2="68" stroke="currentColor" stroke-width="2"/>
            </svg>`
    },
    {
        name: 'Python & AI / LLM',
        domain: 'Intelligence & Automation',
        desc: 'Engineering NLP/BERT classification pipelines, Generative LLM curriculum mapping tools, and standalone Windows executables.',
        tags: ['Python', 'LLM / BERT', 'NLP Pipelines', 'PyInstaller'],
        gradient: 'from-indigo-500/15 via-purple-500/10 to-blue-500/15',
        visualSvg: `
            <svg class="w-20 h-20 text-indigo-500" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="14" stroke="currentColor" stroke-width="2.5"/>
                <circle cx="24" cy="28" r="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
                <circle cx="76" cy="28" r="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
                <circle cx="24" cy="72" r="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
                <circle cx="76" cy="72" r="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
                <line x1="29" y1="32" x2="40" y2="41" stroke="currentColor" stroke-width="2"/>
                <line x1="71" y1="32" x2="60" y2="41" stroke="currentColor" stroke-width="2"/>
                <line x1="29" y1="68" x2="40" y2="59" stroke="currentColor" stroke-width="2"/>
                <line x1="71" y1="68" x2="60" y2="59" stroke="currentColor" stroke-width="2"/>
            </svg>`
    },
    {
        name: 'C# & Unity 3D',
        domain: 'Interactive 3D & Physics',
        desc: 'Scripting 3D player mechanics, collision triggers, particle simulations, and real-time game loops.',
        tags: ['C#', 'Unity 3D', 'Physics Engine', 'Game Lifecycle'],
        gradient: 'from-purple-500/15 via-pink-500/10 to-indigo-500/15',
        visualSvg: `
            <svg class="w-20 h-20 text-purple-500" viewBox="0 0 100 100" fill="none">
                <polygon points="50,16 82,34 82,68 50,86 18,68 18,34" stroke="currentColor" stroke-width="2.5" fill="currentColor" fill-opacity="0.08"/>
                <polyline points="18,34 50,52 82,34" stroke="currentColor" stroke-width="2.5"/>
                <line x1="50" y1="52" x2="50" y2="86" stroke="currentColor" stroke-width="2.5"/>
            </svg>`
    }
];

const skillsContainer = document.getElementById('skills-container');

skillsData.forEach((skill) => {
    const card = document.createElement('div');
    card.setAttribute('data-reveal', '');
    card.className = `slide-up w-full surface-card rounded-[2rem] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch group hover:scale-[1.005] transition-transform duration-500`;

    card.innerHTML = `
        <div class="md:col-span-4 bg-gradient-to-br ${skill.gradient} p-7 sm:p-9 flex flex-col items-center justify-center relative overflow-hidden">
            <div class="transform group-hover:scale-110 transition-transform duration-500">
                ${skill.visualSvg}
            </div>
            <span class="mt-3 font-mono text-[11px] uppercase tracking-widest opacity-75 font-semibold text-center">${skill.domain}</span>
        </div>
        <div class="md:col-span-8 p-7 sm:p-9 flex flex-col justify-center space-y-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-appleBlue">${skill.domain}</span>
            <h3 class="text-2xl font-bold tracking-tight">${skill.name}</h3>
            <p class="muted-text text-sm sm:text-base leading-relaxed">
                ${skill.desc}
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
                ${skill.tags.map(tag => `<span class="px-3 py-1 rounded-full surface-subtle text-xs font-medium">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    skillsContainer.appendChild(card);
});

// 5. Bidirectional Scroll Intersection Observer (Animates Down & Up)
function revealElement(el) {
    el.classList.add('in-view');
}

function hideElement(el) {
    el.classList.remove('in-view');
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            revealElement(entry.target);
        } else {
            hideElement(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
});

function triggerVisibleReveals() {
    document.querySelectorAll('[data-reveal]').forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 30 && rect.bottom > 30;
        if (isVisible) {
            revealElement(el);
        } else {
            hideElement(el);
        }
    });
}

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// 6. Smooth Scroll Morphing Liquid Glass Topbar & Scroll-Spy Pill
const dynamicNav = document.getElementById('dynamic-nav');
const scrollProgressBar = document.getElementById('scroll-progress-bar');
const navWrapper = document.getElementById('nav-links-wrapper');
const navPill = document.getElementById('nav-pill');
const navLinks = document.querySelectorAll('.nav-link');
const sections = ['about', 'skills', 'projects', 'education', 'contact'];
let activeSectionId = null;
let isHoveringNav = false;

function movePillTo(el) {
    if (!el || !navWrapper || !navPill) return;
    const wrapperRect = navWrapper.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();
    if (linkRect.width === 0) return;
    navPill.style.width = `${linkRect.width}px`;
    navPill.style.transform = `translateX(${linkRect.left - wrapperRect.left}px)`;
    navPill.style.opacity = '1';
}

function updateActiveNavOnScroll() {
    const scrollPosition = window.scrollY + 220;
    let currentSection = null;

    sections.forEach(id => {
        const sectionEl = document.getElementById(id);
        if (sectionEl) {
            const top = sectionEl.offsetTop;
            const height = sectionEl.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                currentSection = id;
            }
        }
    });

    activeSectionId = currentSection;

    if (!isHoveringNav) {
        if (activeSectionId) {
            const activeLink = document.querySelector(`.nav-link[data-section="${activeSectionId}"]`);
            movePillTo(activeLink);
        } else {
            navPill.style.opacity = '0';
        }
    }
}

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    scrollProgressBar.style.width = `${scrollPct}%`;

    if (scrollTop > 40) {
        dynamicNav.classList.add('nav-scrolled');
    } else {
        dynamicNav.classList.remove('nav-scrolled');
    }

    updateActiveNavOnScroll();
    triggerVisibleReveals();
}, { passive: true });

window.addEventListener('resize', updateActiveNavOnScroll);

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        isHoveringNav = true;
        movePillTo(link);
    });
});

if (navWrapper) {
    navWrapper.addEventListener('mouseleave', () => {
        isHoveringNav = false;
        if (activeSectionId) {
            const activeLink = document.querySelector(`.nav-link[data-section="${activeSectionId}"]`);
            movePillTo(activeLink);
        } else {
            navPill.style.opacity = '0';
        }
    });
}

// 7. Soft Theme Switcher (Default: Apple Studio Light Mode)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    const htmlEl = document.documentElement;
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        themeIcon.textContent = '🌙';
    } else {
        htmlEl.classList.add('dark');
        themeIcon.textContent = '☀️';
    }
});

// 8. Copy Email & Contact Form Handler
const toast = document.getElementById('toast');
function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 2600);
}

const copyEmailBtn = document.getElementById('copy-email-btn');
if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('vitouporleak78@gmail.com');
        showToast('✓ Copied vitouporleak78@gmail.com');
    });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('sender-name').value;
        const email = document.getElementById('sender-email').value;
        const scope = document.getElementById('inquiry-type').value;
        const msg = document.getElementById('sender-message').value;

        const subject = encodeURIComponent(`[Portfolio Inquiry] ${scope} — from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nScope: ${scope}\n\nMessage:\n${msg}`);
        window.location.href = `mailto:vitouporleak78@gmail.com?subject=${subject}&body=${body}`;
        showToast('✓ Opening mail client to send message...');
        contactForm.reset();
    });
}