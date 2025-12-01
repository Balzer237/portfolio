import i18next from "./config";

import fr from "./locales/fr.json";
import en from "./locales/en.json";

i18next.addResourceBundle("fr", "translation", fr);
i18next.addResourceBundle("en", "translation", en);

export default i18next;
