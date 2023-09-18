import { render, fireEvent } from '@testing-library/svelte'
import '@testing-library/jest-dom'
import Component from './App.svelte'
import { createI18n } from '../../src/index'

it('without createI18n', async () => {

  const spyError = vi.spyOn(console, 'error')

  render(Component)

  expect(spyError).toHaveBeenCalledTimes(1)
  expect(spyError).toHaveBeenLastCalledWith(
    'createI18n should be called before App render',
  )
})

it('full test', async () => {
  createI18n({
    namespace: 'test',
    langs: {
      en: {
        你好世界: 'Hello World',
      },
    },
  })
  const { container } = render(Component)

  const textWrapper = container.querySelector('#text') as HTMLDivElement

  const zhBtn = container.querySelector('#zhBtn') as Element
  const enBtn = container.querySelector('#enBtn') as Element
  const unknownBtn = container.querySelector('#unknownBtn') as Element
  const jpBtn = container.querySelector('#jpBtn') as Element
  const localeDiv = container.querySelector('#locale') as Element

  expect(textWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('undefined')

  await fireEvent.click(enBtn)
  expect(textWrapper).toHaveTextContent('Hello World')
  expect(localeDiv).toHaveTextContent('en')

  await fireEvent.click(zhBtn)
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('zh')

  await fireEvent.click(enBtn)
  expect(textWrapper).toHaveTextContent('Hello World')
  expect(localeDiv).toHaveTextContent('en')

  await fireEvent.click(unknownBtn)
  expect(textWrapper).toHaveTextContent('你好世界')
  expect(localeDiv).toHaveTextContent('undefined')

  await fireEvent.click(jpBtn)
  expect(textWrapper).toHaveTextContent('こんにちは、世界')
  expect(localeDiv).toHaveTextContent('jp')
})
