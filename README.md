# Classificador de Nível de Herói

![License](https://img.shields.io/badge/License-MIT-8A2BE2)
![status](https://img.shields.io/badge/status-conclu%C3%ADdo-28a745)
![feito com](https://img.shields.io/badge/feito%20com-Node.js-339933)

---

## 🎯 Sobre o projeto

Projeto criado para prática **lógica de programação** no terminal com **Node.js**: condicionais, funções e organização simples de dados.

O app classifica o **nível do herói** com base no XP e salva tudo em um arquivo `JSON` gerado automaticamente.

### Como funciona:
- Menu no terminal (listar, adicionar, sair)
- Cálculo de nível por XP  
  • Ferro (≤ 1000)  
  • Bronze (≤ 2000)  
  • Prata (≤ 5000)  
  • Ouro (≤ 7000)  
  • Platina (≤ 8000)  
  • Ascendente (≤ 9000)  
  • Imortal (≤ 10000)  
  • Radiante (≥ 10001)
- Persistência simples em `heroes.json`

---

## ▶️ Como rodar

1. Entrar na pasta do projeto  
   `cd "Classificador de Nível de Herói"`

2. Executar  
   `node index.js`

---

### Menu exibido no terminal

===== MENU =====  
1) Listar heróis  
2) Adicionar herói  
0) Sair  
================  

---

### Exemplo de saída

Lista de Heróis:  
1. Viúva Negra - XP: 6800 - Nível: Ouro  
2. Hulk - XP: 5000 - Nível: Prata  

---

## 🗂️ Estrutura do projeto

📁 classificador-nivel-heroi  
 ├─ index.js        → código principal (menu + lógica)  
 └─ heroes.json     → base de dados simples (criado automaticamente)  

---

## 🧠 Conceitos praticados

▫️ Variáveis e funções  
▫️ Condicionais (`if / else if`)  
▫️ Entrada de dados no terminal (`readline`)  
▫️ Leitura e escrita de arquivos (`fs`)  
▫️ Organização de código em funções pequenas  
▫️ Persistência de dados com JSON  
▫️ Estrutura de menu interativo no terminal  

---

## 🛠️ Ferramentas utilizadas

| Etapa                 | Ferramenta          | Finalidade                                      |
|-----------------------|---------------------|-------------------------------------------------|
| Edição de código      | Visual Studio Code  | Organização e escrita do código                 |
| Runtime               | Node.js             | Execução do JavaScript no terminal              |
| Persistência simples  | JSON                | Salvar/ler heróis (`heroes.json`)               |
| Versionamento         | Git & GitHub        | Controle de versão e portfólio                  |

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

👨‍💻 Desenvolvido por **Thiago Pereira**
