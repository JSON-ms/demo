export type JmsLocaleKey = 'en-US' | 'es-MX'

export type JmsSectionKey = 'home' | 'playground'

export type JmsEnumColors = 'primary' | 'secondary' | 'white'

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

export interface JmsHomePresentationItem {
  type: 'text' | 'media' | 'youtube'
  title: JmsLocaleSet<string> | null
  media: JmsFile | null
  youtube: string | null
  body: JmsLocaleSet<string | null> | null
  cta: JmsLocaleSet<string> | null
  color: JmsEnumColors
  commands: ('openDrawer' | 'closeDrawer' | 'openAdvanced' | 'closeAdvanced' | 'showData' | 'showSettings' | 'showDocs' | 'setMobile' | 'setDesktop' | 'hideDevice')[]
  hash: string
}

export interface JmsHome {
  presentation: JmsHomePresentationItem[]
}

export interface JmsPlaygroundList {
  select: 'male' | 'female' | null
  radio: JmsEnumGender | null
  checkbox: JmsEnumGender[]
}

export interface JmsPlaygroundArraysArrayItem {
  firstName: string | null
  lastName: string | null
  gender: JmsEnumGender | null
  picture: JmsFile | null
  hash: string
}

export interface JmsPlaygroundArraysI18nArrayItem {
  title: string | null
  hash: string
}

export interface JmsPlaygroundArrays {
  array: JmsPlaygroundArraysArrayItem[]
  i18nArray: JmsLocaleSet<JmsPlaygroundArraysI18nArrayItem[]>
}

export interface JmsPlaygroundFiles {
  file: JmsFile | null
  acceptImages: JmsFile | null
  multiple: JmsFile[]
}

export interface JmsPlaygroundSchema {
  title: string
  description: string | null
}

export interface JmsPlayground {
  text: string | null
  textWithIcon: string | null
  textDefault: string | null
  i18nRequired: JmsLocaleSet<string> | null
  i18nTextarea: JmsLocaleSet<string | null> | null
  textRules: string | null
  i18nRating: JmsLocaleSet<number | null> | null
  conditionalSwitch: undefined | null
  hiddenField1: number | null
  hiddenField2: [number, number] | null
  list: JmsPlaygroundList
  arrays: JmsPlaygroundArrays
  files: JmsPlaygroundFiles
  markdown: string | null
  date: Date | null
  schema: JmsPlaygroundSchema
}

export interface JmsData {
  home: JmsHome
  playground: JmsPlayground
}