/* Portfolio — interactions */

/* =========================================================
   i18n — English default, Portuguese (pt-BR) toggle
   ========================================================= */
const i18n = {
  en: {
    'meta.title': "Pedro Delgado Henriques — Software Engineer | C# / .NET · C++ · Full-Stack",
    'meta.description': "Software Engineer with 5+ years in C#/.NET backend, C++ game development and full-stack web. Shipped casino slot games and Magento e-commerce stores to production. Microservices, RabbitMQ, Docker, Kubernetes. Londrina/PR, Brazil — open to opportunities.",

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Stack',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.downloadCv': 'Download CV',

    'hero.status': 'OPEN TO FULL-TIME AND CONTRACT ROLES',
    'hero.years': '5+ years',
    'hero.role1': 'Software Engineer',
    'hero.role2': 'C# / .NET · C++',
    'hero.desc': `Software Engineer with 5+ years across <span class="accent">C#/.NET backend</span>, C++ game
        development and full-stack web (PHP/Magento). I shipped casino slot games and e-commerce stores with ERP
        integrations to production; now specializing in .NET systems architecture — microservices, messaging,
        Docker and Kubernetes.`,
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.stat.years': 'YEARS OF EXP.',
    'hero.stat.companies': 'COMPANIES',
    'hero.stat.projects': 'LIVE PROJECTS',
    'hero.stat.english': 'ADVANCED ENGLISH',

    'about.eyebrow': 'About',
    'about.title': 'Generalist by <em>training</em>, specialist by <em>obsession</em>.',
    'about.p1': `I'm a <strong>Software Engineer</strong> (B.Sc., UniSenaiPR) with 5+ years shipping software to
          production: three years of <strong>full-stack web and e-commerce</strong> at Bis2Bis — PHP, Magento,
          SOAP/XML integrations with ERPs — then <strong>C++ game development</strong> at Firepot Gaming, building
          casino slots on a proprietary engine: RNG, paytables, RTP and volatility math in <span class="h">C++</span>.`,
    'about.p2': `Today my focus is <strong>backend and systems architecture in .NET</strong>. In the FIAP postgrad
          I built a 5-microservice platform with Kong, RabbitMQ, Redis, Docker and Kubernetes; on my own I built
          SlotForge, a .NET 8 slot engine with a Monte-Carlo RTP simulator, xUnit tests and CI. I've also taught
          <strong>Python</strong> to beginner classes — explaining code changed how I write it.`,
    'about.p3': `I enjoy problems that mix <strong>performance</strong>, <strong>math</strong> and <strong>product</strong>
          — measured, tested and documented. I use <strong>AI daily</strong>, and back every change with automated
          tests and CI. Brazilian, with Portuguese (EU) citizenship in progress. Advanced English, remote-ready,
          comfortable both in the terminal and in a planning meeting.`,
    'about.fact.today.label': 'Now',
    'about.fact.today.val': 'Software <span class="pop">Engineer</span>',
    'about.fact.today.sub': 'Open to opportunities',
    'about.fact.studying.label': 'Studying',
    'about.fact.studying.val': '<span class="pop">.NET</span> Architecture',
    'about.fact.studying.sub': 'FIAP Pós-Tech + Alura',
    'about.fact.bg.label': 'Background',
    'about.fact.bg.val': 'Games + <span class="pop">Web</span>',
    'about.fact.bg.sub': 'C++ slots · PHP/Magento · 4.5 years',
    'about.fact.lang.label': 'Languages',
    'about.fact.lang.val': 'PT-BR · <span class="pop">EN</span>',
    'about.fact.lang.sub': 'Native Brazilian Portuguese · B2 English',

    'exp.eyebrow': 'Career',
    'exp.title': 'From online stores to <em>slot engines</em>.',
    'exp.firepot.date': 'Dec/2024 — Jun/2026',
    'exp.firepot.role': 'C++ Game Developer — Mid-Level',
    'exp.firepot.b1': 'Shipped casino slot machine games in <strong>pure C++</strong> on a proprietary engine — live in production',
    'exp.firepot.b2': 'Built bonus rounds, free spins and cascading reels integrated with existing game systems',
    'exp.firepot.b3': 'Refactored critical modules (symbol rendering, RNG, animation) and removed performance bottlenecks: lower memory, higher FPS, faster loads',
    'exp.firepot.b4': 'Designed slot math models for multiple volatility profiles and tuned RTP to specification',
    'exp.firepot.b5': 'Authored complete Game Design Documents (mechanics, paytable, screen flow, bonus rules)',
    'exp.firepot.b6': 'Migrated legacy titles across engine versions while keeping production stability; Git branching in a CI/CD pipeline',
    'exp.ensina.date': 'Jun/2024 — Dec/2024',
    'exp.ensina.role': 'Programming Teacher — Python',
    'exp.ensina.b1': 'Python classes for beginners — programming logic, data structures and best practices',
    'exp.ensina.b2': 'Course materials, practical exercises and individual follow-up with each student',
    'exp.ensina.tag1': 'Teaching',
    'exp.ensina.tag2': 'Mentorship',
    'exp.bis.date': 'Nov/2021 — Jun/2024',
    'exp.bis.role': 'Full-Stack Developer — Jr → Mid-Level',
    'exp.bis.b1': 'Promoted from Junior to Mid-Level by taking on more complex projects and technical ownership',
    'exp.bis.b2': 'Full-stack development with <strong>PHP, JavaScript and Magento</strong> — online stores for multiple clients, from concept to deploy',
    'exp.bis.b3': 'Integrated SOAP APIs and XML payloads to connect stores with external ERPs',
    'exp.bis.b4': 'Technical SEO and performance optimization on stores with real traffic',
    'exp.bis.b5': 'Delivered complete e-commerce projects with custom integrations, live in production',
    'exp.bis.stores': 'Stores live:',

    'proj.eyebrow': 'Projects',
    'proj.title': 'Selected work — <em>depth</em> over volume.',
    'proj.tab.all': 'All',
    'proj.tab.game': 'Game Dev & iGaming',
    'proj.tab.techart': 'Technical Art',
    'proj.tab.web': 'Web & E-commerce',
    'proj.tab.backend': 'Backend & .NET',
    'proj.tab.security': 'Security',
    'proj.more': 'Smaller studies, exercises and experiments live on',
    'proj.p0.status': 'In production',
    'proj.p0.name': 'Shipped Slots — <em>live</em> at Firepot',
    'proj.p0.desc': `Casino slot machines built end to end in pure C++ on a proprietary engine: RNG, paytables,
            RTP and volatility tuning, symbol rendering and real-time animation. Live and playable in production.`,
    'proj.forge.pill': 'Personal',
    'proj.forge.meta': '2026 · MIT · CI passing',
    'proj.forge.name': 'SlotForge — <em>.NET 8</em> slot engine & RTP simulator',
    'proj.forge.desc': `Server-side slot engine (RGS-style) in C#: cryptographic and seeded RNG free of modulo bias,
            integer-only money math, payline/wild/scatter evaluator and free spins. A Monte-Carlo simulator proves the
            RTP — 5M rounds at ~228k spins/s tuned Gem Rush from 157% to 97.65%. ASP.NET Core Minimal API, 30 xUnit
            unit + integration tests, Docker and GitHub Actions CI.`,
    'proj.p1.status': 'Team project',
    'proj.p1.name': 'FIAP Cloud Games — <em>OrchestrationApi</em>',
    'proj.p1.desc': `Games platform across 5 .NET microservices, with Kong API Gateway (JWT, rate-limit, CORS),
            serverless Lambda (LocalStack + Terraform), polyglot persistence (SQL Server, MongoDB, Redis)
            and observability via Prometheus + Grafana. Boots end-to-end with docker-compose or Kubernetes.
            <b>My part:</b> built the NotificationsAPI microservice consuming RabbitMQ events with MassTransit,
            and added Redis caching to UsersAPI.`,
    'proj.p2.glove': 'Professional Boxing Glove 14oz',
    'proj.p2.cart': 'Add to cart',
    'proj.p2.name': 'World Combat — <em>Magento</em> e-commerce',
    'proj.p2.desc': `Martial arts store (BJJ, Boxing, Muay Thai) with SOAP/ERP integration, technical SEO and
            optimized performance — live with real traffic. One of several Magento stores I shipped at
            Bis2Bis: also Wilson Atacado, Mirão and Cama in Box.`,
    'proj.p3.month': 'October',
    'proj.p3.d1': 'S', 'proj.p3.d2': 'M', 'proj.p3.d3': 'T', 'proj.p3.d4': 'W',
    'proj.p3.d5': 'T', 'proj.p3.d6': 'F', 'proj.p3.d7': 'S',
    'proj.p3.opensource': 'Open source',
    'proj.p3.name': 'Agenda — Laravel + <em>React</em> + Docker',
    'proj.p3.desc': `Full-stack scheduling app: REST API in Laravel consumed by a React SPA, MySQL, all containerized
            with Docker Compose and ready to deploy.`,
    'proj.p4.plain': 'Hello, world!',
    'proj.p4.pill': 'Security',
    'proj.p4.desc': `AES-128 block cipher built from scratch in <strong>Python</strong> — S-box substitution,
            key expansion and the round transforms (SubBytes, ShiftRows, MixColumns over GF(2⁸), AddRoundKey).
            Low-level cryptography, byte by byte.`,
    'proj.shaders.name': 'URP Shader Pack — <em>handwritten HLSL</em>',
    'proj.shaders.desc': `Four real-time URP shaders written by hand in HLSL — dissolve, hologram, force-field and
            toon lighting — with all noise (value, fbm, voronoi) coded from scratch. Low-level rendering control
            from a C++ background, no Shader Graph.`,
    'proj.texopt.name': 'Texture Optimizer — <em>Editor tool</em>',
    'proj.texopt.desc': `Custom Unity EditorWindow that scans every texture, estimates runtime memory via the
            Profiler, flags waste and batch-applies compression/mip fixes — then reports the exact before→after
            memory saved.`,

    'skills.eyebrow': 'Stack',
    'skills.title': 'Tools in <em>daily use</em>.',
    'skills.ai': 'AI Tooling',
    'skills.messaging': 'Messaging & APIs',
    'skills.db': 'Databases',
    'skills.security': 'Security',
    'skills.arch': 'Architecture & Testing',
    'skills.observability': 'Observability',
    'skills.methodology': 'Methodology',

    'edu.eyebrow': 'Education',
    'edu.title': 'Where I <em>learned</em> what I know.',
    'edu.fiap.status': 'In progress',
    'edu.fiap.degree': 'Postgrad in <em>.NET Systems Architecture</em>',
    'edu.fiap.dates': 'Oct/2025 — Oct/2026',
    'edu.senai.status': 'Completed',
    'edu.senai.degree': "Bachelor's in <em>Software Engineering</em>",
    'edu.senai.duration': '4 years',
    'edu.senai.dates': 'Jul/2021 — Jun/2025',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's <em>talk</em>?",
    'contact.desc': `Open to full-time positions, contract work and collaborations — remote or hybrid.
        Reach out on your preferred channel — I respond fast.`,
    'contact.email': 'Email',
    'contact.cv': 'Download CV',
  },

  pt: {
    'meta.title': "Pedro Delgado Henriques — Engenheiro de Software | C# / .NET · C++ · Full-Stack",
    'meta.description': "Engenheiro de Software com 5+ anos em backend C#/.NET, desenvolvimento de jogos em C++ e full-stack web. Slot machines e lojas Magento em produção. Microsserviços, RabbitMQ, Docker, Kubernetes. Londrina/PR — aberto a oportunidades.",

    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.skills': 'Stack',
    'nav.education': 'Formação',
    'nav.contact': 'Contato',
    'nav.downloadCv': 'Baixar CV',

    'hero.status': 'ABERTO A VAGAS FULL-TIME E CONTRATOS',
    'hero.years': '5+ anos',
    'hero.role1': 'Engenheiro de Software',
    'hero.role2': 'C# / .NET · C++',
    'hero.desc': `Engenheiro de Software com 5+ anos em <span class="accent">backend C#/.NET</span>, desenvolvimento
        de jogos em C++ e full-stack web (PHP/Magento). Coloquei slot machines de cassino e lojas virtuais com
        integração a ERP em produção; hoje me especializo em arquitetura de sistemas .NET — microsserviços,
        mensageria, Docker e Kubernetes.`,
    'hero.cta.projects': 'Ver projetos',
    'hero.cta.contact': 'Entrar em contato',
    'hero.stat.years': 'ANOS DE EXP.',
    'hero.stat.companies': 'EMPRESAS',
    'hero.stat.projects': 'PROJETOS LIVE',
    'hero.stat.english': 'INGLÊS AVANÇADO',

    'about.eyebrow': 'Sobre',
    'about.title': 'Generalista por <em>formação</em>, especialista por <em>obsessão</em>.',
    'about.p1': `Sou <strong>Engenheiro de Software</strong> (bacharel pela UniSenaiPR) com 5+ anos colocando software
          em produção: três anos de <strong>full-stack web e e-commerce</strong> na Bis2Bis — PHP, Magento,
          integrações SOAP/XML com ERPs — e depois <strong>desenvolvimento de jogos em C++</strong> na Firepot Gaming,
          construindo slots de cassino em engine proprietária: RNG, paytables, matemática de RTP e volatilidade em
          <span class="h">C++</span>.`,
    'about.p2': `Hoje meu foco é <strong>backend e arquitetura de sistemas em .NET</strong>. Na pós da FIAP construí
          uma plataforma de 5 microsserviços com Kong, RabbitMQ, Redis, Docker e Kubernetes; por conta própria
          construí o SlotForge, um motor de slot em .NET 8 com simulador de RTP Monte Carlo, testes xUnit e CI.
          Também ensinei <strong>Python</strong> pra turmas iniciantes — explicar código mudou como eu escrevo.`,
    'about.p3': `Gosto de problemas que misturam <strong>performance</strong>, <strong>matemática</strong> e
          <strong>produto</strong> — medidos, testados e documentados. Uso <strong>IA diariamente</strong>, e
          sustento cada mudança com testes automatizados e CI. Brasileiro, com cidadania portuguesa (UE) em
          processo. Inglês avançado, pronto pra remoto, à vontade tanto no terminal quanto numa reunião de
          planejamento.`,
    'about.fact.today.label': 'Agora',
    'about.fact.today.val': 'Eng. de <span class="pop">Software</span>',
    'about.fact.today.sub': 'Aberto a oportunidades',
    'about.fact.studying.label': 'Estudando',
    'about.fact.studying.val': 'Arquitetura <span class="pop">.NET</span>',
    'about.fact.studying.sub': 'Pós-Tech FIAP + Alura',
    'about.fact.bg.label': 'Background',
    'about.fact.bg.val': 'Games + <span class="pop">Web</span>',
    'about.fact.bg.sub': 'Slots em C++ · PHP/Magento · 4,5 anos',
    'about.fact.lang.label': 'Idiomas',
    'about.fact.lang.val': 'PT-BR · <span class="pop">EN</span>',
    'about.fact.lang.sub': 'Português do Brasil nativo · Inglês B2',

    'exp.eyebrow': 'Trajetória',
    'exp.title': 'De lojas online a <em>slot engines</em>.',
    'exp.firepot.date': 'dez/2024 — jun/2026',
    'exp.firepot.role': 'Desenvolvedor de Jogos C++ — Pleno',
    'exp.firepot.b1': 'Slot machines de cassino em <strong>C++ puro</strong> sobre engine proprietária — no ar em produção',
    'exp.firepot.b2': 'Implementação de bonus rounds, free spins e cascading reels integrados aos sistemas de jogo existentes',
    'exp.firepot.b3': 'Refatoração de módulos críticos (renderização de símbolos, RNG, animação) e remoção de gargalos: menos memória, mais FPS, carregamento mais rápido',
    'exp.firepot.b4': 'Modelagem matemática de slots para diferentes perfis de volatilidade, com tuning de RTP conforme especificação',
    'exp.firepot.b5': 'Elaboração completa de Game Design Documents (mecânicas, paytable, fluxo de telas, regras de bônus)',
    'exp.firepot.b6': 'Migração de jogos legados entre versões da engine mantendo estabilidade em produção; branches Git em pipeline de CI/CD',
    'exp.ensina.date': 'jun/2024 — dez/2024',
    'exp.ensina.role': 'Professor de Programação — Python',
    'exp.ensina.b1': 'Aulas de Python pra iniciantes — lógica de programação, estruturas de dados e boas práticas',
    'exp.ensina.b2': 'Elaboração de material didático, exercícios práticos e acompanhamento individual de cada aluno',
    'exp.ensina.tag1': 'Didática',
    'exp.ensina.tag2': 'Mentoria',
    'exp.bis.date': 'nov/2021 — jun/2024',
    'exp.bis.role': 'Desenvolvedor Full-Stack — Júnior → Pleno',
    'exp.bis.b1': 'Promovido de Júnior a Pleno assumindo projetos de maior complexidade e ownership técnico',
    'exp.bis.b2': 'Desenvolvimento full-stack com <strong>PHP, JavaScript e Magento</strong> — lojas virtuais pra múltiplos clientes, da concepção ao deploy',
    'exp.bis.b3': 'Integração com APIs SOAP e payloads XML pra conectar as lojas a ERPs externos',
    'exp.bis.b4': 'SEO técnico e otimização de performance em lojas com tráfego real',
    'exp.bis.b5': 'Entrega de projetos de e-commerce completos com integrações customizadas, em produção',
    'exp.bis.stores': 'Lojas no ar:',

    'proj.eyebrow': 'Projetos',
    'proj.title': 'Trabalhos selecionados — <em>profundidade</em>, não volume.',
    'proj.tab.all': 'Todos',
    'proj.tab.game': 'Game Dev & iGaming',
    'proj.tab.techart': 'Technical Art',
    'proj.tab.web': 'Web & E-commerce',
    'proj.tab.backend': 'Backend & .NET',
    'proj.tab.security': 'Segurança',
    'proj.more': 'Estudos menores, exercícios e experimentos ficam no',
    'proj.p0.status': 'Em produção',
    'proj.p0.name': 'Slots no Ar — <em>live</em> na Firepot',
    'proj.p0.desc': `Slot machines de cassino construídas de ponta a ponta em C++ puro sobre engine proprietária:
            RNG, paytables, tuning de RTP e volatilidade, renderização de símbolos e animação em tempo real.
            No ar e jogáveis em produção.`,
    'proj.forge.pill': 'Pessoal',
    'proj.forge.meta': '2026 · MIT · CI passando',
    'proj.forge.name': 'SlotForge — motor de slot em <em>.NET 8</em> + simulador de RTP',
    'proj.forge.desc': `Motor de slot server-side (estilo RGS) em C#: RNG criptográfico e seeded sem viés de módulo,
            dinheiro só em inteiros, avaliador de paylines/wilds/scatters e free spins. Um simulador Monte Carlo prova
            o RTP — 5M rodadas a ~228k spins/s ajustaram o Gem Rush de 157% pra 97,65%. ASP.NET Core Minimal API,
            30 testes xUnit (unitários + integração), Docker e CI no GitHub Actions.`,
    'proj.p1.status': 'Projeto em equipe',
    'proj.p1.name': 'FIAP Cloud Games — <em>OrchestrationApi</em>',
    'proj.p1.desc': `Plataforma de jogos em 5 microsserviços .NET, com Kong API Gateway (JWT, rate-limit, CORS),
            Lambda serverless (LocalStack + Terraform), persistência poliglota (SQL Server, MongoDB, Redis)
            e observabilidade via Prometheus + Grafana. Sobe inteira com docker-compose ou Kubernetes.
            <b>Minha parte:</b> construí o microsserviço NotificationsAPI, que consome eventos do RabbitMQ
            com MassTransit, e implementei o cache com Redis na UsersAPI.`,
    'proj.p2.glove': 'Luva de Boxe Profissional 14oz',
    'proj.p2.cart': 'Adicionar ao carrinho',
    'proj.p2.name': 'World Combat — e-commerce em <em>Magento</em>',
    'proj.p2.desc': `Loja de artes marciais (BJJ, Boxe, Muay Thai) com integração SOAP/ERP, SEO técnico e
            performance otimizada — no ar com tráfego real. Uma de várias lojas Magento que entreguei na
            Bis2Bis: também Wilson Atacado, Mirão e Cama in Box.`,
    'proj.p3.month': 'Outubro',
    'proj.p3.d1': 'D', 'proj.p3.d2': 'S', 'proj.p3.d3': 'T', 'proj.p3.d4': 'Q',
    'proj.p3.d5': 'Q', 'proj.p3.d6': 'S', 'proj.p3.d7': 'S',
    'proj.p3.opensource': 'Open source',
    'proj.p3.name': 'Agenda — Laravel + <em>React</em> + Docker',
    'proj.p3.desc': `App full-stack de agendamentos: API REST em Laravel consumida por SPA em React, MySQL, tudo
            containerizado com Docker Compose e pronto pra deploy.`,
    'proj.p4.plain': 'Olá, mundo!',
    'proj.p4.pill': 'Segurança',
    'proj.p4.desc': `Cifra de bloco AES-128 construída do zero em <strong>Python</strong> — substituição via S-box,
            expansão de chave e as transformações de rodada (SubBytes, ShiftRows, MixColumns em GF(2⁸), AddRoundKey).
            Criptografia de baixo nível, byte a byte.`,
    'proj.shaders.name': 'URP Shader Pack — <em>HLSL na mão</em>',
    'proj.shaders.desc': `Quatro shaders URP em tempo real escritos à mão em HLSL — dissolve, hologram, force-field
            e toon — com todo o noise (value, fbm, voronoi) feito do zero. Controle de rendering de baixo nível
            vindo do C++, sem Shader Graph.`,
    'proj.texopt.name': 'Texture Optimizer — <em>ferramenta de Editor</em>',
    'proj.texopt.desc': `EditorWindow customizada que escaneia cada textura, estima a memória em runtime via
            Profiler, sinaliza desperdício e aplica compressão/mips em lote — e reporta a economia exata de
            memória antes→depois.`,

    'skills.eyebrow': 'Stack',
    'skills.title': 'Ferramentas em <em>uso diário</em>.',
    'skills.ai': 'Ferramentas de IA',
    'skills.messaging': 'Mensageria & APIs',
    'skills.db': 'Banco de Dados',
    'skills.security': 'Segurança',
    'skills.arch': 'Arquitetura & Testes',
    'skills.observability': 'Observabilidade',
    'skills.methodology': 'Metodologia',

    'edu.eyebrow': 'Formação',
    'edu.title': 'Onde <em>aprendi</em> o que sei.',
    'edu.fiap.status': 'Em andamento',
    'edu.fiap.degree': 'Pós em Arquitetura de <em>Sistemas .NET</em>',
    'edu.fiap.dates': 'out/2025 — out/2026',
    'edu.senai.status': 'Concluído',
    'edu.senai.degree': 'Bacharel em <em>Engenharia de Software</em>',
    'edu.senai.duration': '4 anos',
    'edu.senai.dates': 'jul/2021 — jun/2025',

    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos <em>conversar</em>?',
    'contact.desc': `Aberto a posições full-time, contratos e colaborações — remoto ou híbrido.
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

/* Project category tabs — a card may belong to several categories
   (space-separated in data-cat); counts are derived from the cards. */
(function initProjectTabs() {
  const grid = document.querySelector('.projects-grid');
  const tabs = document.querySelectorAll('.proj-tab');
  if (!grid || !tabs.length) return;

  const cards = Array.from(grid.querySelectorAll('.proj'));
  const catsOf = card => (card.dataset.cat || '').split(/\s+/).filter(Boolean);

  tabs.forEach(tab => {
    const cat = tab.dataset.cat;
    const n = cat === 'all' ? cards.length : cards.filter(c => catsOf(c).includes(cat)).length;
    const badge = tab.querySelector('.count');
    if (badge) badge.textContent = n;
  });

  function filter(cat) {
    let visible = 0;
    cards.forEach(card => {
      const match = cat === 'all' || catsOf(card).includes(cat);
      card.classList.toggle('hide', !match);
      if (match) { visible++; card.classList.add('visible'); }
    });
    grid.classList.toggle('filtered', cat !== 'all');
    grid.classList.toggle('single', cat !== 'all' && visible === 1);
    tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
  }

  tabs.forEach(tab => tab.addEventListener('click', () => filter(tab.dataset.cat)));
})();

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
