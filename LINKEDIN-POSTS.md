# Posts do LinkedIn — os 3 projetos do currículo

Um post por semana, nesta ordem. Pra cada projeto tem:
1. **Plano de demonstração**: as mecânicas que o recrutador precisa ver, com arquivo, linhas e o que falar.
2. **Roteiro de gravação**: a ordem das telas.
3. **Texto do post**, pronto pra colar.

| Semana | Projeto | Vídeo |
|---|---|---|
| 1 | SlotForge | 60–90s |
| 2 | FIAP Cloud Games | 75–90s |
| 3 | Shaders Unity + Texture Optimizer | 45–60s |

## Como mostrar código sem perder o recrutador

- **Uma mecânica por vez**: mostre o trecho, explique em **uma frase** o problema que ele resolve e passe pro próximo.
- **Não leia o código em voz alta.** Fale o *porquê*, não o *o quê*. Um exemplo: "descarto esse pedaço pra nenhum número sair mais que outro" em vez de "aqui tem um do-while".
- **Selecione as linhas** com o mouse enquanto fala, pra pessoa saber onde olhar.
- **Depois do código, mostre funcionando.** Código e resultado, sempre em pares.
- Fonte do VS Code em 18 ou mais (`Ctrl +`) e tema escuro. Feche o explorador de arquivos na hora de mostrar o código.
- Coloque **legenda**, porque a maioria assiste sem som. O CapCut gera automático, mas revise os termos técnicos.
- Suba o vídeo **direto no LinkedIn**. Publique de terça a quinta, das 8h às 10h, responda os comentários na primeira hora e fixe o post em **Destaques**.

---

## Post 1 — SlotForge

Tudo aqui é 100% seu, então é o post mais forte pra começar.

### Plano de demonstração: 4 mecânicas

**1. RNG sem viés de módulo**
- Arquivo: `src/SlotForge.Core/Rng/SeededRandomSource.cs`, **linhas 35–41**.
- Fala: *"Se eu fizesse `random % 10`, alguns números sairiam um pouco mais que outros, e num jogo de dinheiro isso é fraude. Aqui eu descarto a faixa de cima que causaria esse viés, então todo número tem exatamente a mesma chance."*
- Depois mostre `CryptoRandomSource.cs`, **linha 13**: *"Pra jogo real uso o gerador criptográfico do sistema. O seeded é só pra simulação que precisa ser reproduzível."*
- O que o recrutador percebe: você entende o problema antes de escrever a solução.

**2. Avaliação de linhas com wild**
- Arquivo: `src/SlotForge.Core/Engine/WinEvaluator.cs`, **linhas 91–128**.
- Fala: *"O wild substitui qualquer símbolo, mas ele também tem prêmio próprio. Então eu calculo os dois casos, a linha com o símbolo real e a linha só de wilds, e pago o maior. É o comportamento padrão de slot."*
- O que o recrutador percebe: você trata os casos de borda da regra de negócio.

**3. Simulador de RTP**
- Arquivo: `src/SlotForge.Core/Simulation/RtpSimulator.cs`, **linhas 39–72**.
- Fala, apontando a **linha 57**: *"Uma rodada é o giro normal mais os free spins que ele gera, inclusive quando um free spin gera mais free spins."*
- Fala, apontando as **linhas 67–71**: *"A volatilidade eu calculo com o algoritmo de Welford, que atualiza média e variância a cada rodada. Não preciso guardar 5 milhões de resultados na memória."*
- Então rode no terminal:
  ```
  dotnet run -c Release --project src/SlotForge.Cli -- simulate 5000000
  ```
- Fala sobre o resultado: *"5 milhões de rodadas em uns 22 segundos. O jogo começou com 157% de RTP, o que quebraria o cassino. Fui ajustando as reel strips até chegar em 97,65%."*

**4. Testes, API e CI**
- Terminal: `dotnet test` com os **30 testes passando**.
- Arquivo `src/SlotForge.Api/SlotForge.Api.http`: clique em "Send Request" no `POST /spin` e mostre o JSON do resultado.
- Aba **Actions** no GitHub, com o CI verde.
- Fala: *"Toda regra do jogo tem teste, a API está em ASP.NET Core Minimal API e o CI roda a cada push."*

### Roteiro de gravação

| Tempo | Tela |
|---|---|
| 0–5s | README no GitHub. *"Construí um motor de slot machine em .NET 8."* |
| 5–20s | Mecânica 1 (RNG) |
| 20–35s | Mecânica 2 (wild) |
| 35–65s | Mecânica 3 (simulador + terminal). Acelere a espera 4x |
| 65–85s | Mecânica 4 (testes, API, CI) |
| 85–90s | *"Código aberto, link no post. Estou buscando vaga de backend .NET."* |

### Texto do post

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

### Antes de gravar

- **Seu código fica em dois lugares:**
  - **NotificationsAPI da fase 2**, no repositório `FIAP-PosTech-2025/fcg-notifications-api`. Você é o autor principal.
  - **Cache Redis** no repositório `FIAP-PosTech-2025/UsersAPI`, commit `261f785`.
- Na fase 3 o time migrou a NotificationsAPI pra Lambda, e essa parte não é sua. Por isso a demonstração
  da sua parte roda o **seu** serviço sozinho, com um RabbitMQ local.
- Peça pro Pablo apagar o arquivo solto `how 30472b6 --stat  more` do repositório OrchestrationApi.
- **Ensaie a demonstração ao vivo antes de gravar.** Se a mensagem publicada não aparecer no log, troque
  as chaves do JSON pra `UserId`, `Name`, `Email`, com a primeira letra maiúscula.

### Plano de demonstração: 1 visão do time + 3 mecânicas suas

**0. A arquitetura do time (curto, deixe claro que é do time)**
- O diagrama do README do OrchestrationApi, e depois o Postman chamando o Kong: sem token dá **401**, com token dá **200**.
- Fala: *"Meu time construiu uma plataforma de jogos em microsserviços .NET na pós da FIAP. Tudo entra pelo Kong, que valida o JWT antes de a requisição chegar em qualquer API."*

**1. Mensageria com MassTransit, e o bug que eu resolvi**
- Arquivo: `fcg-notifications-api`, `Notifications.Api/Program.cs`, **linhas 63–101**.
- Fala, apontando a **linha 80**: *"No começo as mensagens saíam do produtor e nunca chegavam aqui. O MassTransit cria o nome da fila automaticamente, e o nome gerado não era o mesmo da fila onde a outra API publicava. Declarei a fila com o nome exato do contrato."*
- Fala, apontando as **linhas 95–98**: *"Pagamento processado é um evento que vários serviços querem ouvir, então ligo minha fila numa exchange fanout. Cada serviço recebe a sua cópia."*

**2. Separação em camadas**
- Arquivo: `Notifications.Infra/Consumers/UserCreatedConsumer.cs`, **linhas 21–28**, e depois
  `Notifications.Application/Services/NotificationService.cs`.
- Fala: *"O consumer só recebe a mensagem e repassa. A regra de negócio fica na camada de aplicação, que não sabe que o RabbitMQ existe. Se trocar o broker, a regra não muda."*

**3. Funcionando ao vivo**
- Terminal 1: `docker run -d --name rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management`
- Terminal 2: `dotnet run --project Notifications.Api`
- No navegador, abra `localhost:15672` (login `guest`/`guest`), vá em **Queues** → `UserCreated` → **Publish message** e publique:
  ```json
  {"userId":"3fa85f64-5717-4562-b3fc-2c963f66afa6","name":"Pedro","email":"pedro@teste.com"}
  ```
- Volte no terminal 2. Aparece `[EMAIL SIMULADO] Bem-vindo ao FCG!`.
- Fala: *"Publiquei o evento na fila e o meu serviço consumiu e processou na hora, sem ninguém chamar ele diretamente."*

**4. Cache com Redis que nunca derruba a API**
- Arquivo: `UsersAPI`, `src/UsersAPI.Application/AppServices/UsuarioAppService.cs`.
  - **Linhas 69–74**: *"Primeiro tento o cache."*
  - **Linha 107**: *"Se não achar, busco no banco e guardo no Redis por 10 minutos."*
  - **Linha 122**: *"Quando a senha muda, apago o cache daquele usuário pra ninguém ler dado velho."*
- Arquivo: `src/UsersAPI.Application/Services/RedisCacheService.cs`, **linhas 26–38**.
  - Fala: *"E se o Redis cair, eu registro o aviso e sigo pelo banco. O cache deixa a API mais rápida, mas nunca derruba ela."* Essa frase mostra maturidade, então fale devagar.
- Ao vivo, se o ecossistema estiver rodando: chame `BuscarPorId` duas vezes e rode `docker exec redis redis-cli KEYS "*usuario*"` pra mostrar a chave criada.

### Roteiro de gravação

| Tempo | Tela |
|---|---|
| 0–12s | Mecânica 0 (arquitetura do time + Kong) |
| 12–35s | Mecânica 1 (MassTransit + bug da fila) |
| 35–45s | Mecânica 2 (camadas) |
| 45–60s | Mecânica 3 (publicar na fila e ver o log) |
| 60–82s | Mecânica 4 (Redis) |
| 82–90s | *"Código no GitHub, link no post. Estou buscando vaga de backend .NET."* |

### Texto do post

    Microsserviços em .NET na prática: o projeto que meu time entregou na pós em Arquitetura .NET da FIAP. 🎥

    O FIAP Cloud Games é uma plataforma de jogos com APIs em .NET 8 que se comunicam por eventos:

    🔐 Kong API Gateway com JWT, rate limiting e CORS
    📨 RabbitMQ para comunicação assíncrona entre os serviços
    ⚡ Redis como cache distribuído
    🗄️ SQL Server e MongoDB, cada um onde faz sentido
    📊 Prometheus e Grafana para observabilidade

    Minha parte:
    → Construí o serviço de notificações, que consome os eventos de cadastro e pagamento do RabbitMQ com
      MassTransit. Quem publica o evento não espera a notificação terminar.
    → Implementei o cache com Redis na API de usuários: 10 minutos de expiração, invalidação quando o dado
      muda, e se o Redis cair a API continua respondendo pelo banco.

    O bug que mais me ensinou: as mensagens saíam do produtor e nunca chegavam no consumidor. O MassTransit
    gerava o nome da fila automaticamente, e ele não batia com o nome onde a outra API publicava. Em sistema
    distribuído, o contrato entre os serviços importa tanto quanto o código.

    Obrigado ao time: [marque os colegas aqui].

    Código: github.com/FIAP-PosTech-2025/OrchestrationApi

    Estou buscando vaga de Desenvolvedor Backend .NET, remoto ou híbrido. Se souber de alguma, me chama.

    #dotnet #csharp #microsservicos #rabbitmq #backend #fiap

---

## Post 3 — Shaders Unity + Texture Optimizer

### Antes de gravar

- Os READMEs dos dois repositórios têm a seção **"What to capture for the portfolio (TODO — Pedro)"**.
  Apague essa seção. No `urp-stylized-shaders`, apague também a frase "Tell me your Unity + URP version and
  I'll pin it exactly".
- Monte uma cena na Unity com URP: 4 objetos, um com cada shader, e coloque o `TurntableRotator` neles.
- Pro Texture Optimizer, use um projeto com bastante textura. Um asset gratuito da Asset Store resolve.
  O número que ele mostrar no relatório entra no texto no lugar de **[X]**.

### Plano de demonstração: 4 mecânicas

**1. Ruído procedural escrito do zero**
- Arquivo: `Assets/PortfolioShaders/Common/Noise.hlsl`.
  - **Linhas 22–34** (`valueNoise`): *"Cada canto da célula recebe um valor pseudoaleatório e eu interpolo com curva suave, pra não aparecer quadriculado."*
  - **Linhas 37–49** (`fbm`): *"Somo várias camadas desse ruído, cada uma com o dobro de detalhe e metade da força. Isso dá a textura orgânica do dissolve."*
  - **Linhas 52–70** (`voronoi`): *"Distância até o ponto mais próximo nas células vizinhas. É o que desenha as células do escudo."*
- Fala geral: *"Nenhuma textura de ruído importada. Tudo é calculado no shader."*

**2. Dissolve**
- Arquivo: `Dissolve.shader`, **linhas 74–87**.
- Fala: *"Onde o ruído fica abaixo do limite, o pixel é descartado com `clip`. Logo acima do limite, pinto a borda com cor HDR, que brilha com o bloom."*
- Ao vivo: arraste o slider **Dissolve Amount** de 0 a 1 no Inspector.

**3. Toon com as luzes reais da URP**
- Arquivo: `ToonLit.shader`, **linhas 79–87** (`toonRamp`) e **linha 114**.
- Fala: *"Pego a iluminação normal e quantizo em faixas, com a borda levemente suavizada. E multiplico pela sombra real da URP, então o toon recebe sombra de verdade."*
- Ao vivo: gire a Directional Light e mostre as faixas mudando.

**4. Texture Optimizer**
- Arquivo: `Assets/PortfolioTools/Editor/TextureOptimizerWindow.cs`.
  - **Linha 86**: *"Meço a memória que a textura ocupa em runtime, não o tamanho do arquivo. São números bem diferentes."*
  - **Linhas 93–94**: *"Aponto textura sem mipmap e textura maior que 2048."*
  - **Linhas 251–268**: *"Aplico as correções em lote dentro de `StartAssetEditing`, o que reimporta tudo de uma vez em vez de uma por uma."*
- Ao vivo: **Tools → Portfolio → Texture Optimizer** → Scan → selecionar → Apply → mostrar o relatório "antes → depois".

### Roteiro de gravação

| Tempo | Tela |
|---|---|
| 0–8s | Os 4 shaders rodando lado a lado. *"Escrevi 4 shaders à mão em HLSL."* |
| 8–20s | Mecânica 1 (ruído) |
| 20–30s | Mecânica 2 (dissolve + slider) |
| 30–40s | Mecânica 3 (toon + luz girando) |
| 40–58s | Mecânica 4 (Texture Optimizer + relatório) |
| 58–60s | *"Código no GitHub, link no post."* |

### Texto do post

    Escrevi 4 shaders pra Unity à mão, em HLSL. Sem Shader Graph. 🎨

    Venho de C++: passei um ano e meio mexendo em renderização e performance de uma engine de slots na
    Firepot Gaming. Quis levar isso pra Unity escrevendo direto no pipeline de vértice e fragmento da URP.

    🔥 Dissolve: ruído procedural e borda brilhante, sem nenhuma textura de ruído
    👾 Hologram: fresnel, scanlines presas na tela e glitch no vértice
    🛡️ Force Field: padrão voronoi animado com pulso
    🎨 Toon: iluminação em faixas usando as luzes e sombras reais da URP

    Todo o ruído (value noise, fbm e voronoi) eu escrevi do zero, então o pack funciona sem nenhum asset
    importado.

    E como shader bonito não adianta se o jogo pesa, fiz também uma ferramenta de Editor em C# que mede
    quanto cada textura ocupa de memória em runtime, aponta o desperdício e corrige em lote. Num projeto de
    teste, reduziu a memória de texturas em [X]%.

    Shaders: github.com/PedroDelgadoHenriques1/urp-stylized-shaders
    Ferramenta: github.com/PedroDelgadoHenriques1/unity-texture-optimizer

    #unity #hlsl #shaders #gamedev #csharp
