
# API

>To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br />The  `i18n-pro`  related link in the current document is based on the  `2.1.0`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[I18nProvider](#i18nprovider)<br/>
  &emsp;&emsp;&emsp;&emsp;[Type](#i18nprovider-type)<br/>
  &emsp;&emsp;&emsp;&emsp;[Parameter Description](#i18nprovider-parameter-description)<br/>
  &emsp;&emsp;[useI18n](#usei18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[Type](#usei18n-type)<br/>

</details>

## I18nProvider
Configure container components for internationalization initialization properties
<h3 id="i18nprovider-type">Type</h3>
<pre>
(
  props: <a href="https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/API.md#i18nstate">I18nState</a> & { children: JSXElement },
) => JSXElement
</pre>

<h3 id="i18nprovider-parameter-description">Parameter Description</h3>
The other parameters are consistent with the  <a href="https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/API.md#initi18n">initI18n</a>  parameters<table>
  <tr>
    <th>Parameter name</th>
    <th>Description</th>
  </tr>
  <tr>
    <tr>
      <td>children</td>
      <td>Content that requires internationalization</td>
    </tr>
  </tr>
</table>

## useI18n
当前国际化的状态<br />Note: Since  `i18nState`  is a reactive state, it needs to be accessed as  `i18nState()`  when used
<h3 id="usei18n-type">Type</h3>
<pre>
() => ({
  <a href="https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/API.md#t">t</a>,
  <a href="https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/API.md#seti18n">setI18n</a>,
  <a href="https://github.com/i18n-pro/core/blob/v2.1.0/docs/dist/API.md#i18nstate">i18nState</a>,
})
</pre>

