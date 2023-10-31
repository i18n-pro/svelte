import { H1, TableOfContents } from 'jsx-to-md'
import { initI18n, renderLanguage } from '../utils'
import Template from './ChangeLog'

function V_1_0_0() {
  return (
    <Template
      version="1.0.0"
      date="2023-09-16"
      api={{
        added: [
          'U',
          t('新增{0}和{1}基础实现', ' `I18nProvider` ', ' `useI18n` '),
        ],
      }}
    />
  )
}

function V_1_0_1() {
  return (
    <Template
      version="1.0.1"
      date="2023-10-27"
      commandLine={{
        fixed: [
          'U',
          t(
            '修复在{0}中未配置{1}属性会导致{2}编译报错',
            ' `package.json` ',
            ' `type` ',
            ' `Vite` ',
          ),
        ],
      }}
    />
  )
}

export default function ChangeLog(props) {
  initI18n(props)

  return (
    <>
      <H1 skip>{t('更新日志')}</H1>
      {renderLanguage('CHANGELOG')}
      <TableOfContents text={t('目录')} open={false} />
      <V_1_0_1 />
      <V_1_0_0 />
    </>
  )
}
