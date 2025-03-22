# 🌍 Node-Language-Translate

[![NPM Version](https://img.shields.io/npm/v/node-language-translate.svg?style=flat-square)](https://www.npmjs.com/package/node-language-translate)
[![Downloads](https://img.shields.io/npm/dm/node-language-translate.svg?style=flat-square)](https://npm-stat.com/charts.html?package=node-language-translate)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Test Coverage](https://img.shields.io/badge/coverage-98%25-success.svg?style=flat-square)](https://github.com/yourusername/node-translator/actions)

**The Ultimate Translation Toolkit for Node.js** - Support for 120+ languages | Multi-provider Architecture | Enterprise-Ready

## 📦 Installation

```bash
npm install node-language-translate
# or
yarn add node-language-translate

## 🚀 Usage with ES6 Imports

```typescript
import { Translator } from 'node-language-translate';

const translator = new Translator();

async function translateText() {
  try {
    const translation = await translator.translate('Good morning', 'en', 'es');
    console.log(translation); // "Buenos días"
  } catch (error) {
    console.error('Translation error:', error.message);
  }
}

translateText();
```

## ⚡ TypeScript Usage Example

**Basic translation workflow with error handling:**

```typescript
import { Translator } from 'node-language-translate';

// Initialize translator with default provider
const translator = new Translator();

// Example translation function
async function main() {
  try {
    const arabicText = await translator.translate('Hello World', 'en', 'ar');
    const frenchText = await translator.translate('Good morning', 'en', 'fr');
    
    console.log('Arabic:', arabicText); // مرحبًا أيها العالم
    console.log('French:', frenchText); // Bonjour
  } catch (error) {
    console.error('Translation failed:', error.message);
  }
}

// Execute translation
main();

```markdown
**Key Features Demonstrated:**
- ✅ Modern async/await syntax
- ✅ Type safety
- ✅ Error handling
- ✅ Multi-language support