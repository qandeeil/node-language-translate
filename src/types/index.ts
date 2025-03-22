export interface TranslationOptions {
  from: string;
  to: string;
//   apiKey?: string;
}

export interface TranslationProvider {
  translate(text: string, options: TranslationOptions): Promise<string>;
}
