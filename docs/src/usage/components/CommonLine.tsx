import { H2, Break, Link } from 'jsx-to-md'
import { Package } from '../../types'
import { getI18nProDocHref } from '../../utils'

export type I18nProProps = {
  i18nProPkg: Package
}

function InitConfig(props: I18nProProps) {
  const { i18nProPkg } = props
  const title = `3. ${t('初始化命令行配置文件')}`

  return (
    <>
      <Break />
      <H2>{title}</H2>
      <Link href={getI18nProDocHref(i18nProPkg, 'USAGE', title)}>
        {t('请参考')}
      </Link>
    </>
  )
}

function ModifyConfig(props: I18nProProps) {
  const { i18nProPkg } = props

  const configName = ' `i18nrc.ts` '
  const title = `4. ${t('调整{0}配置', configName)}`

  return (
    <>
      <Break />
      <H2>{title}</H2>
      <Link href={getI18nProDocHref(i18nProPkg, 'USAGE', title)}>
        {t('请参考')}
      </Link>
    </>
  )
}

function ExecuteTranslateCommand(props: I18nProProps) {
  const title = `5. ${t('执行翻译命令')}`

  return (
    <>
      <Break />
      <H2>{title}</H2>
      <Link href={getI18nProDocHref(props.i18nProPkg, 'USAGE', title)}>
        {t('请参考')}
      </Link>
    </>
  )
}

export default function CommandLine(props: I18nProProps) {
  const { i18nProPkg } = props
  return (
    <>
      <InitConfig i18nProPkg={i18nProPkg} />
      <ModifyConfig i18nProPkg={i18nProPkg} />
      <ExecuteTranslateCommand i18nProPkg={i18nProPkg} />
    </>
  )
}
