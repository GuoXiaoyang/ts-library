/*
 * @Author: guoxiaoyang <xiaoyang@moego.pet>
 * @Date: 2022-03-20 20:35:44
 * @LastEditTime: 2022-03-21 23:15:36
 * @LastEditors: guoxiaoyang
 * @FilePath: /ts-library/src/curry/curry.test.ts
 */

import { curryWithHoles, curryWithoutHoles, curryWithoutHoles2 } from "./curry";

const testFunc: (...args: number[]) => number[] = (a, b, c, d, e) => {
  return [a, b, c, d, e];
};

describe("Curry without hole", () => {
  test("should work correctly when called once", () => {
    const curriedFunc = curryWithoutHoles(testFunc);
    expect(curriedFunc(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test("should work correctly when called twice", () => {
    const curriedFunc = curryWithoutHoles(testFunc);
    expect(curriedFunc(1, 2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });
  test("should work correctly when initial with one and called twice", () => {
    const curriedFunc = curryWithoutHoles(testFunc, 1);
    expect(curriedFunc(2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Curry without hole version2", () => {
  test("should work correctly when called once", () => {
    const curriedFunc = curryWithoutHoles2(testFunc);
    expect(curriedFunc(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test("should work correctly when called twice", () => {
    const curriedFunc = curryWithoutHoles2(testFunc);
    expect(curriedFunc(1, 2)(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});


describe("Curry with hole version", () => {
  test('should work correctly when called once', () => {
    const curriedFunc = curryWithHoles(testFunc);
    expect(curriedFunc(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  })
  // test('should work correctly when called with one hole', () => {
  //   const curriedFunc = curryWithHoles(testFunc);
  //   expect(curriedFunc('_', 2, 3, 4, 5)(1)).toEqual([1, 2, 3, 4, 5]);
  // })

  // test("should work correctly when called with one hole at index 2", () => {
  //   const curriedFunc = curryWithHoles(testFunc);
  //   expect(curriedFunc(1, "_", 3, 4, 5)(2)).toEqual([1, 2, 3, 4, 5]);
  // });

  // test("should work correctly when called twice with two holes", () => {
  //   const curriedFunc = curryWithHoles(testFunc);
  //   expect(curriedFunc(1, "_", 3)("_", 4)(2)(5)).toEqual([1, 2, 3, 4, 5]);
  // });

  // test("should work correctly when called 3 times", () => {
  //   const curriedFunc = curryWithHoles(testFunc);
  //   expect(curriedFunc(1, "_", "_", 4)("_", 3)(2)(5)).toEqual([1, 2, 3, 4, 5]);
  // });

  // test("should work correctly when called 4 times", () => {
  //   const curriedFunc = curryWithHoles(testFunc);
  //   expect(curriedFunc("_", 2)("_", "_", 4)(1)(3)(5)).toEqual([1, 2, 3, 4, 5]);
  // });
});
