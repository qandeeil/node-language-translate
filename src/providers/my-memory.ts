import axios from 'axios';
import { TranslationProvider, TranslationOptions } from '../types';

export class MyMemoryProvider implements TranslationProvider {
  private readonly endpoint = 'https://api.mymemory.translated.net/get';

  async translate(text: string, options: TranslationOptions): Promise<string> {
    try {
      const params = {
        q: text,
        langpair: `${options.from}|${options.to}`
      };

      const response = await axios.get(this.endpoint, { params });
      
      if (response.data.responseStatus !== 200) {
        throw new Error(response.data.responseDetails);
      }

      return response.data.responseData.translatedText;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`API Error: ${error.response?.data?.message}`);
      }
      throw error;
    }
  }
}