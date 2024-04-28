import { H2, CodeBlock } from 'jsx-to-md'
import { packageNameWithAt } from '../../utils'

export default function Install() {
  return (
    <>
      <H2>{`1. ${t('安装')}`}</H2>
      <CodeBlock
        langType="bash"
        code={`npm i ${packageNameWithAt}
# ${t('或者')}
yarn add ${packageNameWithAt}
# ${t('或者')}
# ${t(
          '注意：为了避免幽灵依赖导致 i18n 命令不能使用的问题，使用 pnpm 必须要安装 i18n-pro',
        )}
pnpm i i18n-pro ${packageNameWithAt}`}
      />
    </>
  )
}
