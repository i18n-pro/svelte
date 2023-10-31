<div align="center">
  <p style="font-size: 18px;">Lightweight, simple, flexible, automatic translation internationalization tool for Svelte</p>

English | [简体中文](https://github.com/i18n-pro/svelte/blob/v0.1.0/README_zh-CN.md)



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/svelte.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/svelte "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/svelte "npm-download")](https://www.npmjs.com/package/@i18n-pro/svelte "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/svelte?style=social "github-stars")](https://github.com/i18n-pro/svelte/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/svelte/main "last-commit")](https://github.com/i18n-pro/svelte/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/svelte "github-issues")](https://github.com/i18n-pro/svelte/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/svelte/branch/main/graph/badge.svg?token=RMHGQUBVY6 "codecov")](https://codecov.io/gh/i18n-pro/svelte "codecov")



</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Requirement](#requirement)<br/>
  [Features](#features)<br/>
  [Live Demo](#live-demo)<br/>
  [Principle](#principle)<br/>
  [License](#license)<br/>

</details>


# Vision
To make internationalization easy and enjoyable 😄💪🏻
# Requirement

* svelte >= **3.0.0**
* i18n-pro >= **2.0.0**


# Features

* **lightweight**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/svelte?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/svelte "bundlesize")
* The following features are inherited from  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 
   * **simple**
   * **flexible**
   * **automatic-translation**
   * **keyless**


# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/svelte-demo/main?file=README.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/svelte-demo?file=README.md)


# Principle
This library is implemented based on  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro")  combined with  `Svelte` 's  `Store`  feature

Mainly composed of  `4`  parts
* createI18n
* t
* setI18n
* i18nState



**createI18n**：初始化国际化状态<br />**t**：获取国际化文案<br />**setI18n**：设置语言或语言包<br />**i18nState**：当前国际化的状态



A simple example is as follows
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

# Help Document

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `2.1.0`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
* Current Library
   * [Quick Start](https://github.com/i18n-pro/svelte/blob/v0.1.0/docs/dist/USAGE.md)
   * [API](https://github.com/i18n-pro/svelte/blob/v0.1.0/docs/dist/API.md)
   * [Changelog](https://github.com/i18n-pro/svelte/blob/v0.1.0/docs/dist/CHANGELOG.md)
* i18n-pro
   * [Command Line](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/COMMAND_LINE.md)
   * [Matching Rules](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/MATCH_RULE.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/Q&A.md)
   * [Translation Log](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/OUTPUT_LOG.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu