import { H1, TableOfContents } from 'jsx-to-md'
import { initI18n, renderLanguage } from '../utils'
import Template from './ChangeLog'

function V_1_0_0() {
  return (
    <Template
      version="1.0.0"
      date="2024-04-29"
      api={{
        added: [
          'U',
          t('新增分别基于{0}和{1}两种特性的实现', ' `Store` ', ' `Context` '),
        ],
      }}
    />
  )
}

function V_1_0_1() {
  return (
    <Template
      version="1.0.1"
      date="2025-06-23"
      api={{
        changed: ['U', t('限制{0}的版本', ' `i18n-pro` ')],
      }}
    />
  )
}

function V_2_0_0() {
  return (
    <Template
      version="2.0.0"
      date="2025-09-06"
      api={{
        changed: ['U', t('适配{0}', ' `i18n-pro@3` ')],
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
      <V_2_0_0 />
      <V_1_0_1 />
      <V_1_0_0 />
    </>
  )
}
