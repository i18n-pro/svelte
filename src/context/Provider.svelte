<script lang='ts'>
  import type {I18nState , SetI18n, Translate} from 'i18n-pro'
  import { initI18n } from 'i18n-pro'
  import { readable } from 'svelte/store'
  import { setInnerContext } from './context'

  export let namespace: I18nState['namespace']
  export let locale: I18nState['locale'] = undefined
  export let langs: I18nState['langs'] = undefined
  export let beginIndex: I18nState['beginIndex'] = undefined
  export let formatNumber: I18nState['formatNumber'] = undefined
  export let formatCurrency: I18nState['formatCurrency'] = undefined
  export let formatDate: I18nState['formatDate'] = undefined
  export let formatTime: I18nState['formatTime'] = undefined
  export let formatPlural: I18nState['formatPlural'] = undefined

  let state:I18nState = {
    namespace,
    locale,
    langs,
    beginIndex,
    formatNumber,
    formatCurrency,
    formatDate,
    formatTime,
    formatPlural,
  }

  const i18n = initI18n(state)

  let setT: (t: Translate) => void = (t: Translate) => {
    return t
  }

  let setI18nState: (i18nState: I18nState) => void = (i18nState: I18nState) => {
    state = i18nState
  }

  const setI18n:SetI18n = async (...args) => {
    state = await i18n.setI18n(...args)
    setT(i18n.t.withLocale())
    setI18nState(state)

    return state
  }

  const t = readable(i18n.t, (setTProp) => {
    setT = setTProp
  })

  const i18nState = readable(state, (setI18nStateProp) => {
    (setI18nState=setI18nStateProp)(state)
  })

  setInnerContext(t, setI18n, i18nState)
</script>

<slot></slot>
