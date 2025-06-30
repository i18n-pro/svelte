<script>
  import { useI18n } from '../../src/context'
  import Child from './Child.svelte'

  const { setI18n, i18nState } = useI18n()

  export { setI18n }
</script>

<div>
  <div id="locale">
    { $i18nState?.locale }
  </div>
  <Child/>
</div>
