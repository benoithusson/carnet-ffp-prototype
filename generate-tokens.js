const fs = require('fs');
const tokens = JSON.parse(fs.readFileSync('./src/styles/tokens.json', 'utf8'));

function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function getTokenValue(token) {
  if (typeof token === 'string') return token;
  if (token.value !== undefined) {
    // Gestion des box-shadow et autres objets complexes
    if (typeof token.value === 'object') {
      if (token.type === 'boxShadow') {
        const s = token.value;
        return `${s.x || 0}px ${s.y || 0}px ${s.blur || 0}px ${s.spread || 0}px ${s.color || 'rgba(0,0,0,0.1)'}`;
      }
      return JSON.stringify(token.value);
    }
    return token.value;
  }
  return null;
}

function processTokens(obj, prefix = '', sections = {}) {
  for (const key in obj) {
    const value = obj[key];
    const kebabKey = toKebabCase(key);
    const fullPrefix = prefix ? `${prefix}-${kebabKey}` : kebabKey;

    // Obtenir la valeur du token
    const tokenValue = getTokenValue(value);

    if (tokenValue !== null) {
      // C'est un token final
      const section = prefix.split('-')[0] || 'general';
      if (!sections[section]) sections[section] = [];
      sections[section].push(`  --${fullPrefix}: ${tokenValue};`);
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      // C'est un objet imbriqué
      processTokens(value, fullPrefix, sections);
    }
  }

  return sections;
}

const sections = processTokens(tokens);

let css = '/**\n * Design Tokens\n * Auto-generated from tokens.json\n */\n\n:root {\n';

// Ordre d'affichage des sections
const sectionOrder = ['color', 'primitive', 'unit', 'font', 'typography', 'responsive', 'semantic', 'effect', 'grid'];

sectionOrder.forEach(sectionName => {
  if (sections[sectionName] && sections[sectionName].length > 0) {
    css += `\n  /* ${sectionName.toUpperCase()} */\n`;
    css += sections[sectionName].join('\n') + '\n';
  }
});

// Ajouter les sections restantes
Object.keys(sections).forEach(sectionName => {
  if (!sectionOrder.includes(sectionName) && sections[sectionName].length > 0) {
    css += `\n  /* ${sectionName.toUpperCase()} */\n`;
    css += sections[sectionName].join('\n') + '\n';
  }
});

css += '}\n';

fs.writeFileSync('./src/styles/tokens.css', css);
console.log('✅ tokens.css generated successfully');
console.log('📊 Total sections:', Object.keys(sections).length);
console.log('📝 Total tokens:', Object.values(sections).reduce((sum, arr) => sum + arr.length, 0));
