import { render } from '@testing-library/svelte'
import '@testing-library/jest-dom'
import Component from './Root.svelte'

it('full test', async () => {
  const { container, component } = render(Component, {})

  const textWrapper = container.querySelector('#text') as HTMLDivElement
  const customKeyTextWrapper = container.querySelector(
    '#customKeyText',
  ) as HTMLDivElement
  const localeDiv = container.querySelector('#locale') as Element

  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('undefined')

  await component.app.setI18n({ locale: 'en' })
  expect(textWrapper).toHaveTextContent('Hello World')
  expect(customKeyTextWrapper).toHaveTextContent('Hello World')
  expect(localeDiv).toHaveTextContent('en')

  await component.app.setI18n({ locale: 'zh' })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('zh')

  await component.app.setI18n({ locale: 'en' })
  expect(textWrapper).toHaveTextContent('Hello World')
  expect(customKeyTextWrapper).toHaveTextContent('Hello World')
  expect(localeDiv).toHaveTextContent('en')

  await component.app.setI18n({ locale: 'unknown' })
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(customKeyTextWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('unknown')

  await component.app.setI18n({
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
