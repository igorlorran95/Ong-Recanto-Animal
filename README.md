# 🐾 ONG RECANTO ANIMAL: Aplicação Web de Adoção

Este repositório contém o projeto final da ONG Recanto Animal, transformando uma interface estática em uma aplicação web dinâmica, responsiva, acessível e otimizada para produção.

---

## 🎯 OBJETIVOS DO PROJETO (Conclusão)

O projeto cumpre todos os requisitos de Design System, Layouts Modernos e Funcionalidades Dinâmicas, focando em:

1.  **Design System & Layout:** Aplicação de CSS Grid/Flexbox e um Design System modular completo.
2.  **Interatividade (SPA):** Simulação de uma Single Page Application (SPA) para carregamento dinâmico de conteúdo.
3.  **Acessibilidade (WCAG 2.1 AA):** Garantia de navegação por teclado e suporte para leitores de tela.
4.  **Otimização:** Preparação de todos os arquivos para um ambiente de produção (Minificação).

---

## 🛠️ ESPECIFICAÇÕES TÉCNICAS E IMPLEMENTAÇÕES

### 1. Sistema de Design e Layout (CSS3)

* **Design System:** Desenvolvido com **Variáveis CSS Customizadas** (`:root`), incluindo 8 cores temáticas, 5 tamanhos de fonte hierárquicos e espaçamento modular (base 8px).
* **Layout Responsivo:** Implementado com **CSS Grid** para a estrutura principal (`header`, `main`, `footer`) e **Flexbox** para componentes internos (menu e cards).
* **Grid Customizado:** Sistema de grid de **12 colunas** ativado em 5 breakpoints (`@media`).

### 2. Funcionalidades Dinâmicas (JavaScript Avançado)

* **SPA Básico e Templates:** O arquivo `js/spa.min.js` simula o carregamento dinâmico de conteúdo (cards de animais) via **Templates JavaScript** (`Template Literals`), manipulando o DOM.
* **Validação de Consistência:** O arquivo `js/validation.min.js` verifica a consistência de dados em formulários (Ex: checagem de formato de CPF/Telefone), fornecendo feedback visual de erro.
* **Demonstração de Estados:** Os botões de envio em `index.html` e `cadastro.html` demonstram o estado visual `disabled` via JavaScript (`btnEnviar.disabled = true;`).

### 3. Acessibilidade (WCAG 2.1 Nível AA)

Acessibilidade é garantida via codificação semântica e interativa:

* **Navegação por Teclado:** Estilo `:focus` altamente visível (outline laranja) aplicado a todos os links, botões e inputs no `style.min.css`.
* **Suporte para Leitores de Tela:**
    * Uso de atributos **WAI-ARIA** (`role="alert"`) nas mensagens de sucesso para leitura imediata.
    * Uso correto das tags semânticas (`<header>`, `<nav>`, `<main>`, `<footer>`).
* **Modo Escuro Acessível:** Implementado via `@media (prefers-color-scheme: dark)` no CSS, garantindo alto contraste.

### 4. Otimização para Produção

* **Minificação:** Todos os arquivos de produção (`.css` e `.js`) foram minificados e chamados no HTML com a extensão `.min` (`style.min.css`, `spa.min.js`, `validation.min.js`).
* **Compressão de Imagens:** As imagens foram otimizadas para reduzir o tempo de carregamento.

---

## 💻 Como Rodar o Projeto e Testar

1.  **Clone o Repositório:** `git clone https://www.youtube.com/watch?v=351MZvGXpnY`
2.  **Acesse a Pasta:** `cd Recanto-Animal-Projeto`
3.  **Abra:** Abra o arquivo `index.html` no seu navegador.

### Testes de Conformidade:

| Requisito | Como Testar |
| :--- | :--- |
| **Modo Escuro** | Ative o "Modo Escuro" nas configurações do seu sistema operacional (Windows/macOS). O site deve inverter as cores. |
| **Validação** | Na página `cadastro.html`, tente digitar um CPF ou telefone em formato incorreto. Uma mensagem de erro específica deve aparecer abaixo do campo. |
| **Acessibilidade/Foco** | Pressione a tecla `Tab` no teclado. Um contorno laranja visível deve aparecer em sequência em todos os links e botões. |
| **SPA/Templates** | No `index.html`, observe que os cards de animais são renderizados (aparecem) depois que a página base carrega (graças ao `spa.min.js`). |

---

## ⚙️ Controle de Versão (GitFlow Semântico)

O histórico de commits do projeto foi mantido seguindo o Versionamento Semântico para fácil rastreabilidade:

| Exemplo de Commit | Propósito |
| :--- | :--- |
| `feat(a11y): Implementa modo escuro e foco WCAG` | Adição de uma nova funcionalidade (acessibilidade). |
| `style(forms): Ajusta espaçamento e cores do formulário` | Alteração puramente estética (CSS). |
| `fix(js): Corrige reset de formulário após validação` | Correção de um bug. |
| `chore(build): Atualiza links para arquivos .min` | Tarefas de manutenção ou otimização. |

**Versão de Lançamento Final:** `v1.0.0`# Ong-Recanto-Animal