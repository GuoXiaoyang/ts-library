/*
 * @Author: guoxiaoyang <xiaoyang@moego.pet>
 * @Date: 2022-03-17 20:29:29
 * @LastEditTime: 2022-04-24 11:08:31
 * @LastEditors: guoxiaoyang
 * @FilePath: /ts-library/src/curry/curry.ts
 */

/**
 * @reference [document](https://github.com/mqyqingfeng/Blog/issues/42)
 * @param func
 * @returns
 */
export function curryWithoutHoles(
  func: Function,
  ...argsHaveBeenCalled: any[]
): Function {
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

const PlaceHolder = "_";
/**
 *
 * @param fn function need to be curried
 * @param argsHaveBeenCalled all params have been called, holes included
 * FIXME: haven't passed the test cases till now
 * @returns
 */
export function curryWithHoles<T>(
  fn: Function,
  ...argsHaveBeenCalled: Array<T | typeof PlaceHolder>
) {
  return function (...args: Array<T | typeof PlaceHolder>) {
    const allArgs: Array<T | typeof PlaceHolder> = [...argsHaveBeenCalled];
    let placeHolderLenInCalled = argsHaveBeenCalled.reduce(
      (sum, arg) => (arg === PlaceHolder ? (sum += 1) : sum),
      0
    );
    let placeHolderLen = 0;
    for (const arg of args) {
      if (arg === PlaceHolder) {
        placeHolderLen += 1;
        if (placeHolderLen > placeHolderLenInCalled) {
          allArgs.push(PlaceHolder);
        } else {
          
        }
      } else {
        if (argsHaveBeenCalled.includes(PlaceHolder)) {
          const placeHolderIndex = argsHaveBeenCalled.indexOf(PlaceHolder);
          allArgs.splice(placeHolderIndex, 1, arg);
          argsHaveBeenCalled.splice(placeHolderIndex, 1);
          if (placeHolderLenInCalled) {
            placeHolderLenInCalled -= 1;
          }
        } else {
          allArgs.push(arg);
        }
      }
    }
    if (allArgs.length >= fn.length && !allArgs.includes(PlaceHolder)) {
      return fn.call(this, ...allArgs);
    }
    return curryWithHoles.call(this, fn, ...allArgs);
  };
}
