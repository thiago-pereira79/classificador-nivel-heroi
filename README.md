# 🦸 Classificador de Nível de Herói

![License](https://img.shields.io/badge/License-MIT-8A2BE2)
![status](https://img.shields.io/badge/status-conclu%C3%ADdo-28a745)
![feito com](https://img.shields.io/badge/feito%20com-Node.js-339933)

---

## 🎯 Sobre o projeto

Projeto criado para praticar **lógica de programação** no terminal com **Node.js**: condicionais, funções e organização simples de dados.

O app classifica o **nível do herói** com base no **XP** e salva tudo em um arquivo `JSON` gerado automaticamente.

**Como funciona:**
- Menu no terminal (listar, adicionar, sair)
- Cálculo de nível por XP  
  - Ferro (≤ 1000) · Bronze (≤ 2000) · Prata (≤ 5000) · Ouro (≤ 7000)  
  - Platina (≤ 8000) · Ascendente (≤ 9000) · Imortal (≤ 10000) · Radiante (≥ 10001)
- Persistência simples em `heroes.json`

---

## ▶️ Como rodar

```bash
# 1) entrar na pasta do projeto
cd "Classificador de Nível de Herói"

# 2) executar
node index.js
