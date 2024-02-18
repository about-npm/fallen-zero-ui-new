/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 15:27:18
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 15:40:20
 * @FilePath     : /fallen-zero-ui/packages/components/script/utils/delpath.ts
 * @FileName     :
 */
import fs from 'fs';
import { resolve } from 'path';
import { pkgPath } from './paths';

// 保留的文件
const stayFile = ['package.json', 'README.md'];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        if (file !== 'node_modules') await delPath(curPath);
      } else {
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path !== `${pkgPath}/fallen-zero-ui`) fs.rmdirSync(path);
  }
};

export default delPath;
