<script>
  import { useI18n } from '../../src/context'

  const { t } = useI18n()
</script>

<div>
  <div id="text">{$t('你好世界')}</div>
  <div id="customKeyText">{$t.t('custom-key', '你好世界')}</div>
</div>
