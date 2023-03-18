import { readable } from 'svelte/store'
import { initI18n } from 'i18n-pro'
import type { I18nState, SetI18n, Translate } from 'i18n-pro'

let count = 0

const warnText = 'createI18n should be called before App render'

function warn() {
  if (count === 0) {
    console.error(warnText)
    count++
  }
}

let i18nAPI: Omit<ReturnType<typeof initI18n>, 'withI18n'> = {
  t: (x) => {
    warn()
    return x
  },
  setI18n: (args) => {
    return { ...args, namespace: 'unknown' }
  },
}

let setT: (t: Translate) => void = (t: Translate) => {
  warn()
  return t
}

export function createI18n(i18nState: I18nState) {
  i18nAPI = initI18n(i18nState)
}

export const t = readable(i18nAPI.t, (setTProp) => {
  setT = setTProp
  setT(i18nAPI.t)

  return () => {
    i18nAPI = null
    setT = null
  }
})

export const setI18n: SetI18n = (args) => {
  const newState = i18nAPI?.setI18n(args)
  setT(i18nAPI.t.bind(null))
  return newState
}
