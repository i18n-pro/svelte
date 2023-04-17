import { render, fireEvent } from '@testing-library/svelte'
import '@testing-library/jest-dom'
import Component from './Root.svelte'

it('full test', async () => {
  const { container } = render(Component)

  const textWrapper = container.querySelector('#text') as HTMLDivElement

  const zhBtn = container.querySelector('#zhBtn') as Element
  const enBtn = container.querySelector('#enBtn') as Element
  const unknownBtn = container.querySelector('#unknownBtn') as Element
  const jpBtn = container.querySelector('#jpBtn') as Element

  expect(textWrapper).toHaveTextContent('你好世界')

  await fireEvent.click(enBtn)
  expect(textWrapper).toHaveTextContent('Hello World')

  await fireEvent.click(zhBtn)
  expect(textWrapper).toHaveTextContent('你好世界')

  await fireEvent.click(enBtn)
  expect(textWrapper).toHaveTextContent('Hello World')

  await fireEvent.click(unknownBtn)
  expect(textWrapper).toHaveTextContent('你好世界')

  await fireEvent.click(jpBtn)
  expect(textWrapper).toHaveTextContent('こんにちは、世界')
})
