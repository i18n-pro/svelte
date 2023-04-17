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

  const i18n = initI18n({
    namespace,
    locale,
    langs,
    beginIndex,
    formatNumber,
    formatCurrency,
    formatDate,
    formatTime,
    formatPlural,
  })

  let setT: (t: Translate) => void = (t: Translate) => {
    return t
  }

  const setI18n:SetI18n = (...args) => {
    const newState = i18n.setI18n(...args)
    setT(i18n.t.bind(null))

    return newState
  }

  const t = readable(i18n.t, (setTProp) => {
    setT = setTProp
  })

  setInnerContext(t, setI18n)
</script>

<slot></slot>
