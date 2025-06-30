<svelte:options accessors={true} />

<script>
  import { I18nProvider } from '../../src/context'
  import App from './App.svelte'

  let app

  export {app}
</script>

<I18nProvider
 namespace="test"
 langs={{
    en: {
      你好世界: 'Hello World',
      'custom-key': 'Hello World',
    },
 }}
>
  <App bind:this={app}/>
</I18nProvider>
