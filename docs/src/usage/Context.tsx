import {
  Break,
  H1,
  H2,
  CodeBlock,
  H3,
  TableOfContents,
  BlockQuote,
  render,
  Link,
} from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import {
  initI18n,
  getTranslationText,
  packageNameWithAt,
  contextPackageNameWithAt,
  getText,
  getI18nProDocHref,
} from '../utils'
import SpecialStatement from '../components/SpecialStatement'
import { Install, CommandLine, Demo } from './components'
import { I18nProProps } from './components/CommonLine'

function LinkApi() {
  return (
    <>
      <H2>{`2. ${t('接入 API')}`}</H2>
      <H3>{t('初始化状态')}</H3>
      <CodeBlock
        code={`
// i18n.ts
import { I18nState } from '${packageNameWithAt}'

export default {
  namespace: 'testNamespace',
} as I18nState
`}
      />
      <H3>
        {t(
          '接入{0}和{1}，并用{2}包裹{3}',
          ' `I18nProvider` ',
          ' `useI18n` ',
          ' `$t` ',
          getTranslationText(true),
        )}
      </H3>
      <CodeBlock
        code={`
// App.svelte
<script>
  import { useI18n } from '${contextPackageNameWithAt}'

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
  import { I18nProvider } from '${contextPackageNameWithAt}'
  import App from './App.svelte'
  import i18nState from './i18n'
</script>

<I18nProvider {...i18nState}>
  <App />
</I18nProvider>


// index.ts
import App from './Root.svelte'

new App({
  target: document.getElementById('app')
})
`}
      />
    </>
  )
}

function ImportLangs(props: I18nProProps) {
  const title = `6. ${t('引入语言包')}`

  return (
    <>
      <Break />
      <H2>{title}</H2>
      {t('语言包已经有了，就需要应用到项目中了')}
      <Break />
      <BlockQuote>{`${t(
        '当前支持{0}种引入语言包的方式，本文档只介绍{1}的方式，更多方式{2}',
        getText('3'),
        getText(t('静态导入')),
        render(
          <Link href={getI18nProDocHref(props.i18nProPkg, 'USAGE', title)}>
            {t('请参考')}
          </Link>,
        ),
      )}`}</BlockQuote>
      <Break lines={2} />
      {t(
        '如果生成的语言包是每个语言单独文件形式{0}，操作如下：',
        "（`output.langType == 'multiple'`）",
      )}
      <CodeBlock
        langType="diff"
        code={`
// i18n.ts
import { I18nState } from '${packageNameWithAt}'
+ import zh from './i18n/zh.json'
+ import ja from './i18n/ja.json'

export default {
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs: {
+    zh,
+    ja,
+  },
} as I18nState
`}
      />
      {t(
        '如果生成的语言包是聚合的形式{0}，操作如下：',
        "（`output.langType == 'single'`）",
      )}
      <CodeBlock
        langType="diff"
        code={`
// i18n.ts
import { I18nState } from '${packageNameWithAt}'
+ import langs from './i18n/langs.json'

export default {
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs,
} as I18nState
`}
      />
      {t(
        '至此，国际化功能已集成完毕。只需将 {0} 设置为目标语言，即可在页面上展示对应的翻译内容。后续如有新增{1}（需用 {2} 函数包裹），只需重新执行 {3} 命令生成最新语言包，即可确保所有新增内容均被翻译',
        getText('locale'),
        getTranslationText(),
        getText('$t'),
        getText('npx i18n t'),
      )}
    </>
  )
}

function SwitchLang() {
  return (
    <>
      <Break />
      <H2>{`7. ${t('切换语言')}`}</H2>
      {t('可以通过{0}来切换语言', ' `setI18n` ')}
      <CodeBlock
        langType="diff"
        code={`
// App.tsx
<script>
<script>
  import { useI18n } from '${contextPackageNameWithAt}'

-  const { t } = useI18n()
+  const { t, i18nState, setI18n } = useI18n()
+
+  function onSelectChange(e) {
+    const locale = e.target.value
+
+    setI18n({
+      locale,
+    })
+  }
</script>

<div>
  {$t('hello world')}
+  <select
+    value={$i18nState.locale || 'en'}
+    on:onChange={onSelectChange}
+  >
+    <option value="zh">简体中文</option>
+    <option value="en">English</option>
+    <option value="ja">日本語</option>
+  </select>
</div>
`}
      />
    </>
  )
}

export default function Usage(props) {
  initI18n(props)

  return (
    <>
      <I18nProWrapper>
        {(i18nProPkg) => (
          <>
            <H1 skip>{t('快速上手')}</H1>
            <SpecialStatement i18nProPkg={i18nProPkg} />
            <TableOfContents text={t('目录')} open={false} />
            <Install />
            <LinkApi />
            <CommandLine i18nProPkg={i18nProPkg} />
            <ImportLangs i18nProPkg={i18nProPkg} />
            <SwitchLang />
            <Demo />
          </>
        )}
      </I18nProWrapper>
    </>
  )
}
