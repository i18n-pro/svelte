import { Break, H1, H2, CodeBlock, H3, TableOfContents } from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import { initI18n, getTranslationText, packageNameWithAt } from '../utils'
import SpecialStatement from '../components/SpecialStatement'
import { Install, CommandLine, Demo } from './components'

function LinkApi() {
  return (
    <>
      <H2>{`2. ${t('接入API')}`}</H2>
      <H3>{t('初始化状态')}</H3>
      <CodeBlock
        code={`
// i18n.ts
import { createI18n } from '${packageNameWithAt}'

createI18n({
  namespace: 'testNamespace',
})
`}
      />
      <H3>{t('用{0}包裹{1}', ' `t` ', getTranslationText())}</H3>
      <CodeBlock
        code={`
// App.svelte
<script>
  import { t } from '${packageNameWithAt}'
</script>

<div>
  {$t('hello world')}
</div>


// index.ts
import App from './App.svelte'
import './i18n'

new App({
  target: document.getElementById('app')
})
`}
      />
    </>
  )
}

function ImportLangs() {
  return (
    <>
      <Break />
      <H2>{`6. ${t('引入语言包')}`}</H2>
      {t('语言包已经有了，就需要应用到项目中了')}
      <Break />
      <Break />
      {t(
        '如果生成的语言包是每个语言单独文件形式{0}，操作如下：',
        "（`output.langType == 'multiple'`）",
      )}
      <CodeBlock
        langType="diff"
        code={`
// i18n.ts
import { createI18n } from '${packageNameWithAt}'
+ import zh from './i18n/zh.json'
+ import ja from './i18n/ja.json'

createI18n({
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs: {
+    zh,
+    ja,
+  },
})
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
import { createI18n } from '${packageNameWithAt}'
+ import langs from './i18n/langs.json'

createI18n({
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs,
})
`}
      />
      {t(
        '至此，项目已经完全接入了国际化，上面{0}指定为目标语言中任意一个，在页面上就能看到翻译好的内容了。后续如果项目中有新增的{1}（需要用{2}函数包裹哟），就仅仅需要再次执行翻译命令{3}生成最新的语言包就可以了',
        ' `locale` ',
        getTranslationText(),
        ' `t` ',
        ' `npx i18n t` ',
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
-  import { t } from '${packageNameWithAt}'
+  import { t, i18nState, setI18n } from '${packageNameWithAt}'

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
+    <option value="jp">日本語</option>
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
            <ImportLangs />
            <SwitchLang />
            <Demo />
          </>
        )}
      </I18nProWrapper>
    </>
  )
}
