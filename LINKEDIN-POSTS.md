# Posts do LinkedIn — os 3 projetos do currículo

Um post por semana, nesta ordem. Cada um tem o formato, o que gravar e o texto pronto pra colar.

| Semana | Projeto | Formato |
|---|---|---|
| 1 | SlotForge | Vídeo curto da tela (30–40s) ou 3 imagens |
| 2 | FIAP Cloud Games | Vídeo da tela (75–90s) |
| 3 | Shaders Unity + Texture Optimizer | Vídeo dos shaders rodando (30–45s) |

**Regras pra todos os posts**
- Suba o vídeo **direto no LinkedIn**. Link do YouTube tem bem menos alcance.
- Coloque **legenda** no vídeo, porque a maioria assiste sem som. O CapCut gera automático.
- Fonte do VS Code e do terminal em 18 ou mais, pra dar pra ler no celular.
- Corte toda espera, como build e carregamento.
- Publique de terça a quinta, entre 8h e 10h.
- Responda todo comentário na primeira hora.
- Depois de publicar, fixe o post em **Destaques** no seu perfil.

---

## Post 1 — SlotForge

**Antes de postar:** nada. O repositório já está pronto.

**O que gravar (30–40s)**

| Tempo | Tela |
|---|---|
| 0–5s | README do repositório no GitHub, com o banner |
| 5–20s | Terminal rodando `slotforge simulate 5000000`, com o resultado aparecendo (RTP 97,65%, 228k spins/s) |
| 20–30s | `dotnet test` com os 30 testes passando |
| 30–40s | Aba Actions do GitHub com o CI verde |

Se não quiser gravar, faça 3 prints dessas telas e poste como imagens.

**Texto**

    Construí um motor de slot machine em .NET 8, com simulador de RTP. Código aberto.

    Depois de um ano e meio desenvolvendo slots de dinheiro real em C++ na Firepot Gaming, quis reconstruir
    essa lógica em C# pra mostrar como funciona a parte que o jogador nunca vê.

    Num cassino online o cliente só desenha a tela. Quem decide o resultado é o servidor, e esse servidor é
    auditado. É esse cérebro que o SlotForge implementa.

    O que tem dentro:

    🎲 RNG sem viés de módulo. Criptográfico pra jogo real, seeded e determinístico pra análise reproduzível.
    💰 Dinheiro só em inteiro. Float em dinheiro é bug esperando acontecer.
    📊 Simulador Monte Carlo: 5 milhões de rodadas a 228 mil spins por segundo.
    🧪 30 testes xUnit, unitários e de integração. Docker e CI no GitHub Actions.
    ⚙️ ASP.NET Core Minimal API. A biblioteca de domínio tem zero dependência de terceiros.

    O detalhe que mais gosto de explicar: RTP não é um número que você configura. Ele sai da composição das
    reel strips e do paytable. O jogo de exemplo nasceu com 157% de RTP, o que quebraria qualquer operadora.
    Foram várias rodadas de medir, ajustar e medir de novo, até fechar em 97,65%.

    Não se afirma o RTP, se prova.

    Repositório: github.com/PedroDelgadoHenriques1/SlotForge

    Estou buscando vaga de Desenvolvedor Backend .NET, remoto ou híbrido.

    #dotnet #csharp #igaming #backend #opensource

---

## Post 2 — FIAP Cloud Games

**Antes de postar**
- É projeto **em equipe**. O texto já deixa claro qual foi a sua parte, e o GitHub mostra os commits de cada um.
- Peça pro Pablo apagar o arquivo solto `how 30472b6 --stat  more` do repositório OrchestrationApi.
- No post, marque os colegas do time. O post chega na rede deles também.

**O que gravar (75–90s)**

| Tempo | Tela | Fala |
|---|---|---|
| 0–8s | Diagrama de arquitetura do README | "Esse é o FIAP Cloud Games, uma plataforma de jogos em microsserviços .NET que meu time construiu na pós da FIAP." |
| 8–20s | Terminal rodando `start-ecosystem.ps1` (acelere 4x) | "Um único script sobe tudo: quatro APIs em .NET 8, SQL Server, MongoDB, Redis, RabbitMQ, Kong e Grafana." |
| 20–32s | Postman: sem token → 401, com token → 200 | "Tudo entra pelo Kong. Sem token JWT, a requisição nem chega na API." |
| 32–55s | Código do consumer MassTransit → fila no RabbitMQ → log da notificação | "A minha parte foi a NotificationsAPI. Quando um usuário se cadastra, a API publica um evento no RabbitMQ, e o meu serviço consome esse evento de forma assíncrona." |
| 55–70s | Código do cache → `redis-cli KEYS "UsersAPI:*"` | "Também fiz o cache com Redis na UsersAPI. A busca de usuário fica 10 minutos em cache." |
| 70–85s | Dashboard do Grafana | "Dá pra ver tudo em tempo real no Grafana. Código no GitHub, link no post." |

**Texto**

    Microsserviços em .NET na prática: o projeto que meu time entregou na pós em Arquitetura .NET da FIAP. 🎥

    O FIAP Cloud Games é uma plataforma de jogos com 4 APIs em .NET 8 que se comunicam por eventos.
    Um único script sobe o ecossistema inteiro:

    🔐 Kong API Gateway com JWT, rate limiting e CORS
    📨 RabbitMQ para comunicação assíncrona entre os serviços
    ⚡ Redis como cache distribuído
    🗄️ SQL Server e MongoDB, cada um onde faz sentido
    ☁️ AWS Lambda com Terraform, rodando local no LocalStack
    📊 Prometheus e Grafana para observabilidade

    Minha parte:
    → Construí a NotificationsAPI, que consome os eventos de cadastro e pagamento do RabbitMQ usando
      MassTransit. O cadastro não espera a notificação: publica o evento e segue.
    → Implementei o cache com Redis na UsersAPI, com expiração de 10 minutos e invalidação quando o
      usuário é atualizado.

    O bug que mais me ensinou: as mensagens saíam do produtor e nunca chegavam no consumidor. O nome da fila
    no meu serviço não era o mesmo do lado de quem publicava. Em sistema distribuído, o contrato entre os
    serviços importa tanto quanto o código.

    Obrigado ao time: [marque os colegas aqui].

    Código: github.com/FIAP-PosTech-2025/OrchestrationApi

    Estou buscando vaga de Desenvolvedor Backend .NET, remoto ou híbrido. Se souber de alguma, me chama.

    #dotnet #csharp #microsservicos #rabbitmq #backend #fiap

---

## Post 3 — Shaders Unity + Texture Optimizer

**Antes de postar**
- Os READMEs dos dois repositórios têm uma seção **"What to capture for the portfolio (TODO — Pedro)"**.
  Apague essa seção, porque recrutador que abrir o repo vai ver. No `urp-stylized-shaders`, apague também a
  frase "Tell me your Unity + URP version and I'll pin it exactly".
- Rode o Texture Optimizer num projeto com bastante textura e anote a porcentagem de memória economizada.
  Esse número vai no texto, no lugar de **[X]**. Se não rodar, apague a frase que tem o [X].

**O que gravar (30–45s)**

| Tempo | Tela |
|---|---|
| 0–8s | Dissolve queimando um objeto |
| 8–16s | Hologram com a câmera girando |
| 16–24s | Force Field pulsando numa esfera |
| 24–32s | Toon com a luz girando |
| 32–45s | Janela do Texture Optimizer: escanear, aplicar e mostrar o relatório "antes → depois" |

Os scripts `TurntableRotator` e `DissolveAnimator` do repositório já fazem o objeto girar e o dissolve animar.

**Texto**

    Escrevi 4 shaders pra Unity à mão, em HLSL. Sem Shader Graph. 🎨

    Venho de C++: passei um ano e meio mexendo em renderização e performance de uma engine de slots na
    Firepot Gaming. Quis levar isso pra Unity escrevendo direto no pipeline de vértice e fragmento da URP.

    🔥 Dissolve: ruído procedural e borda brilhante, sem nenhuma textura de ruído
    👾 Hologram: fresnel, scanlines presas na tela e glitch no vértice
    🛡️ Force Field: padrão voronoi animado com pulso
    🎨 Toon: iluminação em faixas usando as luzes reais da URP, com sombras

    Todo o ruído (value noise, fbm e voronoi) eu escrevi do zero, então o pack funciona sem nenhum asset
    importado.

    E como shader bonito não adianta se o jogo pesa, fiz também uma ferramenta de Editor em C# que escaneia
    todas as texturas do projeto, calcula quanto cada uma ocupa de memória em runtime, aponta o desperdício
    e corrige em lote. Num projeto de teste, reduziu a memória de texturas em [X]%.

    Shaders: github.com/PedroDelgadoHenriques1/urp-stylized-shaders
    Ferramenta: github.com/PedroDelgadoHenriques1/unity-texture-optimizer

    #unity #hlsl #shaders #gamedev #csharp
