// Classificador de Nível de Herói (Node.js)
// Projeto simples para praticar lógica de programação no terminal.
// Os dados são salvos em um arquivo JSON criado automaticamente.

const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Caminho do arquivo onde os heróis serão salvos
const DB_PATH = path.join(__dirname, "heroes.json");

// Níveis de acordo com a experiência
function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  if (xp <= 2000) return "Bronze";
  if (xp <= 5000) return "Prata";
  if (xp <= 7000) return "Ouro";
  if (xp <= 8000) return "Platina";
  if (xp <= 9000) return "Ascendente";
  if (xp <= 10000) return "Imortal";
  return "Radiante";
}

// Carrega os heróis salvos ou cria um padrão com a Viúva Negra
function carregarHeroes() {
  if (!fs.existsSync(DB_PATH)) {
    const inicial = [{ nome: "Viúva Negra", xp: 6800 }];
    fs.writeFileSync(DB_PATH, JSON.stringify(inicial, null, 2));
    return inicial;
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

// Salva os heróis no arquivo JSON
function salvarHeroes(lista) {
  fs.writeFileSync(DB_PATH, JSON.stringify(lista, null, 2));
}

// Terminal interativo
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const perguntar = (txt) => new Promise((r) => rl.question(txt, r));

async function main() {
  let herois = carregarHeroes();

  while (true) {
    console.log(`
===== MENU =====
1) Listar heróis
2) Adicionar herói
0) Sair
================`);
    const opc = await perguntar("Escolha uma opção: ");

    if (opc === "1") {
      console.log("\nLista de Heróis:");
      herois.forEach((h, i) => {
        const nivel = classificarNivel(h.xp);
        console.log(`${i + 1}. ${h.nome} — XP: ${h.xp} — Nível: ${nivel}`);
      });
      console.log();
    }

    else if (opc === "2") {
      const nome = await perguntar("Nome do herói: ");
      const xp = Number(await perguntar("XP do herói: "));
      if (!nome || isNaN(xp)) {
        console.log("⚠️  Dados inválidos.\n");
        continue;
      }
      herois.push({ nome, xp });
      salvarHeroes(herois);
      console.log("✅ Herói adicionado!\n");
    }

    else if (opc === "0") {
      console.log("Até a próxima! 🦸‍♀️");
      rl.close();
      break;
    }

    else {
      console.log("Opção inválida.\n");
    }
  }
}

main();
