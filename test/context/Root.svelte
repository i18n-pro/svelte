<script>
  import { I18nProvider } from '../src/context'
  import App from './App.svelte'
</script>

<I18nProvider
 namespace="test"
 langs={{
    en: {
      你好世界: 'Hello World',
    },
 }}
>
  <App/>
</I18nProvider>
