
# API

> 为了避免不必要的重复文档内容，该库的部分文档是链接 `i18n-pro` 中的内容<br/>
> 当前文档中 `i18n-pro` 相关链接是基于 `3.0.0-alpha.2` 版本，如果你使用的非该版本，需查看你所使用版本对应的文档，以免用法不一致<br/>
<details >
  <summary>目录</summary>

  &emsp;&emsp;[createI18n](#createi18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[类型](#createi18n-类型)<br/>
  &emsp;&emsp;&emsp;&emsp;[参数说明](#createi18n-参数说明)<br/>
  &emsp;&emsp;[t](#t)<br/>
  &emsp;&emsp;[i18nState](#i18nstate)<br/>
  &emsp;&emsp;[setI18n](#seti18n)<br/>

</details>

## createI18n
初始化国际化状态
<h3 id="createi18n-类型">类型</h3>
<pre>
(
  props: <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/API_zh-CN.md#i18nstate">I18nState</a>,
) => void
</pre>

<h3 id="createi18n-参数说明">参数说明</h3>
参数与 <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/API_zh-CN.md#initi18n">initI18n</a> 参数一致

## t
获取国际化文案，与 <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/API_zh-CN.md#t">t</a> 用法一致<br />注意：由于 `t` 是一个响应式的状态，在标签中使用时需要 `$t` 这样来使用


## i18nState
当前国际化的状态，类型为 <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/API_zh-CN.md#i18nstate">I18nState</a> <br />注意：由于 `i18nState` 是一个响应式的状态，在标签中使用时需要 `$i18nState` 这样来使用


## setI18n
设置语言或语言包，与 <a href="https://github.com/i18n-pro/core/blob/v3.0.0-alpha.2/docs/dist/API_zh-CN.md#seti18n">setI18n</a> 用法一致

