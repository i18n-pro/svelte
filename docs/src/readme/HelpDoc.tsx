import { H1, List, Link } from 'jsx-to-md'
import I18nProWrapper from '../components/I18nProWrapper'
import { getDocHref, getI18nPro, getI18nProDocHref } from '../utils'
import SpecialStatement from '../components/SpecialStatement'

export default function DocLink() {
  return (
    <I18nProWrapper>
      {(i18nProPkg) => (
        <>
          <H1>{t('帮助文档')}</H1>
          <SpecialStatement i18nProPkg={i18nProPkg} />
          <List
            items={[
              'U',
              [
                t('当前库'),
                [
                  'U',
                  [
                    t('快速上手'),
                    [
                      'U',
                      <Link href={getDocHref('USAGE_STORE')}>
                        {t('基于{0}实现', ' `Store` ')}
                      </Link>,
                      <Link href={getDocHref('USAGE_CONTEXT')}>
                        {t('基于{0}实现', ' `Context` ')}
                      </Link>,
                    ],
                  ],
                  [
                    'API',
                    [
                      'U',
                      <Link href={getDocHref('API_STORE')}>
                        {t('基于{0}实现', ' `Store` ')}
                      </Link>,
                      <Link href={getDocHref('API_CONTEXT')}>
                        {t('基于{0}实现', ' `Context` ')}
                      </Link>,
                    ],
                  ],
                  <Link href={getDocHref('CHANGELOG')}>{t('更新日志')}</Link>,
                ],
              ],
              [
                getI18nPro('text'),
                [
                  'U',
                  <Link href={getI18nProDocHref(i18nProPkg, 'COMMAND_LINE')}>
                    {t('命令行')}
                  </Link>,
                  <Link href={getI18nProDocHref(i18nProPkg, 'MATCH_RULE')}>
                    {t('匹配规则')}
                  </Link>,
                  <Link href={getI18nProDocHref(i18nProPkg, 'Q&A')}>Q&A</Link>,
                  <Link href={getI18nProDocHref(i18nProPkg, 'OUTPUT_LOG')}>
                    {t('翻译日志')}
                  </Link>,
                ],
              ],
            ]}
          />
        </>
      )}
    </I18nProWrapper>
  )
}
