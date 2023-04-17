import { setContext, getContext } from 'svelte'

const CONTEXT_KEY = 'SVELTE_I18N_PRO'

export function setInnerContext(t, setI18n) {
  setContext(CONTEXT_KEY, [t, setI18n])
}

export function useI18n() {
  const res = getContext(CONTEXT_KEY)
  if (!res) return [(x) => x, (x) => x]
  return getContext(CONTEXT_KEY)
}
