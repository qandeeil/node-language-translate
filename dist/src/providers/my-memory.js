"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMemoryProvider = void 0;
const axios_1 = __importDefault(require("axios"));
class MyMemoryProvider {
    constructor() {
        this.endpoint = 'https://api.mymemory.translated.net/get';
    }
    translate(text, options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const params = {
                    q: text,
                    langpair: `${options.from}|${options.to}`
                };
                const response = yield axios_1.default.get(this.endpoint, { params });
                if (response.data.responseStatus !== 200) {
                    throw new Error(response.data.responseDetails);
                }
                return response.data.responseData.translatedText;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    throw new Error(`API Error: ${(_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message}`);
                }
                throw error;
            }
        });
    }
}
exports.MyMemoryProvider = MyMemoryProvider;
