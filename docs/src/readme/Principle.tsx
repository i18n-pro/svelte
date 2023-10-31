import { Break, H1, Bold, CodeBlock, List } from 'jsx-to-md'
import {
  getI18nProviderDesc,
  getI18nPro,
  getI18nStateDesc,
  getCreateI18nDesc,
  getSetI18nDesc,
  getTDesc,
} from '../utils'

export default function Principle() {
  return (
    <>
      <H1>{t('原理')}</H1>
      {t(
        '该库是基于{0}结合{1}的{2}特性来实现的',
        getI18nPro('link'),
        ' `Svelte` ',
        ' `Store` ',
      )}
      <Break />
      <Break />
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
import { createI18n } from '@i18n-pro/svelte'

createI18n( {
  namespace: 'testNamespace',
  locale: "en",
  langs: {
    zh: {
      'hello world': '你好世界',
    },
    ja:{
      "hello world": "こんにちは世界",
    },
  }
})

// App.svelte
<div>
  {{ $t('hello world') }}
</div>

// main.ts
import ‘./i18n.ts’
import App from './App.svelte'

new App({
  target: document.getElementById('app'),
})
`}
      />
    </>
  )
}
