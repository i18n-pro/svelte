import { readable } from 'svelte/store'
import { initI18n } from 'i18n-pro'
import type { I18nState, SetI18n, Translate } from 'i18n-pro'
export type { I18nState, SetI18n, Translate, Langs } from 'i18n-pro'

const warnText = 'createI18n should be called before App render'
const namespace = 'unknown'

let count = 0

function warn() {
  if (count == 0) {
    console.error(warnText)
    count--
  }
}

let innerI18nState:I18nState = { namespace }

let i18nAPI: Omit<ReturnType<typeof initI18n>, 'withI18n'> = {
  t: (x) => {
    warn()
    return x
  },
  setI18n: (args) => {
    return { ...args, namespace }
  },
}

let setT: (t: Translate) => void = (t: Translate) => {
  warn()
  return t
}

let setI18nState: (i18nState:I18nState)=>void = (i18nStateProp) => {
 innerI18nState = i18nStateProp
}

export function createI18n(i18nState: I18nState) {
  i18nAPI = initI18n(i18nState)
  innerI18nState = i18nState
  count = 1
}

export const t = readable(i18nAPI.t, (setTProp) => {
  warn();
  (setT = setTProp)(i18nAPI.t)

  return () => {
    i18nAPI = null
    setT = null
  }
})

export const setI18n: SetI18n = (args) => {
  warn()
  const newState = i18nAPI?.setI18n(args)
  setT(i18nAPI.t.bind(null))
  setI18nState(newState)
  return newState
}

export const i18nState = readable(innerI18nState, (setI18nStateProp) => {
  warn();
  (setI18nState = setI18nStateProp)(innerI18nState)

  return () => {
    innerI18nState = null
    setI18nState = null
  }
})
