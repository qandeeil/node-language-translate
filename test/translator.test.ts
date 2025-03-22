import Translator from "../src/Translator";

describe("Translator", () => {
  test("should translate text from Arabic to English", async () => {
    const result = await Translator.translate("كيف حالك", "ar", "en");

    console.log(">> result: ", { result: result });
  });
});
