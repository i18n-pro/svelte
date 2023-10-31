import { H1, render, TableOfContents, List } from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import SpecialStatement from '../components/SpecialStatement'
import { Package } from '../types'
import {
  getCompositionAPI,
  getCreateI18nDesc,
  getI18nProDocHref,
  getI18nProviderDesc,
  getOptionsAPI,
  getI18nStateDesc,
  initI18n,
} from '../utils'
import FunctionTemplate from './FunctionTemplate'

type I18nProProps = {
  i18nProPkg: Package
}

function getTitleToA(i18nProPkg: Package, title: string, showTitle?: string) {
  return render(
    <a href={getI18nProDocHref(i18nProPkg, 'API', title)}>
      {showTitle || title}
    </a>,
  )
}

function I18nProvider(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <FunctionTemplate
        name="I18nProvider"
        description={getI18nProviderDesc()}
        type={`(
  props: ${getTitleToA(i18nProPkg, 'I18nState')} & { children: JSXElement },
) => JSXElement`}
        propsDesc={
          <>
            {t(
              '其他参数与{0}参数一致',
              ` ${render(
                <a href={getI18nProDocHref(i18nProPkg, 'API', 'initI18n')}>
                  initI18n
                </a>,
              )} `,
            )}
          </>
        }
        props={{
          children: t('需要国际化的内容'),
        }}
      />
    </>
  )
}

function UseI18n(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <FunctionTemplate
        name="useI18n"
        description={
          <>
            {getI18nStateDesc()}
            <br />
            {t(
              '注意：由于{0}是一个响应式的状态，使用时需要{1}这样来使用',
              ' `i18nState` ',
              ' `i18nState()` ',
            )}
          </>
        }
        type={`() => ({
  ${getTitleToA(i18nProPkg, 't')},
  ${getTitleToA(i18nProPkg, 'setI18n')},
  ${getTitleToA(i18nProPkg, 'i18nState')},
})`}
      />
    </>
  )
}

export default function API(props) {
  initI18n(props)

  return (
    <I18nProWrapper>
      {(i18nProPkg) => (
        <>
          <H1 skip>{t('API')}</H1>
          <SpecialStatement i18nProPkg={i18nProPkg} />
          <TableOfContents text={t('目录')} open={false} />
          <I18nProvider i18nProPkg={i18nProPkg} />
          <UseI18n i18nProPkg={i18nProPkg} />
        </>
      )}
    </I18nProWrapper>
  )
}
