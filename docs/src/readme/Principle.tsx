import { Break, H1, Bold, CodeBlock, List, H2 } from 'jsx-to-md'
import {
  getI18nProviderDesc,
  getI18nPro,
  getI18nStateDesc,
  getCreateI18nDesc,
  getSetI18nDesc,
  getTDesc,
  packageName,
  getUseI18nDesc,
  packageNameWithAt,
} from '../utils'

function Store() {
  return (
    <>
      <H2>{t('基于{0}实现', ' `Store` ')}</H2>
      {t('主要由{0}部分构成', ' `4` ')}
      <List items={['U', 'createI18n', 't', 'setI18n', 'i18nState']} />
      <Break />
      <Break />
      <Bold>createI18n</Bold>：{getCreateI18nDesc()}
      <br />
      <Bold>t</Bold>：{getTDesc()}
      <br />
      <Bold>setI18n</Bold>：{getSetI18nDesc()}
      <br />
      <Bold>i18nState</Bold>：{getI18nStateDesc()}
      <Break />
      <Break />
      <Break />
      <Break />
      {t('简易示例如下')}
      <CodeBlock
        langType="typescript"
        code={`
// i18n.ts
import { createI18n } from '${packageNameWithAt}'

createI18n( {
  namespace: 'testNamespace',
  locale: "en",
  langs: {
    zh: {
      'hello world': '你好世界',
      'custom-key': '你好世界',
    },
    ja:{
      "hello world": "こんにちは世界",
      'custom-key': 'こんにちは世界',
    },
  }
})

// App.svelte
<script>
  import { t } from '${packageNameWithAt}'
</script>

<div>
  {/** ${t('文案即 key')} */}
  <div>{$t('hello world')}</div>
  {/** ${t('自定义 key')} */}
  <div>{$t.t('custom-key', 'hello world')}</div>
</div>

// index.ts
import './i18n'
import App from './App.svelte'

new App({
  target: document.getElementById('app'),
})
`}
      />
    </>
  )
}

function Context() {
  return (
    <>
      <H2>{t('基于{0}实现', ' `Context` ')}</H2>
      {t('主要由{0}部分构成', ' `2` ')}
      <List items={['U', 'I18nProvider', 'useI18n']} />
      <Break />
      <Break />
      <Bold>I18nProvider</Bold>：{getI18nProviderDesc()}
      <br />
      <Bold>useI18n</Bold>：{getUseI18nDesc()}
      <Break />
      <Break />
      <Break />
      <Break />
      {t('简易示例如下')}
      <CodeBlock
        langType="typescript svelte"
        code={`
// App.svelte
<script>
  import { useI18n } from '${packageNameWithAt}/context'
  const { t } = useI18n()
</script>

<div>
  {/** ${t('文案即 key')} */}
  <div>{$t('hello world')}</div>
  {/** ${t('自定义 key')} */}
  <div>{$t.t('custom-key', 'hello world')}</div>
</div>

// Root.svelte
<script>
  import { I18nProvider } from '${packageNameWithAt}/context'
  import App from './App.svelte'
</script>

<I18nProvider
  namespace="i18n-example"
  locale="en"
  langs={{
    zh: {
      'hello world': '你好世界',
      'custom-key': '你好世界',
    },
    ja:{
      "hello world": "こんにちは世界",
      'custom-key': 'こんにちは世界',
    },
  }}
>
  <App/>
</I18nProvider>

// index.ts
import App from './Root.svelte'

new App({
  target: document.getElementById('app'),
})
`}
      />
    </>
  )
}

export default function Principle() {
  return (
    <>
      <H1>{t('原理')}</H1>
      {t(
        '该库是基于{0}结合{1}的{2}和{3}特性分别做了对应实现',
        getI18nPro('link'),
        ' `Svelte` ',
        ' `Store` ',
        ' `Context` ',
      )}
      <Store />
      <Context />
    </>
  )
}
