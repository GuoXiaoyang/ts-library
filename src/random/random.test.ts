import { createWeightedRandom_O1, createWeightedRandom_O2 } from "./random";

describe("CreateWeightedRandomO1 function", () => {
  test("should work properly", () => {
    const input = [4, 2, 1, 3];
    const times: number[] = Array(input.length).fill(0);
    const random = createWeightedRandom_O1(input);
    for (let i = 0; i <= 10000; i += 1) {
      const result = random();
      times[result] += 1;
    }
    const rates = times.map((t) => Math.round(t / 1000));
    expect(rates).toEqual(input);
  });
});

describe("CreateWeightedRandomO2 function", () => {
  test("should work properly", () => {
    const input = [4, 2, 1, 3];
    const times: number[] = Array(input.length).fill(0);
    const random = createWeightedRandom_O2(input);
    console.log('random():',random());
    for (let i = 0; i <= 10000; i += 1) {
      const result = random();
      times[result] += 1;
    }
    const rates = times.map((t) => Math.round(t / 1000));
    expect(rates).toEqual(input);
  });
});

