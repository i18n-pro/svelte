import { H1, render, TableOfContents, Break, CodeBlock } from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import SpecialStatement from '../components/SpecialStatement'
import { Package } from '../types'
import {
  getI18nProDocHref,
  getI18nProviderDesc,
  initI18n,
  getUseI18nDesc,
  contextPackageNameWithAt,
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
            {getUseI18nDesc()}
            <br />
            {t(
              '注意：由于{0}和{1}是响应式的状态，在标签中使用时需要{2}这样来使用',
              ' `i18nState` ',
              ' `t` ',
              ` \`$i18nState\` ${t('和')} \`$t\` `,
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
          <Break />
          {t(
            '以下API需要通过命名路径{0}来引入',
            ` \`${contextPackageNameWithAt}\` `,
          )}
          <Break />
          <CodeBlock
            code={`import { I18nProvider, useI18n } from '${contextPackageNameWithAt}'`}
          />
          <Break />
          <I18nProvider i18nProPkg={i18nProPkg} />
          <UseI18n i18nProPkg={i18nProPkg} />
        </>
      )}
    </I18nProWrapper>
  )
}
