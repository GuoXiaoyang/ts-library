/*
 * @Author: guoxiaoyang <xiaoyang@moego.pet>
 * @Date: 2022-03-17 20:29:29
 * @LastEditTime: 2022-03-20 21:54:40
 * @LastEditors: guoxiaoyang
 * @FilePath: /ts-library/src/curry/curry.ts
 */

/**
 * @reference [document](https://github.com/mqyqingfeng/Blog/issues/42)
 * @param func
 * @returns
 */
export function curryWithoutHoles(func: Function, ...argsHaveBeenCalled: any[]): Function {
  return function (...args: any[]) {
    const allArgs = argsHaveBeenCalled.concat(...args);
    if (allArgs.length >= func.length) {
      return func.apply(this, allArgs);
    }
    return curryWithoutHoles.call(this, func, ...allArgs);
  };
}

/**
 * version2
 */
export const curryWithoutHoles2 = <T>(fn: Function) => {
  return function func(...args: T[]) {
    return args.length >= fn.length
      ? fn(...args)
      : (...arg: T[]) => func(...args, ...arg);
  };
};


export function curryWithHoles<T>(fn:Function, ...argsHaveBeenCalled: T[]){
  return function (...args: Array<T | '_'>) {
    
  }
}