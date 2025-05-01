export type JmsLocaleKey = 'en-US' | 'es-MX'

export type JmsSectionKey = 'home' | 'playground'

export type JmsEnumColors = 'primary' | 'secondary'

export type JmsEnumGender = 'male' | 'female'

export type JmsLocaleSet<T> = {
  'en-US': T
  'es-MX': T
}

export interface JmsFileMeta {
  size?: number | null
  type?: string
  width?: number | null
  height?: number | null
  timestamp?: number
  frameRate?: number
  duration?: number
  originalFileName?: string
}

export interface JmsFile {
  path: string | null
  meta: JmsFileMeta
}

export interface JmsHomePresentationItems {
  title: JmsLocaleSet<string>
  body: JmsLocaleSet<string | null>
  cta: JmsLocaleSet<string>
  color: JmsEnumColors
  commands: ('openDrawer' | 'closeDrawer' | 'openAdvanced' | 'closeAdvanced' | 'showData' | 'showSettings' | 'showDocs' | 'setMobile' | 'setDesktop' | 'hideDevice')[]
  hash: string
}

export interface JmsHome {
  presentation: JmsHomePresentationItems[]
}

export interface JmsPlaygroundList {
  select: 'male' | 'female' | null
  radio: JmsEnumGender | null
  checkbox: JmsEnumGender[]
}

export interface JmsPlaygroundArraysArrayItems {
  firstName: string | null
  lastName: string | null
  gender: JmsEnumGender | null
  picture: JmsFile | null
  hash: string
}

export interface JmsPlaygroundArraysI18nArrayItems {
  title: string | null
  hash: string
}

export interface JmsPlaygroundArrays {
  array: JmsPlaygroundArraysArrayItems[]
  i18nArray: JmsLocaleSet<JmsPlaygroundArraysI18nArrayItems[]>
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
  i18nTextarea: JmsLocaleSet<string | null>
  i18nRating: JmsLocaleSet<number | null>
  conditionalSwitch: undefined | null
  hiddenField1: number | null
  hiddenField2: [number, number] | null
  list: JmsPlaygroundList
  arrays: JmsPlaygroundArrays
  files: JmsPlaygroundFiles
  markdown: string | null
  date: Date | null
}

export interface JmsData {
  home: JmsHome
  playground: JmsPlayground
}