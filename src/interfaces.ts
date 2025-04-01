export type JmsLocale = 'en-US' | 'es-MX'

export type JmsSection = 'home'

export type JmsEnumColors = 'primary' | 'secondary'

export type JmsLocaleSet<T> = {
  'en-US': T
  'es-MX': T
}

export interface JmsImageMeta {
  size: number
  type: string
  width: number
  height: number
  originalFileName: string
}

export interface JmsFileMeta {
  size: number
  type: string
  originalFileName: string
}

export interface JmsVideo {
  path: string
  meta: JmsFileMeta
}

export interface JmsImage {
  path: string
  meta: JmsImageMeta
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
  commands: ('openDrawer' | 'closeDrawer' | 'openAdvanced' | 'closeAdvanced' | 'showData' | 'showSettings' | 'showDoc' | 'setMobile' | 'setDesktop' | 'hideDevice')[]
  hash: string
}

export interface JmsHome {
  presentation: JmsHomeItems[]
}

export interface JmsObject {
  home: JmsHome
}

const defaultJmsObject: JmsObject = {
  "home": {
    "presentation": []
  }
}

export default defaultJmsObject
