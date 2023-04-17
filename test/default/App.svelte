<script>
  import { setI18n } from '../../src'
  import Child from './Child.svelte'
</script>

<div>
  <button id="zhBtn" on:click={()=>setI18n({ locale: 'zh' })}>简体中文</button>
  <button id="enBtn" on:click={()=>setI18n({ locale: 'en' })}>English</button>
  <button id="unknownBtn" on:click={()=>setI18n({ locale: undefined })}>
    Unknown
  </button>
  <button
    id="jpBtn"
    on:click={()=>
      setI18n({
        locale: 'jp',
        langs: {
          jp: {
            你好世界: 'こんにちは、世界',
          },
        },
      })}
  >
    日语
  </button>
  <Child/>
</div>
