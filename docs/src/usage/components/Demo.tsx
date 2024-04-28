import { H2, Break, Link, render } from 'jsx-to-md'
import { getDocHref } from '../../utils'

export default function Demo() {
  return (
    <>
      <Break />
      <H2>8. Demo</H2>
      {t(
        '真实代码示例可参考{0}文档中的{1}',
        ' `README` ',
        ` ${render(
          <Link href={getDocHref('README', 'Live Demo')}>Live Demo</Link>,
        )} `,
      )}
    </>
  )
}
