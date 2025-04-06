export type JmsLocale = 'en-US' | 'es-MX'

export type JmsSection = 'home' | 'playground'

export type JmsEnumColors = 'primary' | 'secondary'

export type JmsEnumGender = 'male' | 'female'

export type JmsLocaleSet<T> = {
  'en-US': T
  'es-MX': T
}

export interface JmsFileMeta {
  size: number
  type: string
  width: number
  height: number
  originalFileName: string
}

export interface JmsFile {
  path: string
  meta: JmsFileMeta
}

export interface JmsHomeItems {
  title: JmsLocaleSet<string>
  body: JmsLocaleSet<string | null>
  cta: JmsLocaleSet<string>
  color: JmsEnumColors
  commands: ('openDrawer' | 'closeDrawer' | 'openAdvanced' | 'closeAdvanced' | 'showData' | 'showSettings' | 'showDocs' | 'setMobile' | 'setDesktop' | 'hideDevice')[]
  hash: string
}

export interface JmsHome {
  presentation: JmsHomeItems[]
}

export interface JmsPlaygroundList {
  select: 'male' | 'female' | null
  radio: JmsEnumGender | null
  checkbox: JmsEnumGender[]
}

export interface JmsPlaygroundArraysItems {
  firstName: string | null
  lastName: string | null
  gender: JmsEnumGender | null
  picture: JmsFile | null
  hash: string
}

export interface JmsPlaygroundArraysItems {
  title: string | null
  hash: string
}

export interface JmsPlaygroundArrays {
  array: JmsPlaygroundArraysItems[]
  i18nArray: JmsPlaygroundArraysItems[]
}

export interface JmsPlaygroundFiles {
  file: JmsFile | null
  acceptImages: JmsFile | null
  multiple: JmsFile[]
}

export interface JmsPlayground {
  text: string | null
  textWithIcon: string | null
  i18nRequired: JmsLocaleSet<string>
  i18nTextarea: JmsLocaleSet<undefined | null>
  i18nRating: JmsLocaleSet<number | null>
  conditionalSwitch: undefined | null
  hiddenField: number | null
  list: JmsPlaygroundList
  arrays: JmsPlaygroundArrays
  files: JmsPlaygroundFiles
  markdown: string | null
  date: Date | null
}

export interface JmsObject {
  home: JmsHome
  playground: JmsPlayground
}

const locales: { [key: string]: string } = {
  "en-US": "English (US)",
  "es-MX": "Spanish (Mexico)"
}

export { locales }

const defaultJmsObject: JmsObject = {
  "home": {
    "presentation": []
  },
  "playground": {
    "text": null,
    "textWithIcon": null,
    "i18nRequired": {
      "en-US": "",
      "es-MX": ""
    },
    "i18nTextarea": {
      "en-US": null,
      "es-MX": null
    },
    "i18nRating": {
      "en-US": null,
      "es-MX": null
    },
    "conditionalSwitch": null,
    "hiddenField": null,
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

export default defaultJmsObject
