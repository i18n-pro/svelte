<div align="center">
  <p style="font-size: 18px;">An out-of-the-box, lightweight i18n auto-translation solution for Svelte</p>

English | [简体中文](https://github.com/i18n-pro/svelte/blob/v2.0.0-alpha.0/README_zh-CN.md)



[![npm-version](https://img.shields.io/npm/v/@i18n-pro/svelte.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/@i18n-pro/svelte "npm")
[![npm-download](https://img.shields.io/npm/dm/@i18n-pro/svelte "npm-download")](https://www.npmjs.com/package/@i18n-pro/svelte "npm")

[![github-stars](https://img.shields.io/github/stars/i18n-pro/svelte?style=social "github-stars")](https://github.com/i18n-pro/svelte/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/i18n-pro/svelte/main "last-commit")](https://github.com/i18n-pro/svelte/commits/main "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/i18n-pro/svelte "github-issues")](https://github.com/i18n-pro/svelte/issues "github-issues")
[![codecov](https://codecov.io/gh/i18n-pro/svelte/branch/main/graph/badge.svg?token=0F80N8BAZ0 "codecov")](https://codecov.io/gh/i18n-pro/svelte "codecov")

![demo](https://s3.bmp.ovh/imgs/2024/04/29/bb8d20297d6edf26.gif)

</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Requirement](#requirement)<br/>
  [Features](#features)<br/>
  [Live Demo](#live-demo)<br/>
  [Principle](#principle)<br/>
  &emsp;&emsp;[Implementation based on  `Store` ](#implementation-based-on--store)<br/>
  &emsp;&emsp;[Implementation based on  `Context` ](#implementation-based-on--context)<br/>
  [License](#license)<br/>

</details>


# Vision
To make internationalization easy and enjoyable 😄💪🏻
# Requirement

* svelte >= **3.0.0**
* i18n-pro >= **3.0.0** < **4.0.0**


# Features

* **lightweight**：[![bundlesize](https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic "i18n-pro-bundlesize")](https://bundlephobia.com/package/i18n-pro "i18n-pro-bundlesize") + [![bundlesize](https://img.shields.io/bundlephobia/minzip/@i18n-pro/svelte?color=brightgreen&style=plastic "bundlesize")](https://bundlephobia.com/package/@i18n-pro/svelte "bundlesize")
* The following features are inherited from  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro") 
   * **simple**
   * **flexible**
   * **automatic-translation**
   * **keyless**


# Live Demo

* Implementation based on  `Store` 
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/svelte-demo/main?file=README.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/svelte-demo?file=README.md)
* Implementation based on  `Context` 
   * [Open in CodeSandbox](https://codesandbox.io/p/github/i18n-pro/svelte-demo/context?file=README.md)
   * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/i18n-pro/svelte-demo/tree/context?file=README.md)


# Principle
This library has corresponding implementations for the  `Store`  and  `Context`  features based on  [i18n-pro](https://github.com/i18n-pro/core "i18n-pro")  and  `Svelte` 
## Implementation based on  `Store` 
Mainly composed of  `4`  part
* createI18n
* t
* setI18n
* i18nState



**createI18n**：Initialize internationalization<br />**t**：Get internationalization text<br />**setI18n**：Set language or language package<br />**i18nState**：The current state of internationalization



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
import './i18n'
import App from './App.svelte'

new App({
  target: document.getElementById('app'),
})
```

## Implementation based on  `Context` 
Mainly composed of  `2`  part
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

> To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br/>> <br /><br/>> The  `i18n-pro`  related link in the current document is based on the  `3.0.0-alpha.2`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage<br/>
* Current Library
   * Quick Start
      * [Implementation based on  `Store` ](https://github.com/i18n-pro/svelte/blob/v2.0.0-alpha.0/docs/dist/USAGE_STORE.md)
      * [Implementation based on  `Context` ](https://github.com/i18n-pro/svelte/blob/v2.0.0-alpha.0/docs/dist/USAGE_CONTEXT.md)
   * API
      * [Implementation based on  `Store` ](https://github.com/i18n-pro/svelte/blob/v2.0.0-alpha.0/docs/dist/API_STORE.md)
      * [Implementation based on  `Context` ](https://github.com/i18n-pro/svelte/blob/v2.0.0-alpha.0/docs/dist/API_CONTEXT.md)
   * [Changelog](https://github.com/i18n-pro/svelte/blob/v2.0.0-alpha.0/docs/dist/CHANGELOG.md)
* i18n-pro
   * [Command Line](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/COMMAND_LINE.md)
   * [Matching Rules](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/MATCH_RULE.md)
   * [Q&A](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/Q&A.md)
   * [Translation Log](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/OUTPUT_LOG.md)


# License
[MIT](./LICENSE)

Copyright (c) 2023-present Eyelly Wu