/* Portfolio — interactions */

/* =========================================================
   i18n — English default, Portuguese (pt-BR) toggle
   ========================================================= */
const i18n = {
  en: {
    'meta.title': "Pedro Delgado Henriques — Software Engineer",
    'meta.description': "Software Engineer with 5+ years — Game Dev C++, .NET, Full Stack Web. Londrina/PR.",

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Stack',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.downloadCv': 'Download CV',

    'hero.status': 'AVAILABLE FOR PROPOSALS AND PROJECTS',
    'hero.years': '5+ years',
    'hero.desc': `Software Engineer with over 5 years of experience in software development. Background spans full-stack
        development with strong focus on web and e-commerce, game development, and programming instruction.
        Currently pursuing a postgraduate degree in <span class="accent">.NET Systems Architecture</span> at FIAP + Alura.`,
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.stat.years': 'YEARS OF EXP.',
    'hero.stat.companies': 'COMPANIES',
    'hero.stat.projects': 'LIVE PROJECTS',
    'hero.stat.english': 'ADVANCED ENGLISH',

    'about.eyebrow': 'About',
    'about.title': 'Generalist by <em>training</em>, specialist by <em>obsession</em>.',
    'about.p1': `I'm a <strong>Software Engineer</strong> with a bachelor's from UniSenaiPR. I started on the web —
          PHP, Magento, real e-commerce with real traffic — and gradually moved to
          heavier stacks. Today my daily work is <span class="h">pure C++</span> on a
          proprietary engine, modeling slot-machine math.`,
    'about.p2': `In parallel, I'm taking a <strong>postgrad in .NET Architecture at FIAP</strong>,
          where I built a 5-microservice system with RabbitMQ, Redis, Docker and Kubernetes.
          I've also taught <strong>Python</strong> to beginner classes — learning how to explain code
          changed how I write it.`,
    'about.p3': `I enjoy problems that mix <strong>performance</strong>, <strong>math</strong> and <strong>product</strong>.
          Advanced English, self-taught profile, comfortable both in the terminal and in a planning meeting.`,
    'about.fact.today.label': 'Today',
    'about.fact.today.val': 'Game Dev <span class="pop">C++</span>',
    'about.fact.studying.label': 'Studying',
    'about.fact.studying.val': '<span class="pop">.NET</span> Architecture',
    'about.fact.studying.sub': 'FIAP Pós-Tech + Alura',
    'about.fact.bg.label': 'Background',
    'about.fact.bg.val': 'Full-Stack <span class="pop">Web</span>',
    'about.fact.bg.sub': 'PHP · Magento · React · 3 years',
    'about.fact.lang.label': 'Languages',
    'about.fact.lang.val': 'PT-BR · <span class="pop">EN</span>',
    'about.fact.lang.sub': 'Native Portuguese · B2 English',

    'exp.eyebrow': 'Career',
    'exp.title': 'From online stores to <em>slot engines</em>.',
    'exp.firepot.date': 'Dec/2024 — now',
    'exp.firepot.role': 'C++ Game Developer — Mid-Level',
    'exp.firepot.b1': 'Slot machine development in <strong>pure C++</strong> on a proprietary engine with 2D assets',
    'exp.firepot.b2': 'Implementation of bonus rounds, free spins and cascading reels integrated with existing systems',
    'exp.firepot.b3': 'Refactoring of critical modules: symbol rendering, RNG and animation system',
    'exp.firepot.b4': 'Mathematical modeling of volatility and RTP tuning — from high to low variance',
    'exp.firepot.b5': 'Full Game Design Documents (mechanics, paytable, flow, bonus rules)',
    'exp.firepot.b6': 'Migration of legacy games between engine versions while keeping production stability',
    'exp.ensina.date': 'Jun/2024 — Dec/2024',
    'exp.ensina.role': 'Programming Teacher — Python',
    'exp.ensina.b1': 'Python classes for beginners — programming logic, data structures and best practices',
    'exp.ensina.b2': 'Course materials, practical exercises and individual follow-up with each student',
    'exp.ensina.tag1': 'Teaching',
    'exp.ensina.tag2': 'Mentorship',
    'exp.bis.date': 'Oct/2021 — May/2024',
    'exp.bis.role': 'Full-Stack Developer — Jr → Mid-Level',
    'exp.bis.b1': 'Promoted from Junior to Mid-Level by taking on more complex projects and technical ownership',
    'exp.bis.b2': 'Full-stack work with <strong>PHP, JavaScript and Magento</strong> — online stores for multiple clients',
    'exp.bis.b3': 'Integration with SOAP APIs and XML handling for connection to external ERPs',
    'exp.bis.b4': 'Technical SEO, performance optimization and full cycle from concept to deploy',
    'exp.bis.b5': 'Delivery of online stores with custom integrations live in production',

    'proj.eyebrow': 'Projects',
    'proj.title': "Things I've <em>built</em>, and what each one means.",
    'proj.p1.status': 'In progress',
    'proj.p1.name': 'E-commerce platform in <em>microservices</em>',
    'proj.p1.desc': `Distributed system with 5 independent services, async communication via RabbitMQ and distributed
            cache with Redis. Each service applies Clean Architecture and DDD, orchestrated via Kubernetes.
            Capstone project of the postgrad program.`,
    'proj.p2.glove': 'Professional Boxing Glove 14oz',
    'proj.p2.cart': 'Add to cart',
    'proj.p2.name': 'World Combat — <em>Magento</em> e-commerce',
    'proj.p2.desc': `Martial arts store (BJJ, Boxing, Muay Thai) with SOAP integration to the client's ERP,
            technical SEO and optimized performance. Live in production with real traffic.`,
    'proj.p3.month': 'October',
    'proj.p3.d1': 'S', 'proj.p3.d2': 'M', 'proj.p3.d3': 'T', 'proj.p3.d4': 'W',
    'proj.p3.d5': 'T', 'proj.p3.d6': 'F', 'proj.p3.d7': 'S',
    'proj.p3.opensource': 'Open source',
    'proj.p3.name': 'Agenda — Laravel + <em>React</em> + Docker',
    'proj.p3.desc': `Full-stack scheduling app. REST API in Laravel consumed by a React SPA,
            all containerized with Docker and ready to deploy.`,
    'proj.p4.plain': 'Hello, world!',
    'proj.p4.pill': 'Security',
    'proj.p4.desc': `Implementation of AES (Advanced Encryption Standard) — symmetric cryptography built from scratch
            as a fundamentals exercise.`,
    'proj.p5.pill': 'Study',
    'proj.p5.name': '2D Platformer in <em>Unity</em>',
    'proj.p5.desc': `2D game in Unity built during a course — first contact with game dev.
            Today I work professionally with C++ on a proprietary engine.`,
    'proj.p6.more': '+ more',
    'proj.p6.name': 'Personal lab',
    'proj.p6.desc': `PyTorch, TensorFlow, automation scripts, postgrad exercises and prototypes.
            A living repository of learning.`,

    'skills.eyebrow': 'Stack',
    'skills.title': 'Tools in <em>daily use</em>.',
    'skills.messaging': 'Messaging & APIs',
    'skills.db': 'Databases',
    'skills.security': 'Security',

    'edu.eyebrow': 'Education',
    'edu.title': 'Where I <em>learned</em> what I know.',
    'edu.fiap.status': 'In progress',
    'edu.fiap.degree': 'Postgrad in <em>.NET Systems Architecture</em>',
    'edu.fiap.dates': 'Jan/2025 — Dec/2026',
    'edu.senai.status': 'Completed',
    'edu.senai.degree': "Bachelor's in <em>Software Engineering</em>",
    'edu.senai.duration': '4 years',
    'edu.senai.dates': '2021 — Jul/2025',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's <em>talk</em>?",
    'contact.desc': `Open to full-time positions, freelance work and collaborations.
        Reach out on your preferred channel — I respond fast.`,
    'contact.email': 'Email',
    'contact.cv': 'Download CV',
  },

  pt: {
    'meta.title': "Pedro Delgado Henriques — Engenheiro de Software",
    'meta.description': "Engenheiro de Software com 5+ anos — Game Dev C++, .NET, Full Stack Web. Londrina/PR.",

    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.skills': 'Stack',
    'nav.education': 'Formação',
    'nav.contact': 'Contato',
    'nav.downloadCv': 'Baixar CV',

    'hero.status': 'DISPONÍVEL PARA PROPOSTAS E PROJETOS',
    'hero.years': '5+ anos',
    'hero.desc': `Engenheiro de Software com mais de 5 anos de experiência em desenvolvimento de software. Atuação combinada como
        desenvolvedor full-stack com forte ênfase em desenvolvimento web e e-commerce, desenvolvedor de jogos e professor de programação.
        Atualmente cursando pós-graduação em <span class="accent">Arquitetura de Sistemas .NET</span> pela FIAP + Alura.`,
    'hero.cta.projects': 'Ver projetos',
    'hero.cta.contact': 'Entrar em contato',
    'hero.stat.years': 'ANOS DE EXP.',
    'hero.stat.companies': 'EMPRESAS',
    'hero.stat.projects': 'PROJETOS LIVE',
    'hero.stat.english': 'INGLÊS AVANÇADO',

    'about.eyebrow': 'Sobre',
    'about.title': 'Generalista por <em>formação</em>, especialista por <em>obsessão</em>.',
    'about.p1': `Sou <strong>Engenheiro de Software</strong> formado pela UniSenaiPR. Comecei na web —
          PHP, Magento, e-commerce de verdade com tráfego real — e fui migrando pra
          stacks mais pesados. Hoje meu dia a dia é <span class="h">C++ puro</span> em engine
          proprietária, modelando matemática de slot machines.`,
    'about.p2': `Em paralelo, curso a <strong>Pós em Arquitetura .NET pela FIAP</strong>,
          onde construí um sistema de 5 microsserviços com RabbitMQ, Redis, Docker e Kubernetes.
          Já ensinei <strong>Python</strong> pra turmas iniciantes — entender como explicar código
          mudou como eu escrevo código.`,
    'about.p3': `Gosto de problemas que misturam <strong>performance</strong>, <strong>matemática</strong> e <strong>produto</strong>.
          Inglês avançado, perfil autodidata, à vontade tanto no terminal quanto numa reunião de planejamento.`,
    'about.fact.today.label': 'Hoje',
    'about.fact.today.val': 'Game Dev <span class="pop">C++</span>',
    'about.fact.studying.label': 'Estudando',
    'about.fact.studying.val': 'Arquitetura <span class="pop">.NET</span>',
    'about.fact.studying.sub': 'Pós-Tech FIAP + Alura',
    'about.fact.bg.label': 'Background',
    'about.fact.bg.val': 'Full-Stack <span class="pop">Web</span>',
    'about.fact.bg.sub': 'PHP · Magento · React · 3 anos',
    'about.fact.lang.label': 'Idiomas',
    'about.fact.lang.val': 'PT-BR · <span class="pop">EN</span>',
    'about.fact.lang.sub': 'Português nativo · Inglês B2',

    'exp.eyebrow': 'Trajetória',
    'exp.title': 'De lojas online a <em>slot engines</em>.',
    'exp.firepot.date': 'dez/2024 — atual',
    'exp.firepot.role': 'Desenvolvedor de Jogos C++ — Pleno',
    'exp.firepot.b1': 'Desenvolvimento de slot machines em <strong>C++ puro</strong> sobre engine proprietária com assets 2D',
    'exp.firepot.b2': 'Implementação de bonus rounds, free spins e cascading reels integrados aos sistemas existentes',
    'exp.firepot.b3': 'Refatoração de módulos críticos: renderização de símbolos, RNG e sistema de animação',
    'exp.firepot.b4': 'Modelagem matemática de volatilidade e tuning de RTP — de alta a baixa variância',
    'exp.firepot.b5': 'Elaboração de Game Design Documents completos (mecânicas, paytable, fluxo, regras de bônus)',
    'exp.firepot.b6': 'Migração de jogos legados entre versões da engine mantendo estabilidade em produção',
    'exp.ensina.date': 'jun/2024 — dez/2024',
    'exp.ensina.role': 'Professor de Programação — Python',
    'exp.ensina.b1': 'Aulas de Python pra iniciantes — lógica de programação, estruturas de dados e boas práticas',
    'exp.ensina.b2': 'Elaboração de material didático, exercícios práticos e acompanhamento individual de cada aluno',
    'exp.ensina.tag1': 'Didática',
    'exp.ensina.tag2': 'Mentoria',
    'exp.bis.date': 'out/2021 — mai/2024',
    'exp.bis.role': 'Desenvolvedor Full-Stack — Júnior → Pleno',
    'exp.bis.b1': 'Promovido de Júnior a Pleno assumindo projetos de maior complexidade e ownership técnico',
    'exp.bis.b2': 'Full-stack com <strong>PHP, JavaScript e Magento</strong> — lojas virtuais pra múltiplos clientes',
    'exp.bis.b3': 'Integração com APIs SOAP e manipulação de XML pra conexão com ERPs externos',
    'exp.bis.b4': 'SEO técnico, otimização de performance e ciclo completo da concepção ao deploy',
    'exp.bis.b5': 'Entrega de lojas virtuais com integrações customizadas em produção',

    'proj.eyebrow': 'Projetos',
    'proj.title': 'Coisas que <em>construí</em>, e o que cada uma quer dizer.',
    'proj.p1.status': 'Em construção',
    'proj.p1.name': 'Plataforma de e-commerce em <em>microsserviços</em>',
    'proj.p1.desc': `Sistema distribuído com 5 serviços independentes, comunicação assíncrona via RabbitMQ e cache
            distribuído com Redis. Cada serviço aplica Clean Architecture e DDD, orquestrado via Kubernetes.
            Projeto integrador da pós-graduação.`,
    'proj.p2.glove': 'Luva de Boxe Profissional 14oz',
    'proj.p2.cart': 'Adicionar ao carrinho',
    'proj.p2.name': 'World Combat — e-commerce em <em>Magento</em>',
    'proj.p2.desc': `Loja de artes marciais (BJJ, Boxe, Muay Thai) com integração SOAP pro ERP do cliente,
            SEO técnico e performance otimizada. Em produção com tráfego real.`,
    'proj.p3.month': 'Outubro',
    'proj.p3.d1': 'D', 'proj.p3.d2': 'S', 'proj.p3.d3': 'T', 'proj.p3.d4': 'Q',
    'proj.p3.d5': 'Q', 'proj.p3.d6': 'S', 'proj.p3.d7': 'S',
    'proj.p3.opensource': 'Open source',
    'proj.p3.name': 'Agenda — Laravel + <em>React</em> + Docker',
    'proj.p3.desc': `App full-stack de agendamentos. API REST em Laravel consumida por SPA em React,
            tudo containerizado com Docker e pronto pra deploy.`,
    'proj.p4.plain': 'Olá, mundo!',
    'proj.p4.pill': 'Segurança',
    'proj.p4.desc': `Implementação do AES (Advanced Encryption Standard) — criptografia simétrica feita do zero
            como exercício de fundamentos.`,
    'proj.p5.pill': 'Estudo',
    'proj.p5.name': 'Plataforma 2D em <em>Unity</em>',
    'proj.p5.desc': `Jogo 2D em Unity feito durante curso — primeiro contato com game dev.
            Hoje atuo profissionalmente com C++ em engine proprietária.`,
    'proj.p6.more': '+ mais',
    'proj.p6.name': 'Lab pessoal',
    'proj.p6.desc': `PyTorch, TensorFlow, scripts de automação, exercícios da pós e protótipos.
            Repositório vivo de aprendizado.`,

    'skills.eyebrow': 'Stack',
    'skills.title': 'Ferramentas em <em>uso diário</em>.',
    'skills.messaging': 'Mensageria & APIs',
    'skills.db': 'Banco de Dados',
    'skills.security': 'Segurança',

    'edu.eyebrow': 'Formação',
    'edu.title': 'Onde <em>aprendi</em> o que sei.',
    'edu.fiap.status': 'Em andamento',
    'edu.fiap.degree': 'Pós em Arquitetura de <em>Sistemas .NET</em>',
    'edu.fiap.dates': 'jan/2025 — dez/2026',
    'edu.senai.status': 'Concluído',
    'edu.senai.degree': 'Bacharel em <em>Engenharia de Software</em>',
    'edu.senai.duration': '4 anos',
    'edu.senai.dates': '2021 — jul/2025',

    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos <em>conversar</em>?',
    'contact.desc': `Aberto a posições full-time, freelas e colaborações.
        Me chame pelo canal que preferir — respondo rápido.`,
    'contact.email': 'E-mail',
    'contact.cv': 'Baixar CV',
  },
};

function applyLanguage(lang) {
  if (!i18n[lang]) lang = 'en';
  const dict = i18n[lang];

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if (val == null) return;
    const attrName = el.getAttribute('data-i18n-attr');
    if (attrName) {
      el.setAttribute(attrName, val);
    } else if (el.tagName === 'TITLE') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });

  document.querySelectorAll('.nav-lang .lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  const cvHref = lang === 'pt'
    ? 'pedro-delgado-henriques-cv-pt.pdf'
    : 'pedro-delgado-henriques-cv-en.pdf';
  document.querySelectorAll('[data-cv-link]').forEach(el => {
    el.setAttribute('href', cvHref);
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  applyLanguage(saved === 'pt' ? 'pt' : 'en');

  document.querySelectorAll('.nav-lang').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const clicked = e.target.closest('.lang-opt');
      if (clicked) {
        applyLanguage(clicked.dataset.lang);
      } else {
        const current = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
        applyLanguage(current === 'en' ? 'pt' : 'en');
      }
    });
  });
})();

/* Scroll progress + back-to-top */
const bar = document.getElementById('scroll-bar');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  bar.style.width = pct + '%';
  backTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

/* Reveal on scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Mobile menu */
const ham = document.getElementById('ham');
const mob = document.getElementById('mobile-menu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});
window.closeMobile = function() {
  ham.classList.remove('open');
  mob.classList.remove('open');
};

/* Active nav link */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.style.color = 'var(--text)';
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => navIO.observe(s));
