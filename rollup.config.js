import ts from 'rollup-plugin-typescript2'
import prettier from 'rollup-plugin-prettier'
import terser from '@rollup/plugin-terser'
import copy from 'rollup-plugin-copy'
import { version, name } from './package.json'

const formats = ['esm.min']

const copyright =
  'MIT@Copyright (c) 2023-present Eyelly Wu <https://github.com/eyelly-wu>'

const banner = `/*
* ${name}
* v${version}
* ${new Date().toLocaleString()}
* ${copyright}
*/`

const minBanner = `// ${name} v${version} ${new Date().toLocaleString()} ${copyright}`

export default formats.map((format, index) => {
  const isLast = index === formats.length - 1
  let pluginsExtra = []

  const suffix = format.split('.')[1]

  if (format.includes('.')) {
    pluginsExtra.push(
      terser({
        format: {
          comments: /@i18n-pro\/svelte/,
        },
      }),
    )
  }

  return {
    input: 'src/index.ts',
    output: {
      file: `dist/src/index${suffix ? '.' + suffix : ''}.js`,
      format: format.includes('.') ? format.split('.')[0] : format,
      banner: suffix ? minBanner : banner,
      name: 'svelteI18nPro',
    },
    plugins: [
      ts({
        useTsconfigDeclarationDir: isLast,
        tsconfigOverride: {
          compilerOptions: {
            removeComments: false,
            declaration: isLast,
            declarationDir: 'dist',
            module: 'esnext',
            target: 'es5',
            resolveJsonModule: true,
          },
          include: ['./src/index.ts'],
          exclude: ['./src/context', 'test'],
        },
      }),
      prettier(),
      ...pluginsExtra,
      copy({
        targets: [{ src: './src/context/**', dest: './dist/src/context/' }],
      }),
    ],
  }
})
