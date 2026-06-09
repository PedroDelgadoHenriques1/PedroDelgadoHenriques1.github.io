/* Portfolio — interactions */

/* =========================================================
   i18n — English default, Portuguese (pt-BR) toggle
   ========================================================= */
const i18n = {
  en: {
    'meta.title': "Pedro Delgado Henriques — C++ Game Developer | iGaming / Slots",
    'meta.description': "C++ game developer for slot machines / iGaming — RNG, RTP, volatility math and real-time rendering. 5+ years, shipped casino games in pure C++ at Firepot. Londrina/PR.",

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Stack',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.downloadCv': 'Download CV',

    'hero.status': 'AVAILABLE FOR PROPOSALS AND PROJECTS',
    'hero.years': '5+ years',
    'hero.desc': `C++ game developer specialized in <strong>slot machines</strong> — RNG, RTP and volatility math,
        engine performance and real-time rendering. 5+ years in software, most recently building casino games in pure C++
        on a proprietary engine at Firepot. Full-stack web background (PHP/Magento) and a
        <span class="accent">.NET architecture</span> postgrad in progress.`,
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.stat.years': 'YEARS OF EXP.',
    'hero.stat.companies': 'COMPANIES',
    'hero.stat.projects': 'LIVE PROJECTS',
    'hero.stat.english': 'ADVANCED ENGLISH',

    'about.eyebrow': 'About',
    'about.title': 'Generalist by <em>training</em>, specialist by <em>obsession</em>.',
    'about.p1': `I'm a <strong>Software Engineer</strong> (UniSenaiPR) who most recently worked in <span class="h">pure C++</span>
          on a proprietary engine, building <strong>slot machines</strong> end to end — RNG, paytables,
          RTP and volatility tuning, symbol rendering and real-time animation.`,
    'about.p2': `I got here through the web — three years of PHP, Magento and real e-commerce with real traffic —
          and I'm now deepening backend with a <strong>postgrad in .NET Architecture at FIAP</strong>
          (a 5-microservice system with RabbitMQ, Redis, Docker and Kubernetes). Along the way I also taught
          <strong>Python</strong> to beginner classes.`,
    'about.p3': `I enjoy problems that mix <strong>performance</strong>, <strong>math</strong> and <strong>product</strong>.
          Advanced English, self-taught profile, comfortable both in the terminal and in a planning meeting.`,
    'about.fact.today.label': 'Most recent',
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
    'exp.firepot.date': 'Dec/2024 — Jun/2026',
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
    'exp.bis.date': 'Nov/2021 — Jun/2024',
    'exp.bis.role': 'Full-Stack Developer — Jr → Mid-Level',
    'exp.bis.b1': 'Promoted from Junior to Mid-Level by taking on more complex projects and technical ownership',
    'exp.bis.b2': 'Full-stack work with <strong>PHP, JavaScript and Magento</strong> — online stores for multiple clients',
    'exp.bis.b3': 'Integration with SOAP APIs and XML handling for connection to external ERPs',
    'exp.bis.b4': 'Technical SEO, performance optimization and full cycle from concept to deploy',
    'exp.bis.b5': 'Delivery of online stores with custom integrations live in production',

    'proj.eyebrow': 'Projects',
    'proj.title': "Things I've <em>built</em>, and what each one means.",
    'proj.p0.status': 'In production',
    'proj.p0.name': 'Shipped Slots — <em>live</em> at Firepot',
    'proj.p0.desc': `Casino slot machines built end to end in pure C++ on a proprietary engine: RNG, paytables,
            RTP and volatility tuning, symbol rendering and real-time animation. Live and playable in production.`,
    'proj.p1.status': 'In progress',
    'proj.p1.name': 'FIAP Cloud Games — <em>OrchestrationApi</em>',
    'proj.p1.desc': `Orchestration of a games platform across 5 .NET microservices, with Kong API Gateway (JWT,
            rate-limit, CORS), serverless Lambda (LocalStack + Terraform), polyglot persistence
            (SQL Server, MongoDB, Redis) and observability via Prometheus + Grafana. Boots end-to-end
            with docker-compose or Kubernetes.`,
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
    'proj.p4.desc': `AES-256 block cipher implemented from scratch in low-level <strong>C++</strong> — S-box substitution,
            key schedule and CBC mode. Byte-level systems work, the same muscle behind engine code.`,
    'proj.p5.pill': 'Study',
    'proj.p5.name': '2D Platformer in <em>Unity</em>',
    'proj.p5.desc': `2D game in Unity built during a course — first contact with game dev.
            I went on to work professionally with C++ on a proprietary engine.`,
    'proj.p6.more': '+ more',
    'proj.p6.name': 'Personal lab',
    'proj.p6.desc': `PyTorch, TensorFlow, automation scripts, postgrad exercises and prototypes.
            A living repository of learning.`,

    'skills.eyebrow': 'Stack',
    'skills.title': 'Tools in <em>daily use</em>.',
    'skills.messaging': 'Messaging & APIs',
    'skills.db': 'Databases',
    'skills.security': 'Security',
    'skills.testing': 'Testing',
    'skills.observability': 'Observability',
    'skills.methodology': 'Methodology',

    'edu.eyebrow': 'Education',
    'edu.title': 'Where I <em>learned</em> what I know.',
    'edu.fiap.status': 'In progress',
    'edu.fiap.degree': 'Postgrad in <em>.NET Systems Architecture</em>',
    'edu.fiap.dates': 'Oct/2025 — Jul/2026',
    'edu.senai.status': 'Completed',
    'edu.senai.degree': "Bachelor's in <em>Software Engineering</em>",
    'edu.senai.duration': '4 years',
    'edu.senai.dates': 'Jul/2021 — Jun/2025',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's <em>talk</em>?",
    'contact.desc': `Open to full-time positions, freelance work and collaborations.
        Reach out on your preferred channel — I respond fast.`,
    'contact.email': 'Email',
    'contact.cv': 'Download CV',
  },

  pt: {
    'meta.title': "Pedro Delgado Henriques — Desenvolvedor de Jogos C++ | iGaming / Slots",
    'meta.description': "Desenvolvedor de jogos C++ para slot machines / iGaming — RNG, RTP, volatilidade e renderização em tempo real. 5+ anos, jogos de cassino em C++ puro na Firepot. Londrina/PR.",

    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.skills': 'Stack',
    'nav.education': 'Formação',
    'nav.contact': 'Contato',
    'nav.downloadCv': 'Baixar CV',

    'hero.status': 'DISPONÍVEL PARA PROPOSTAS E PROJETOS',
    'hero.years': '5+ anos',
    'hero.desc': `Desenvolvedor de jogos C++ especializado em <strong>slot machines</strong> — RNG, matemática de RTP
        e volatilidade, performance de engine e renderização em tempo real. 5+ anos em software, mais recentemente desenvolvendo
        jogos de cassino em C++ puro sobre engine proprietária na Firepot. Background full-stack web (PHP/Magento)
        e pós em <span class="accent">arquitetura .NET</span> em andamento.`,
    'hero.cta.projects': 'Ver projetos',
    'hero.cta.contact': 'Entrar em contato',
    'hero.stat.years': 'ANOS DE EXP.',
    'hero.stat.companies': 'EMPRESAS',
    'hero.stat.projects': 'PROJETOS LIVE',
    'hero.stat.english': 'INGLÊS AVANÇADO',

    'about.eyebrow': 'Sobre',
    'about.title': 'Generalista por <em>formação</em>, especialista por <em>obsessão</em>.',
    'about.p1': `Sou <strong>Engenheiro de Software</strong> (UniSenaiPR) e mais recentemente trabalhei em <span class="h">C++ puro</span>
          sobre engine proprietária, construindo <strong>slot machines</strong> de ponta a ponta — RNG, paytables,
          tuning de RTP e volatilidade, renderização de símbolos e animação em tempo real.`,
    'about.p2': `Cheguei aqui pela web — três anos de PHP, Magento e e-commerce de verdade com tráfego real —
          e agora aprofundo backend com a <strong>Pós em Arquitetura .NET pela FIAP</strong>
          (um sistema de 5 microsserviços com RabbitMQ, Redis, Docker e Kubernetes). No caminho também
          ensinei <strong>Python</strong> pra turmas iniciantes.`,
    'about.p3': `Gosto de problemas que misturam <strong>performance</strong>, <strong>matemática</strong> e <strong>produto</strong>.
          Inglês avançado, perfil autodidata, à vontade tanto no terminal quanto numa reunião de planejamento.`,
    'about.fact.today.label': 'Mais recente',
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
    'exp.firepot.date': 'dez/2024 — jun/2026',
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
    'exp.bis.date': 'nov/2021 — jun/2024',
    'exp.bis.role': 'Desenvolvedor Full-Stack — Júnior → Pleno',
    'exp.bis.b1': 'Promovido de Júnior a Pleno assumindo projetos de maior complexidade e ownership técnico',
    'exp.bis.b2': 'Full-stack com <strong>PHP, JavaScript e Magento</strong> — lojas virtuais pra múltiplos clientes',
    'exp.bis.b3': 'Integração com APIs SOAP e manipulação de XML pra conexão com ERPs externos',
    'exp.bis.b4': 'SEO técnico, otimização de performance e ciclo completo da concepção ao deploy',
    'exp.bis.b5': 'Entrega de lojas virtuais com integrações customizadas em produção',

    'proj.eyebrow': 'Projetos',
    'proj.title': 'Coisas que <em>construí</em>, e o que cada uma quer dizer.',
    'proj.p0.status': 'Em produção',
    'proj.p0.name': 'Slots no Ar — <em>live</em> na Firepot',
    'proj.p0.desc': `Slot machines de cassino construídas de ponta a ponta em C++ puro sobre engine proprietária:
            RNG, paytables, tuning de RTP e volatilidade, renderização de símbolos e animação em tempo real.
            No ar e jogáveis em produção.`,
    'proj.p1.status': 'Em construção',
    'proj.p1.name': 'FIAP Cloud Games — <em>OrchestrationApi</em>',
    'proj.p1.desc': `Orquestração de uma plataforma de jogos em 5 microsserviços .NET, com Kong API Gateway (JWT,
            rate-limit, CORS), Lambda serverless (LocalStack + Terraform), persistência poliglota
            (SQL Server, MongoDB, Redis) e observabilidade via Prometheus + Grafana. Sobe inteiro
            com docker-compose ou Kubernetes.`,
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
    'proj.p4.desc': `Cifra de bloco AES-256 implementada do zero em <strong>C++</strong> de baixo nível — substituição
            via S-box, key schedule e modo CBC. Trabalho de sistemas a nível de byte, a mesma base do código de engine.`,
    'proj.p5.pill': 'Estudo',
    'proj.p5.name': 'Plataforma 2D em <em>Unity</em>',
    'proj.p5.desc': `Jogo 2D em Unity feito durante curso — primeiro contato com game dev.
            Depois passei a atuar profissionalmente com C++ em engine proprietária.`,
    'proj.p6.more': '+ mais',
    'proj.p6.name': 'Lab pessoal',
    'proj.p6.desc': `PyTorch, TensorFlow, scripts de automação, exercícios da pós e protótipos.
            Repositório vivo de aprendizado.`,

    'skills.eyebrow': 'Stack',
    'skills.title': 'Ferramentas em <em>uso diário</em>.',
    'skills.messaging': 'Mensageria & APIs',
    'skills.db': 'Banco de Dados',
    'skills.security': 'Segurança',
    'skills.testing': 'Testes',
    'skills.observability': 'Observabilidade',
    'skills.methodology': 'Metodologia',

    'edu.eyebrow': 'Formação',
    'edu.title': 'Onde <em>aprendi</em> o que sei.',
    'edu.fiap.status': 'Em andamento',
    'edu.fiap.degree': 'Pós em Arquitetura de <em>Sistemas .NET</em>',
    'edu.fiap.dates': 'out/2025 — jul/2026',
    'edu.senai.status': 'Concluído',
    'edu.senai.degree': 'Bacharel em <em>Engenharia de Software</em>',
    'edu.senai.duration': '4 anos',
    'edu.senai.dates': 'jul/2021 — jun/2025',

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
