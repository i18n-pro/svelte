<div align="center">
  <p style="font-size: 18px;">适用于 Svelte 的轻量、简单、灵活、自动翻译的国际化工具</p>

[English](https://github.com/i18n-pro/svelte/tree/v0.1.0#readme) | 简体中文



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/svelte.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/svelte "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/svelte "npm-download")](https://www.npmjs.com/package/@i18n-pro/svelte "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/svelte?style=social "github-stars")](https://github.com/i18n-pro/svelte/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/svelte/main "last-commit")](https://github.com/i18n-pro/svelte/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/svelte "github-issues")](https://github.com/i18n-pro/svelte/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/svelte/branch/main/graph/badge.svg?token=RMHGQUBVY6 "codecov")](https://codecov.io/gh/i18n-pro/svelte "codecov")



</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [要求](#要求)<br/>
  [特性](#特性)<br/>
  [Live Demo](#live-demo)<br/>
  [原理](#原理)<br/>
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

* [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/svelte-demo/main?file=README_zh-CN.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/svelte-demo?file=README_zh-CN.md)


# 原理
该库是基于 [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 结合 `Svelte` 的 `Store` 特性来实现的

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
<div>
  {{ $t('hello world') }}
</div>

// main.ts
import ‘./i18n.ts’
import App from './App.svelte'

new App({
  target: document.getElementById('app'),
})
```

# 帮助文档

>为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br />当前文档中 `i18n-pro` 相关链接是基于 `2.1.0` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致
* 当前库
   * [快速上手](https://github.com/i18n-pro/svelte/blob/v0.1.0/docs/dist/USAGE_zh-CN.md)
   * [API](https://github.com/i18n-pro/svelte/blob/v0.1.0/docs/dist/API_zh-CN.md)
   * [更新日志](https://github.com/i18n-pro/svelte/blob/v0.1.0/docs/dist/CHANGELOG_zh-CN.md)
* i18n-pro
   * [命令行](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/COMMAND_LINE_zh-CN.md)
   * [匹配规则](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/MATCH_RULE_zh-CN.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/Q&A_zh-CN.md)
   * [翻译日志](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/OUTPUT_LOG_zh-CN.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu