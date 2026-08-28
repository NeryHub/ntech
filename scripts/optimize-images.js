// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = './public/images';
const outputDir = './public/images/optimized';

// Criar pasta de saída
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Configurações de otimização
const configs = {
  'hero-bg.jpg': { width: 1920, quality: 80 },
  'electrical-panel.jpg': { width: 800, quality: 85 },
  'electrician-work.jpg': { width: 800, quality: 85 },
  'ev-charger.jpg': { width: 800, quality: 85 },
  'smart-home.jpg': { width: 800, quality: 85 },
  'logo.png': { width: 400, quality: 85, format: 'png' }
};

async function optimizeImage(filename, config) {
  const inputPath = path.join(imagesDir, filename);
  const ext = path.extname(filename);
  const name = path.basename(filename, ext);
  
  // Para WebP
  const webpPath = path.join(outputDir, `${name}.webp`);
  await sharp(inputPath)
    .resize(config.width, null, { withoutEnlargement: true })
    .webp({ quality: config.quality || 80 })
    .toFile(webpPath);
  console.log(`✅ Criado: ${name}.webp`);
  
  // Para PNG (apenas logo)
  if (config.format === 'png') {
    const pngPath = path.join(outputDir, `${name}.png`);
    await sharp(inputPath)
      .resize(config.width, null, { withoutEnlargement: true })
      .png({ quality: config.quality || 85 })
      .toFile(pngPath);
    console.log(`✅ Criado: ${name}.png (otimizado)`);
  }
}

// Executar otimização
async function optimizeAll() {
  console.log('🔄 Otimizando imagens...\n');
  
  for (const [filename, config] of Object.entries(configs)) {
    try {
      await optimizeImage(filename, config);
    } catch (error) {
      console.error(`❌ Erro ao otimizar ${filename}:`, error.message);
    }
  }
  
  console.log('\n✅ Todas as imagens otimizadas!');
}

optimizeAll();