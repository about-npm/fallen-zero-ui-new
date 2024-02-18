/*
 * @Author       : fallen_zero
 * @Date         : 2024-02-18 15:53:10
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-02-18 16:36:40
 * @FilePath     : /fallen-zero-ui/packages/components/script/utils/run.ts
 * @FileName     :
 */
import { spawn } from 'child_process';

export default async (command: string, path: string) => {
  // cmd 表示命令, args 代表参数, 如 rm -rf rm就是命令, -rf就为参数
  const [cmd, ...args] = command.split(' ');
  return new Promise<void>((resolve) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径
      stdio: 'inherit', // 输出共享给父级进程
      shell: true, // mac不需要开启, windows下git base需要开启支持
    });

    // 执行完毕关闭并 resolve
    app.on('close', resolve);
  });
};
