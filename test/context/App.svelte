<script>
  import { useI18n } from '../src/context'
  import Child from './Child.svelte'

  const [, setI18n] = useI18n()
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
