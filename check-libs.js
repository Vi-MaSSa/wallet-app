import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const currentScript = basename(__filename);

const TARGET_IMPORT = `import "./tailwind.css";`;

const fixTailwindImports = (dir) => {
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = join(dir, file);

    if (file === currentScript) continue;

    if (statSync(filePath).isDirectory()) {
      fixTailwindImports(filePath);
    } else {
      const ext = extname(file);

      // Só analisa arquivos JS/TS
      if ([".js", ".ts", ".jsx", ".tsx"].includes(ext)) {
        let content = readFileSync(filePath, "utf-8");

        // 🔍 Regex para encontrar import de tailwind.css
        const regex = /import\s+["'].*tailwind\.css["'];?/g;

        if (regex.test(content)) {
          console.log(`⚠️ Import encontrado em: ${filePath}`);

          // Substitui qualquer import por padrão correto
          content = content.replace(regex, TARGET_IMPORT);

          writeFileSync(filePath, content);

          console.log(`✅ Corrigido: ${filePath}`);
        }
      }
    }
  }
};

console.log("🚀 Corrigindo imports do Tailwind...");
fixTailwindImports("./src");
console.log("✨ Correção concluída!");
