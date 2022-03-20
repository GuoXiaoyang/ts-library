/*
 * @Author: guoxiaoyang <xiaoyang@moego.pet>
 * @Date: 2022-03-20 20:35:44
 * @LastEditTime: 2022-03-20 21:55:06
 * @LastEditors: guoxiaoyang
 * @FilePath: /ts-library/src/curry/curry.test.ts
 */

import { curryWithoutHoles, curryWithoutHoles2 } from "./curry";

const testFunc: (...args: number[]) => number[] = (a, b, c, d, e) => {
  return [a, b, c, d, e];
};

describe("Curry without hole", () => {
  test("should work correctly when called once", () => {
    const curriedFunc = curryWithoutHoles(testFunc);
    expect(curriedFunc(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should work correctly when called twice', () => {
    const curriedFunc = curryWithoutHoles(testFunc);
    expect(curriedFunc(1, 2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  })
  test('should work correctly when initial with one and called twice', () => {
    const curriedFunc = curryWithoutHoles(testFunc, 1);
    expect(curriedFunc(2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  })
});

describe("Curry without hole version2", () => {
  test("should work correctly when called once", () => {
    const curriedFunc = curryWithoutHoles2(testFunc);
    expect(curriedFunc(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should work correctly when called twice', () => {
    const curriedFunc = curryWithoutHoles2(testFunc);
    expect(curriedFunc(1, 2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  })
});
