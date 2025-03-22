import { MyMemoryProvider } from "./providers/my-memory";
import { TranslationProvider, TranslationOptions } from "./types";

class Translator {
  private provider: TranslationProvider;

  constructor(provider: TranslationProvider = new MyMemoryProvider()) {
    this.provider = provider;
  }

  async translate(text: string, from: string, to: string): Promise<string> {
    try {
      const options: TranslationOptions = { from, to };
      return await this.provider.translate(text, options);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Translation failed: ${error.message}`);
      }
      throw new Error("Translation failed: Unknown error");
    }
  }
}

export = new Translator();