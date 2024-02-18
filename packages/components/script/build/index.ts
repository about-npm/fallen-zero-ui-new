/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 15:40:37
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 16:56:51
 * @FilePath     : /fallen-zero-ui/packages/components/script/build/index.ts
 * @FileName     :
 */
import { dest, parallel, series, src } from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import delPath from '../utils/delpath';
import { componentPath, pkgPath } from '../utils/paths';
import run from '../utils/run';

const sass = gulpSass(dartSass);

/** 删除dist */
export const removeDist = async () => {
  return delPath(`${pkgPath}/fallen-zero-ui`);
};

/** 打包样式 */
export const buildStyle = () => {
  return (
    src(`${componentPath}/src/**/style/**.scss`)
      .pipe(sass())
      // .pipe(autoprefixer())
      .pipe(dest(`${pkgPath}/fallen-zero-ui/lib/src`))
      .pipe(dest(`${pkgPath}/fallen-zero-ui/es/src`))
  );
};

// /** 打包组件 */
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
