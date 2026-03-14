import { renameSync, readdirSync, statSync } from "fs";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";

// Pega o nome do arquivo atual para não renomeá-lo
const __filename = fileURLToPath(import.meta.url);
const currentScript = basename(__filename);

const renameFiles = (dir) => {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);

    // Ignora o próprio script de conversão
    if (file === currentScript) return;

    if (statSync(filePath).isDirectory()) {
      renameFiles(filePath);
    } else {
      const extension = extname(file);
      let newPath = null;

      if (extension === ".jsx") {
        newPath = filePath.replace(/\.jsx$/, ".tsx");
      } else if (extension === ".js") {
        newPath = filePath.replace(/\.js$/, ".ts");
      }

      if (newPath) {
        renameSync(filePath, newPath);
        console.log(`✅ Renomeado: ${file} -> ${basename(newPath)}`);
      }
    }
  });
};

// Executa na pasta src (onde fica seu código React)
console.log("🚀 Iniciando conversão de arquivos...");
renameFiles("./src");
console.log("✨ Conversão concluída!");
