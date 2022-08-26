import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "navbar_universities": "our universities",
            "navbar_how": "how it works",
            "navbar_button": "log in",
            "how_header": "meet new people",
            "how_subheader": "find your crush or start meeting new people from your university",
            "how_span": "everyone has had a crush in college. we are young and sometimes we do not dare to take the step. take the step now!",
            "how_start": "find your crush",
            "universities_header": "for college students",
            "universities_subheader": "by belonging to a university, you will have access to publish stories looking for your crush and to talk to a person of your choice for 2 days. we already have 3 universities",
            "carousel_university_uab": "autonomous university of barcelona",
            "carousel_university_ub": "university of barcelona",
            "carousel_acronym_uab": "(uab)",
            "carousel_acronym_ub": "(ub)",
            "carousel_campus_uab": "bellaterra campus",
            "carousel_campus_sabadell": "sabadell campus",
            "carousel_campus_ub": "diagonal campus",
            "carousel_body_uab": "surrounded by a large natural environment with many green spaces",
            "carousel_body_sabadell": "it is a very small, but welcoming campus",
            "carousel_body_ub": "it is a campus left in the middle of the big one city of Barcelona which includes many different faculties",
            "download_header": "download our app and start meeting new people from your university",
            "download_subheader1": "register at your college, look for your crush and meet new and interesting people.",
            "download_subheader2": "the app add new features and notifications to keep up to date with what is happening at your university.",
            "footer_download": "download our app",
            "footer_universities": "our universities",
            "footer_header": "our social networks",
            "loginform_description": "platonic allows you to create posts to search for your crush and find new people from your university",
            "loginform_login": "log in",
            "loginform_forgot": "have you forgot your password?",
            "loginform_signup": "create new account",
        }
    },
    fr: {
        translation: {
            "navbar_universities": "our universities"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;