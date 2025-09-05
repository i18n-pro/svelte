
# 快速上手

> 为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br/>
> 当前文档中 `i18n-pro` 相关链接是基于 `3.0.0-alpha.3` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致<br/>
<details >
  <summary>目录</summary>

  &emsp;&emsp;[1. 安装](#1-安装)<br/>
  &emsp;&emsp;[2. 接入 API](#2-接入-api)<br/>
  &emsp;&emsp;&emsp;&emsp;[初始化状态](#初始化状态)<br/>
  &emsp;&emsp;&emsp;&emsp;[用 `$t` 包裹文案](#用-t-包裹文案)<br/>
  &emsp;&emsp;[3. 初始化命令行配置文件](#3-初始化命令行配置文件)<br/>
  &emsp;&emsp;[4. 调整 `i18nrc.ts` 配置](#4-调整-i18nrcts-配置)<br/>
  &emsp;&emsp;[5. 执行翻译命令](#5-执行翻译命令)<br/>
  &emsp;&emsp;[6. 引入语言包](#6-引入语言包)<br/>
  &emsp;&emsp;[7. 切换语言](#7-切换语言)<br/>
  &emsp;&emsp;[8. Demo](#8-demo)<br/>

</details>

## 1. 安装

```bash
npm i @i18n-pro/svelte
# 或者
yarn add @i18n-pro/svelte
# 或者
# 注意：为了避免幽灵依赖导致 i18n 命令不能使用的问题，使用 pnpm 必须要安装 i18n-pro
pnpm i i18n-pro @i18n-pro/svelte
```

## 2. 接入 API

### 初始化状态

```js
// i18n.ts
import { createI18n } from '@i18n-pro/svelte'

createI18n({
  namespace: 'testNamespace',
})
```

### 用 `$t` 包裹文案

```js
// App.svelte
<script>
  import { t } from '@i18n-pro/svelte'
</script>

<div>
  {/** 文案即 key */}
  <div>{$t('hello world')}</div>
  {/** 自定义 key */}
  <div>{$t.t('custom-key', 'hello world')}</div>
</div>


// index.ts
import App from './App.svelte'
import './i18n'

new App({
  target: document.getElementById('app')
})
```


## 3. 初始化命令行配置文件
[请参考](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.3/docs/dist/USAGE_zh-CN.md#3-初始化命令行配置文件)

## 4. 调整 `i18nrc.ts` 配置
[请参考](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.3/docs/dist/USAGE_zh-CN.md#4-调整-i18nrcts-配置)

## 5. 执行翻译命令
[请参考](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.3/docs/dist/USAGE_zh-CN.md#5-执行翻译命令)

## 6. 引入语言包
语言包已经有了，就需要应用到项目中了

> 当前支持 `3` 种引入语言包的方式，本文档只介绍 `静态导入` 的方式，更多方式[请参考](https://github.com/i18n-pro/core/blob/v3.0.0-alpha.3/docs/dist/USAGE_zh-CN.md#6-引入语言包)<br/>

如果生成的语言包是每个语言单独文件形式（`output.langType == 'multiple'`），操作如下：
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
如果生成的语言包是聚合的形式（`output.langType == 'single'`），操作如下：
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
至此，国际化功能已集成完毕。只需将  `locale`  设置为目标语言，即可在页面上展示对应的翻译内容。后续如有新增 `文案` （需用  `$t`  函数包裹），只需重新执行  `npx i18n t`  命令生成最新语言包，即可确保所有新增内容均被翻译

## 7. 切换语言
可以通过 `setI18n` 来切换语言
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
+    <option value="ja">日本語</option>
+  </select>
</div>
```


## 8. Demo
真实代码示例可参考 `README` 文档中的 [Live Demo](https://github.com/i18n-pro/svelte/blob/v2.0.0-alpha.1/README_zh-CN.md#live-demo) 