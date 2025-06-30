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

let innerI18nState: I18nState = { namespace }

const initT = ((x) => {
  warn()
  return x
}) as Translate

initT.t = (key, text) => text

initT.withLocale = () => {
  return initT
}

let i18nAPI = {
  t: initT,
  setI18n: ((args) => Promise.resolve({ ...args, namespace })) as SetI18n,
}

let setT: (t: Translate) => void = null

let setI18nState: (i18nState: I18nState) => void = null

export function createI18n(i18nState: I18nState) {
  i18nAPI = initI18n(i18nState)
  innerI18nState = i18nState
  count = 1
}

export const t = readable(i18nAPI.t, (setTProp) => {
  warn()
  ;(setT = setTProp)(i18nAPI.t)
})

export const setI18n: SetI18n = async (args) => {
  warn()
  const newState = await i18nAPI?.setI18n(args)
  setT(i18nAPI.t.withLocale())
  setI18nState(newState)
  return newState
}

export const i18nState = readable(innerI18nState, (setI18nStateProp) => {
  warn()
  ;(setI18nState = setI18nStateProp)(innerI18nState)
})
