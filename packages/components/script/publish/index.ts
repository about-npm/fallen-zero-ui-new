/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-19 08:33:20
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-19 08:36:40
 * @FilePath     : /fallen-zero-ui/packages/components/script/publish/index.ts
 * @FileName     :
 */
import { series } from 'gulp';
import { pkgPath } from '../utils/paths';
import run from '../utils/run';

export const publishComponent = async () => {
  run('release-it', `${pkgPath}/fallen-zero-ui`);
};

export default series(async () => publishComponent());
