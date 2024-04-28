<div align="center">
  <p style="font-size: 18px;">Lightweight, simple, flexible, automatic translation internationalization tool for Svelte</p>

English | [简体中文](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.1/README_zh-CN.md)



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
  &emsp;&emsp;[The implementation based on  `Store`  is mainly composed of  `4`  part](#the-implementation-based-on--store--is-mainly-composed-of--4--part)<br/>
  &emsp;&emsp;[The implementation based on  `Context`  is mainly composed of  `2`  part](#the-implementation-based-on--context--is-mainly-composed-of--2--part)<br/>
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

* Realization based on  `Store` 
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/svelte-demo/main?file=README.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/svelte-demo?file=README.md)
* Realization based on  `Context` 
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/svelte-demo/context?file=README.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/svelte-demo/tree/context?file=README.md)


# Principle
The library is based on the  `Store`  and  `Context`  features based on  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro")  binding  `Svelte` .
## The implementation based on  `Store`  is mainly composed of  `4`  part

* createI18n
* t
* setI18n
* i18nState



**createI18n**：Initialize internationalization<br />**t**：Get international documents<br />**setI18n**：Set language or language package<br />**i18nState**：The current state of internationalization



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
<script>
  import { t } from '@i18n-pro/svelte'
</script>

<div>
  {$t('hello world')}
</div>

// index.ts
import ‘./i18n.ts’
import App from './App.svelte'

new App({
  target: document.getElementById('app'),
})
```

## The implementation based on  `Context`  is mainly composed of  `2`  part

* I18nProvider
* useI18n



**I18nProvider**：Configure container components for internationalization initialization properties<br />**useI18n**：Hook method for obtaining internationalization API and state



A simple example is as follows
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

# Help Document

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `2.1.0`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
* Current Library
   * Quick Start
      * [Realization based on  `Store` ](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.1/docs/dist/USAGE_STORE.md)
      * [Realization based on  `Context` ](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.1/docs/dist/USAGE_CONTEXT.md)
   * API
      * [Realization based on  `Store` ](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.1/docs/dist/API_STORE.md)
      * [Realization based on  `Context` ](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.1/docs/dist/API_CONTEXT.md)
   * [Changelog](https://github.com/i18n-pro/svelte/blob/v1.0.0-alpha.1/docs/dist/CHANGELOG.md)
* i18n-pro
   * [Command Line](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/COMMAND_LINE.md)
   * [Matching Rules](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/MATCH_RULE.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/Q&A.md)
   * [Translation Log](https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/OUTPUT_LOG.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu