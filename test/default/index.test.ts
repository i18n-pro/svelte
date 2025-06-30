import { render } from '@testing-library/svelte'
import '@testing-library/jest-dom'
import Component from './App.svelte'
import { createI18n, setI18n } from '../../src/index'

it('without createI18n', async () => {
  const spyError = vi.spyOn(console, 'error')

  const { container } = render(Component)

  expect(spyError).toHaveBeenCalledTimes(1)
  expect(spyError).toHaveBeenLastCalledWith(
    'createI18n should be called before App render',
  )

  const textWrapper = container.querySelector('#text') as HTMLDivElement
  const customKeyTextWrapper = container.querySelector(
    '#customKeyText',
  ) as HTMLDivElement

  const localeDiv = container.querySelector('#locale') as Element

  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('undefined')

  await setI18n({ locale: 'en' })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('en')

  await setI18n({ locale: 'zh' })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('zh')

  await setI18n({ locale: 'en' })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('en')

  await setI18n({ locale: 'unknown' })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('unknown')

  await setI18n({
    locale: 'jp',
    langs: {
      jp: {
        你好世界: 'こんにちは、世界',
      },
    },
  })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('jp')
})

it('full test', async () => {
  createI18n({
    namespace: 'test',
    langs: {
      en: {
        你好世界: 'Hello World',
        'custom-key': 'Hello World',
      },
    },
  })
  const { container } = render(Component)

  const textWrapper = container.querySelector('#text') as HTMLDivElement
  const customKeyTextWrapper = container.querySelector(
    '#customKeyText',
  ) as HTMLDivElement

  const localeDiv = container.querySelector('#locale') as Element

  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('undefined')

  await setI18n({ locale: 'en' })
  expect(textWrapper).toHaveTextContent('Hello World')
  expect(customKeyTextWrapper).toHaveTextContent('Hello World')
  expect(localeDiv).toHaveTextContent('en')

  await setI18n({ locale: 'zh' })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('zh')

  await setI18n({ locale: 'en' })
  expect(textWrapper).toHaveTextContent('Hello World')
  expect(customKeyTextWrapper).toHaveTextContent('Hello World')
  expect(localeDiv).toHaveTextContent('en')

  await setI18n({ locale: 'unknown' })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('unknown')

  await setI18n({
    locale: 'jp',
    langs: {
      jp: {
        你好世界: 'こんにちは、世界',
        'custom-key': 'こんにちは、世界',
      },
    },
  })
  expect(textWrapper).toHaveTextContent('こんにちは、世界')
  expect(customKeyTextWrapper).toHaveTextContent('こんにちは、世界')
  expect(localeDiv).toHaveTextContent('jp')
})
