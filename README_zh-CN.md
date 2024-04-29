<div align="center">
  <p style="font-size: 18px;">适用于 Svelte 的轻量、简单、灵活、自动翻译的国际化工具</p>

[English](https://github.com/i18n-pro/svelte/tree/v1.0.0-alpha.2#readme) | 简体中文



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/svelte.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/svelte "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/svelte "npm-download")](https://www.npmjs.com/package/@i18n-pro/svelte "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/svelte?style=social "github-stars")](https://github.com/i18n-pro/svelte/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/svelte/main "last-commit")](https://github.com/i18n-pro/svelte/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/svelte "github-issues")](https://github.com/i18n-pro/svelte/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/svelte/branch/main/graph/badge.svg?token=RMHGQUBVY6 "codecov")](https://codecov.io/gh/i18n-pro/svelte "codecov")

![demo](https://s3.bmp.ovh/imgs/2024/04/29/bb8d20297d6edf26.gif)

</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [要求](#要求)<br/>
  [特性](#特性)<br/>
  [Live Demo](#live-demo)<br/>
  [原理](#原理)<br/>
  &emsp;&emsp;[基于 `Store` 的实现](#基于-store-的实现)<br/>
  &emsp;&emsp;[基于 `Context` 的实现](#基于-context-的实现)<br/>
  [License](#license)<br/>

</details>


# 愿景
为了让接入国际化成为轻松且愉快的事😄💪🏻
# 要求

* svelte >= **3.0.0**
* i18n-pro >= **2.0.0**


# 特性

* **轻量**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/svelte?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/svelte "bundlesize")
* 以下特性继承于 [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 
   * **简单**
   * **灵活**
   * **自动翻译**
   * **keyless**


# Live Demo

* 基于 `Store` 实现
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/svelte-demo/main?file=README_zh-CN.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/svelte-demo?file=README_zh-CN.md)
* 基于 `Context` 实现
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/svelte-demo/context?file=README_zh-CN.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/svelte-demo/tree/context?file=README_zh-CN.md)


# 原理
该库是基于 [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 结合 `Svelte` 的 `Store` 和 `Context` 特性分别做了对应实现
## 基于 `Store` 的实现
主要由 `4` 部分构成
* createI18n
* t
* setI18n
* i18nState



**createI18n**：初始化国际化状态<br />**t**：获取国际化文案<br />**setI18n**：设置语言或语言包<br />**i18nState**：当前国际化的状态



简易示例如下
```typescript
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
<script>
  import { t } from '@i18n-pro/svelte'
</script>

<div>
  {$t('hello world')}
</div>

// index.ts
import './i18n'
import App from './App.svelte'

new App({
  target: document.getElementById('app'),
})
```

## 基于 `Context` 的实现
主要由 `2` 部分构成
* I18nProvider
* useI18n



**I18nProvider**：配置国际化初始化属性的容器组件<br />**useI18n**：获取国际化 API 和状态的 hook 方法



简易示例如下
```typescript svelte
// App.svelte
<script>
  import { useI18n } from '@i18n-pro/svelte/context'
  const { t } = useI18n()
</script>

<div>
  {$t('hello world')}
</div>

// Root.svelte
<script>
  import { I18nProvider } from '@i18n-pro/svelte/context'
  import App from './App.svelte'
</script>

<I18nProvider
  namespace="i18n-example"
  locale="en"
  langs={{
    zh: {
      'hello world': '你好世界',
    },
    ja:{
      "hello world": "こんにちは世界",
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
```

# 帮助文档

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.1.0` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
* 当前库
   * 快速上手
      * [基于 `Store` 实现](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.2/docs/dist/USAGE_STORE_zh-CN.md)
      * [基于 `Context` 实现](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.2/docs/dist/USAGE_CONTEXT_zh-CN.md)
   * API
      * [基于 `Store` 实现](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.2/docs/dist/API_STORE_zh-CN.md)
      * [基于 `Context` 实现](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.2/docs/dist/API_CONTEXT_zh-CN.md)
   * [更新日志](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.2/docs/dist/CHANGELOG_zh-CN.md)
* i18n-pro
   * [命令行](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/COMMAND_LINE_zh-CN.md)
   * [匹配规则](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/MATCH_RULE_zh-CN.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/Q&A_zh-CN.md)
   * [翻译日志](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/OUTPUT_LOG_zh-CN.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu