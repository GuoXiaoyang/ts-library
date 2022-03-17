/*
 * @Author: guoxiaoyang <xiaoyang@moego.pet>
 * @Date: 2022-03-17 20:03:10
 * @LastEditTime: 2022-03-17 20:03:11
 * @LastEditors: guoxiaoyang
 * @FilePath: /ts-library/src/sum/sum.test.ts
 */
import { sum } from "./sum";
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
