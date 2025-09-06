
# API

> To avoid unnecessary duplicate document content, some of the documents in this library are linked to the content in  `i18n-pro` <br/>
> The  `i18n-pro`  related link in the current document is based on the  `3.0.0`  version. If you are using a different version, you need to check the document corresponding to the version you are using to avoid inconsistent usage<br/>
<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[createI18n](#createi18n)<br/>
  &emsp;&emsp;&emsp;&emsp;[Type](#createi18n-type)<br/>
  &emsp;&emsp;&emsp;&emsp;[Parameter Description](#createi18n-parameter-description)<br/>
  &emsp;&emsp;[t](#t)<br/>
  &emsp;&emsp;[i18nState](#i18nstate)<br/>
  &emsp;&emsp;[setI18n](#seti18n)<br/>

</details>

## createI18n
Initialize internationalization
<h3 id="createi18n-type">Type</h3>
<pre>
(
  props: <a href="https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/API.md#i18nstate">I18nState</a>,
) => void
</pre>

<h3 id="createi18n-parameter-description">Parameter Description</h3>
The parameters are consistent with the  <a href="https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/API.md#initi18n">initI18n</a>  parameter

## t
Get internationalization text，consistent with  <a href="https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/API.md#t">t</a> <br />Note: Since  `t`  is a reactive state, you need to use it like  `$t`  when using it in tags


## i18nState
The current state of internationalization，the type is  <a href="https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/API.md#i18nstate">I18nState</a> <br />Note: Since  `i18nState`  is a reactive state, you need to use it like  `$i18nState`  when using it in tags


## setI18n
Set language or language package，consistent with  <a href="https://github.com/i18n-pro/core/blob/v3.0.0/docs/dist/API.md#seti18n">setI18n</a> 

