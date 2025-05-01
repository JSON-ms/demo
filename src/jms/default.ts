import { type JmsData } from './typings'

export const locales: { [key: string]: string } = {
  "en-US": "English (US)",
  "es-MX": "Spanish (Mexico)"
}

export const defaultData: JmsData = {
  "home": {
    "presentation": []
  },
  "playground": {
    "text": null,
    "textWithIcon": "This is a default value",
    "i18nRequired": {
      "en-US": "",
      "es-MX": ""
    },
    "i18nTextarea": {
      "en-US": "",
      "es-MX": ""
    },
    "i18nRating": null,
    "conditionalSwitch": null,
    "hiddenField1": null,
    "hiddenField2": null,
    "list": {
      "select": null,
      "radio": null,
      "checkbox": []
    },
    "arrays": {
      "array": [],
      "i18nArray": []
    },
    "files": {
      "file": null,
      "acceptImages": null,
      "multiple": []
    },
    "markdown": null,
    "date": null
  }
}