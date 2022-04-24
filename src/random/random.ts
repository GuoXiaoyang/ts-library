/**
 * Q2: 实现一个加权随机函数
 *
 * 此函数接收一个整数数组 input, 此数组:
 *  1. 元素个数 N < 10000
 *  2. 元素的值大于 0 且小于 100
 *
 * 返回一个随机函数, 此随机函数:
 *  1. 返回 [0, N - 1] 之间的一个随机整数
 *  2. 每个整数 i 被返回的概率为:
 *     数组 input 的第 i 个元素的值 / 数组 arr 的所有元素之和
 *
 * 例: 给定一个数组 input, 值为 [4, 2, 1, 3],
 *    调用 createWeightedRandom(input), 应当
 *    返回一个函数, 此函数返回一个 0 - 3 之间的一个
 *    随机整数, 相应的概率分别为:
 *    4/10, 2/10, 1/10, 3/10.
 *
 * 分别按以下两种要求实现该函数:
 * 1. 空间复杂度不限, 返回的随机函数时间复杂度 O(1)
 * 2. 空间复杂度 O(N), 返回的随机函数时间复杂度 O(logN)
 */
export function createWeightedRandom_O1(arr: number[]) {
  const allNumbers = arr.reduce((result, next, index) => {
    result = result.concat(Array(next).fill(index));
    return result;
  }, []);
  return () => {
    const randomNumber = Math.floor(Math.random() * allNumbers.length);
    return allNumbers[randomNumber];
  };
}

export function createWeightedRandom_O2(arr: number[]) {
  const accArray = arr.reduce((acc, next) => {
    acc = acc.concat((acc[acc.length - 1] || 0) + next);
    return acc;
  }, []);
  return () => {
    const randomTarget = Math.random() * accArray[accArray.length - 1];
    let left = 0;
    let right = accArray.length - 1;
    while (left <= right) {
      if (
        left === right - 1 &&
        randomTarget >= accArray[left] &&
        randomTarget < accArray[right]
      ) {
        return right;
      }
      if (left === right) {
        return right;
      }
      const middle = Math.floor((left + right) / 2);
      if (randomTarget < accArray[middle]) {
        right = middle;
      } else {
        left = middle;
      }
    }
  };
}
