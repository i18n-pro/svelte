
# Quick Start

> To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br/>> <br /><br/>> The  `i18n-pro`  related link in the current document is based on the  `3.0.0-alpha.2`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage<br/>
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[1. Install](#1-install)<br/>
  &emsp;&emsp;[2. Access API](#2-access-api)<br/>
  &emsp;&emsp;&emsp;&emsp;[Initialization state](#initialization-state)<br/>
  &emsp;&emsp;&emsp;&emsp;[Wrap  `Translation Text`  with  `t` ](#wrap--translation-text--with--t)<br/>
  &emsp;&emsp;[3. Initialize Command Line Configuration File](#3-initialize-command-line-configuration-file)<br/>
  &emsp;&emsp;[4. Adjust  `i18nrc.js`  Configuration](#4-adjust--i18nrcjs--configuration)<br/>
  &emsp;&emsp;[5. Execute Translation Command](#5-execute-translation-command)<br/>
  &emsp;&emsp;[6. Importing Language Pack](#6-importing-language-pack)<br/>
  &emsp;&emsp;[7. Switch Language](#7-switch-language)<br/>
  &emsp;&emsp;[8. Demo](#8-demo)<br/>

</details>

## 1. Install

```bash
npm i @i18n-pro/svelte
# or
yarn add @i18n-pro/svelte
# or
# Note: To prevent issues where the i18n command cannot be used due to ghost dependencies, it is essential to install i18n-pro when using pnpm
pnpm i i18n-pro @i18n-pro/svelte
```

## 2. Access API

### Initialization state

```js
// i18n.ts
import { createI18n } from '@i18n-pro/svelte'

createI18n({
  namespace: 'testNamespace',
})
```

### Wrap  `Translation Text`  with  `t` 

```js
// App.svelte
<script>
  import { t } from '@i18n-pro/svelte'
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
```


## 3. Initialize Command Line Configuration File
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/USAGE.md#3-initialize-command-line-configuration-file)

## 4. Adjust  `i18nrc.js`  Configuration
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/USAGE.md#4-adjust--i18nrcjs--configuration)

## 5. Execute Translation Command
[Please refer to](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/USAGE.md#5-execute-translation-command)

## 6. Importing Language Pack
The language pack already exists, so it needs to be applied to the project

If the generated language pack is a separate file form （`output.langType == 'multiple'`） for each language, the operation is as follows:
```diff
// i18n.ts
import { createI18n } from '@i18n-pro/svelte'
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
```
If the generated language pack is in the form of aggregation （`output.langType == 'single'`）, the operation is as follows:
```diff
// i18n.ts
import { createI18n } from '@i18n-pro/svelte'
+ import langs from './i18n/langs.json'

createI18n({
  namespace: 'testNamespace',
+  locale: 'zh',
+  langs,
})
```
At this point, the project has been completely connected to internationalization. The above  `locale`  specifies any of the target language, and the translated content can be seen on the page. If there are new  `Translation Text`  (need to be wrapped with  `t`  function) in the subsequent project, you only need to execute the translation command  `npx i18n t`  again to generate the latest language package

## 7. Switch Language
You can switch languages through  `setI18n` 
```diff
// App.tsx
<script>
-  import { t } from '@i18n-pro/svelte'
+  import { t, i18nState, setI18n } from '@i18n-pro/svelte'

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
```


## 8. Demo
Real code examples can refer to  [Live Demo](https://github.com/i18n-pro/svelte/tree/v2.0.0-alpha.0#live-demo)  in the  `README`  document