import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        characters: {
          title: "Character List",
          gender: "Gender",
          species: "Species",
          status: "Status",
          origin: "Origin",
          noCharacters: "No characters available."
        },
        filters: {
          status: "Status",
          species: "Species",
          sortBy: "Sort By",
          all: "All",
          alive: "Alive",
          dead: "Dead",
          unknown: "Unknown",
          human: "Human",
          alien: "Alien",
          name: "Name",
          origin: "Origin"
        },
        footer: {
          title: "Rick and Morty Task",
          description: "This is just a placeholder to demonstrate the translation feature. It doesn't hold any particular meaning and is used for layout purposes.",
          services: "Services",
          about: "About",
          policy: "Company Policy",
          info: "Company Info",
          changeLanguage: "Change Language",
          english: "English",
          serbian: "Serbian",
          macedonian: "Macedonian"
        }
      }
    },
    sr: {
      translation: {
        characters: {
          title: "Lista Likova",
          gender: "Pol",
          species: "Vrsta",
          status: "Status",
          origin: "Poreklo",
          noCharacters: "Nema dostupnih likova."
        },
        filters: {
          status: "Status",
          species: "Vrsta",
          sortBy: "Sortiraj po",
          all: "Svi",
          alive: "Živ",
          dead: "Mrtav",
          unknown: "Nepoznat",
          human: "Čovek",
          alien: "Vanzemaljac",
          name: "Ime",
          origin: "Poreklo"
        },
        footer: {
          title: "Zadatak Rick i Morty",
          description: "Ovo je samo čuvar mesta za demonstraciju funkcije prevođenja. Ne nosi nikakvo posebno značenje i koristi se za potrebe rasporeda.",
          services: "Usluge",
          about: "O nama",
          policy: "Pravila kompanije",
          info: "Informacije",
          changeLanguage: "Promeni jezik",
          english: "Engleski",
          serbian: "Srpski",
          macedonian: "Makedonski"
        }
      }
    },
    mk: {
      translation: {
        characters: {
          title: "Листа на Ликови",
          gender: "Пол",
          species: "Вид",
          status: "Статус",
          origin: "Потекло",
          noCharacters: "Нема достапни ликови."
        },
        filters: {
          status: "Статус",
          species: "Вид",
          sortBy: "Подреди по",
          all: "Сите",
          alive: "Жив",
          dead: "Мртов",
          unknown: "Непознат",
          human: "Човек",
          alien: "Вонземјанин",
          name: "Име",
          origin: "Потекло"
        },
        footer: {
          title: "Рик и Морти Задача",
          description: "Ова е само место за демонстрација на функцијата за превод. Нема посебно значење и се користи за целите на распоредот.",
          services: "Услуги",
          about: "За нас",
          policy: "Политика на компанијата",
          info: "Информации",
          changeLanguage: "Смени јазик",
          english: "Англиски",
          serbian: "Српски",
          macedonian: "Македонски"
        }
      }
    }
  }
});

export default i18n;
