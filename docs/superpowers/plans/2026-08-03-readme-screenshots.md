# README Screenshots Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Atualizar o README com o contexto educacional do projeto e três capturas desktop do site publicado.

**Architecture:** Capturar três estados visuais reais em 1440 × 900 e armazená-los como PNG em `docs/screenshots/`. Referenciar os arquivos por caminhos relativos em uma seção curta do README.

**Tech Stack:** Markdown, PNG e site React publicado.

---

### Task 1: Capturar o site

**Files:**
- Create: `docs/screenshots/home.png`
- Create: `docs/screenshots/catalog.png`
- Create: `docs/screenshots/product-details.png`

- [ ] **Step 1: Abrir `https://cronos.kingdaswinx.com.br/` com viewport 1440 × 900 e capturar o início em `home.png`.**
- [ ] **Step 2: Rolar até o catálogo e capturar `catalog.png`.**
- [ ] **Step 3: Abrir `/compra/7` e capturar `product-details.png`.**
- [ ] **Step 4: Verificar os arquivos.**

```powershell
Get-Item docs/screenshots/*.png | Select-Object Name, Length
```

Expected: três arquivos PNG com tamanho maior que zero.

### Task 2: Atualizar o README

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Acrescentar ao Overview:**

```markdown
O projeto foi desenvolvido durante o ensino médio integrado ao curso de **Análise e Desenvolvimento de Sistemas**.
```

- [ ] **Step 2: Adicionar após o Overview:**

```markdown
## 📸 Screenshots

### Página inicial

![Página inicial do Projeto Cronos](docs/screenshots/home.png)

### Catálogo de produtos

![Catálogo de smartwatches](docs/screenshots/catalog.png)

### Detalhes do produto

![Página de detalhes de um smartwatch](docs/screenshots/product-details.png)
```

- [ ] **Step 3: Verificar caminhos e formatação.**

```powershell
$readme = Get-Content -Raw README.md
@('home.png', 'catalog.png', 'product-details.png') | ForEach-Object { if ($readme -notmatch [regex]::Escape($_)) { throw "Imagem ausente no README: $_" } }
git diff --check
```

Expected: nenhum erro.
