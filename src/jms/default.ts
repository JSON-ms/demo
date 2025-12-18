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
    "textWithIcon": null,
    "textDefault": "A default value",
    "i18nRequired": {
      "en-US": "",
      "es-MX": ""
    },
    "i18nTextarea": {
      "en-US": null,
      "es-MX": null
    },
    "textRules": null,
    "i18nRating": null,
    "conditionalSwitch": null,
    "hiddenField1": 50,
    "hiddenField2": [
      25,
      75
    ],
    "list": {
      "select": null,
      "radio": null,
      "checkbox": []
    },
    "arrays": {
      "array": [],
      "i18nArray": {
        "en-US": [],
        "es-MX": []
      }
    },
    "files": {
      "file": null,
      "acceptImages": null,
      "multiple": []
    },
    "markdown": null,
    "date": null,
    "schema": {
      "title": "",
      "description": null
    }
  }
}