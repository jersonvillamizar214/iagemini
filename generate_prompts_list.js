#!/usr/bin/env node
/**
 * Genera el snippet de prompts para copiar en promptfooconfig.yaml
 * Uso: node generate_prompts_list.js
 */

const fs = require('fs');

// Leer prompts desde archivo
// Cambia entre 'prompts.txt' (40 prompts) y 'prompts_test.txt' (5 prompts)
const archivo = 'prompts.txt'; // <-- EDITA AQUÍ el archivo que quieres usar
const prompts = fs.readFileSync(archivo, 'utf-8')
  .split('\n')
  .filter(line => line.trim().length > 0);

// Generar el snippet YAML
console.log('# Copia y pega esto en tu promptfooconfig.yaml (sección prompts):');
console.log('\nprompts:');
prompts.forEach(prompt => {
  // Escapar comillas simples si las hay
  const escaped = prompt.replace(/'/g, "''");
  console.log(`  - '${escaped}'`);
});

console.log(`\n# Total: ${prompts.length} prompts generados`);
console.log('\nO si prefieres, actualiza el YAML automáticamente ejecutando:');
console.log('node generate_prompts_list.js > temp_prompts.txt');
