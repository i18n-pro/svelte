import { I18nState, SetI18n, Translate } from 'i18n-pro'
import { setContext, getContext } from 'svelte'
import { Readable } from 'svelte/store'

const CONTEXT_KEY = 'SVELTE_I18N_PRO'

export function setInnerContext(
  t: Readable<Translate>,
  setI18n: SetI18n,
  i18nState: Readable<I18nState>,
) {
  setContext(CONTEXT_KEY, { t, setI18n, i18nState })
}

export function useI18n() {
  return getContext(CONTEXT_KEY)
}
