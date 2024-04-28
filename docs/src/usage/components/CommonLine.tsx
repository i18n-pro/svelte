import { H2, Break, Link } from 'jsx-to-md'
import { Package } from '../../types'
import { getI18nProDocHref } from '../../utils'

type I18nProProps = {
  i18nProPkg: Package
}

function InitConfig(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <Break />
      <H2>{`3. ${t('初始化命令行配置文件')}`}</H2>
      <Link
        href={getI18nProDocHref(
          i18nProPkg,
          'USAGE',
          `3. ${t('初始化命令行配置文件')}`,
        )}
      >
        {t('请参考')}
      </Link>
    </>
  )
}

function ModifyConfig(props: I18nProProps) {
  const { i18nProPkg } = props

  return (
    <>
      <Break />
      <H2>{`4. ${t('调整{0}配置', ' `i18nrc.js` ')}`}</H2>
      <Link
        href={getI18nProDocHref(
          i18nProPkg,
          'USAGE',
          `4. ${t('调整{0}配置', ' `i18nrc.js` ')}`,
        )}
      >
        {t('请参考')}
      </Link>
    </>
  )
}

function ExecuteTranslateCommand(props: I18nProProps) {
  return (
    <>
      <Break />
      <H2>{`5. ${t('执行翻译命令')}`}</H2>
      <Link
        href={getI18nProDocHref(
          props.i18nProPkg,
          'USAGE',
          `5. ${t('执行翻译命令')}`,
        )}
      >
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
