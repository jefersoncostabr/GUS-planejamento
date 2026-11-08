# Guia visual para um novo projeto

Este guia registra o padrão visual e a navegação usados no GUS para servir de referência em um novo projeto. É documentação e modelo: não altera nem implementa nada na aplicação atual.

## Identidade visual

| Elemento | Padrão atual |
|---|---|
| Fundo da página | Gradiente diagonal animado entre rosa `#ff006e` e ciano `#00e5ff`, com `ivory` (`#fffff0`) como cor de fundo alternativa |
| Superfície dos painéis | Lavanda clara `#f2e9ff` |
| Cor de destaque e texto | Roxo `#5a2ca0` |
| Texto sobre superfícies escuras | Branco `#fff` |
| Sombra | Roxo translúcido `rgba(70, 24, 130, 0.2)` |
| Contornos | Cantos arredondados; painéis com raio de `10px` e sombra suave |
| Tipografia | Conteúdo geral em Arial; navegação em Segoe UI, Tahoma ou Verdana |

### Tokens de tema

Use variáveis CSS para manter as cores e efeitos consistentes. Estes são os principais valores usados no projeto:

```css
:root {
    --bg-body: ivory;
    --bg-gradient-1: #ff006e;
    --bg-gradient-2: #00e5ff;
    --bg-gradient-size: 240%;
    --bg-gradient-duration: 18s;
    --bg-panel: #f2e9ff;
    --text-primary: #5a2ca0;
    --text-light: #fff;
    --shadow-color: rgba(70, 24, 130, 0.2);
}
```

### Elementos e aparência

- **Página:** organiza o conteúdo em coluna e usa o gradiente diagonal animado. Respeite `prefers-reduced-motion` e remova a animação para quem solicitou movimento reduzido.
- **Painéis:** use fundo lavanda, espaçamento interno generoso (o padrão atual é `30px`), cantos arredondados e sombra discreta.
- **Títulos:** centralizados e brancos sobre o fundo gradiente; títulos dentro de painéis claros podem usar o roxo de destaque.
- **Botões:** cantos arredondados, texto roxo, sombra e realce luminoso ao passar o mouse ou receber foco. A interação de pressionar reduz levemente o botão. Ações de adicionar e excluir usam, respectivamente, verde `#1f8f4f` e vermelho `#c83a3a`, com texto branco.
- **Campos:** simples, arredondados e sem borda padrão; use texto e foco roxos para manter o contraste com a superfície clara.
- **Links:** use roxo de destaque, peso de fonte forte e estados visíveis de hover e foco.

### Navegação e menu hambúrguer

A navegação atual é compartilhada pelas páginas: `frontend/js/navbar.js` cria e insere o cabeçalho no início do `body`, gera os links a partir de uma lista centralizada e atualiza o nome, o perfil e o texto de Login/Sair conforme a sessão. A folha `frontend/assets/css/navbar.css` controla a aparência.

- **Desktop (acima de 768px):** barra horizontal roxa (`#2f1459` a `#4d2390`), altura de `60px`, informações do usuário à esquerda e links alinhados em uma linha.
- **Mobile (até 768px):** os links ficam ocultos inicialmente e aparece o ícone de hambúrguer. Ao clicar, a classe `ulMenuClicado` mostra o menu vertical em um painel roxo escuro, com links em alvos de pelo menos `44px`.
- **Conteúdo:** reserve espaço no início da área principal (`mainComEspacoNavbar`) para que o cabeçalho não encubra o conteúdo.
- **Personalização:** mantenha os destinos e rótulos dos links em um único lugar no script compartilhado; adapte-os às páginas do novo projeto.

### Responsividade

- O menu muda para o modo hambúrguer em `768px`.
- A página Sobre reduz margens e espaçamentos em telas até `768px`.
- Estilos gerais de autenticação e títulos ajustam dimensões em `618px`.
- Controles de paginação se compactam em telas até `600px`.
- Em páginas novas, evite larguras fixas que provoquem rolagem horizontal; mantenha os controles utilizáveis em telas estreitas.

## HTML de referência para a página principal

O cabeçalho é inserido pelo módulo compartilhado `navbar.js`; por isso não deve ser duplicado manualmente no HTML. No novo projeto, ajuste os caminhos dos arquivos e o conteúdo de `<main>` conforme a estrutura escolhida.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#2f1459">
    <title>Página inicial</title>

    <link rel="stylesheet" href="./assets/css/styleGeral.css">
    <link rel="stylesheet" href="./assets/css/responsividade.css">
    <link rel="stylesheet" href="./assets/css/navbar.css">
    <script type="module" src="./js/navbar.js"></script>
</head>
<body>
    <!-- O navbar.js compartilhado insere aqui a navegação e o menu hambúrguer. -->
    <main id="main" class="mainComEspacoNavbar">
        <h1>Página inicial</h1>

        <section class="containerPainel" aria-labelledby="boas-vindas">
            <h2 id="boas-vindas">Bem-vindo</h2>
            <p>Adicione aqui o conteúdo principal do novo projeto.</p>
        </section>
    </main>
</body>
</html>
```

## Arquivos de referência no projeto atual

- `frontend/assets/css/styleGeral.css` — fundo, cores comuns, painéis, botões, campos e estilos gerais.
- `frontend/assets/css/navbar.css` — cabeçalho, links e menu hambúrguer responsivo.
- `frontend/assets/css/responsividade.css` — ajustes de controles para telas menores.
- `frontend/js/navbar.js` — montagem dos links, inserção do cabeçalho e interação do menu.
- `frontend/painelGeral.html` — estrutura atual da página principal.
