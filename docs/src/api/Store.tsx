import { H1, render, TableOfContents, List } from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import SpecialStatement from '../components/SpecialStatement'
import { Package } from '../types'
import {
  getCompositionAPI,
  getCreateI18nDesc,
  getI18nProDocHref,
  getOptionsAPI,
  getI18nStateDesc,
  initI18n,
  getTDesc,
  getSetI18nDesc,
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

function CreateI18n(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <FunctionTemplate
        name="createI18n"
        description={getCreateI18nDesc()}
        type={`(
  props: ${getTitleToA(i18nProPkg, 'I18nState')},
) => void`}
        propsDesc={
          <>
            {t(
              '参数与{0}参数一致',
              ` ${render(
                <a href={getI18nProDocHref(i18nProPkg, 'API', 'initI18n')}>
                  initI18n
                </a>,
              )} `,
            )}
          </>
        }
      />
    </>
  )
}

function T(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <FunctionTemplate
        name="t"
        description={
          <>
            {getTDesc()}，
            {t(
              '与{0}用法一致',
              ` ${render(
                <a href={getI18nProDocHref(i18nProPkg, 'API', 't')}>t</a>,
              )} `,
            )}
            <br />
            {t(
              '注意：由于{0}是一个响应式的状态，在标签中使用时需要{1}这样来使用',
              ' `t` ',
              ' `$t` ',
            )}
          </>
        }
      />
    </>
  )
}

function I18nState(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <FunctionTemplate
        name="i18nState"
        description={
          <>
            {getI18nStateDesc()}，
            {t(
              '类型为{0}',
              ` ${render(
                <a href={getI18nProDocHref(i18nProPkg, 'API', 'I18nState')}>
                  I18nState
                </a>,
              )} `,
            )}
            <br />
            {t(
              '注意：由于{0}是一个响应式的状态，在标签中使用时需要{1}这样来使用',
              ' `i18nState` ',
              ' `$i18nState` ',
            )}
          </>
        }
      />
    </>
  )
}

function SetI18n(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <FunctionTemplate
        name="setI18n"
        description={
          <>
            {getSetI18nDesc()}，
            {t(
              '与{0}用法一致',
              ` ${render(
                <a href={getI18nProDocHref(i18nProPkg, 'API', 'setI18n')}>
                  setI18n
                </a>,
              )} `,
            )}
          </>
        }
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
          <CreateI18n i18nProPkg={i18nProPkg} />
          <T i18nProPkg={i18nProPkg} />
          <I18nState i18nProPkg={i18nProPkg} />
          <SetI18n i18nProPkg={i18nProPkg} />
        </>
      )}
    </I18nProWrapper>
  )
}
