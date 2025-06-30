<script>
  import { i18nState } from '../../src'
  import Child from './Child.svelte'
</script>

<div>
  <div id="locale">
    { $i18nState?.locale }
  </div>
  <Child/>
</div>
