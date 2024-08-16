import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptTranslations from "../locale/pt.json";
import enTranslations from "../locale/en.json";

const resources = {
    en: {
        ...enTranslations
    },
    pt: {
        ...ptTranslations
    },
}

i18n.use(initReactI18next).init({
    resources: resources,
    lng: "pt",
    interpolation: {
        escapeValue: false
    }
})

export default i18n