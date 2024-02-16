import MyArray from './MyArray';

describe('MyArray', () => {
  let myArray: MyArray<number>;

  beforeEach(() => {
    myArray = new MyArray<number>();
  });

  test('push and pop', () => {
    myArray.push(1);
    myArray.push(2);

    expect(myArray.pop()).toBe(2);
    expect(myArray.pop()).toBe(1);
  });

  test('get and delete', () => {
    myArray.push(1);
    myArray.push(2);

    expect(myArray.get(0)).toBe(1);
    expect(myArray.get(1)).toBe(2);

    myArray.delete(0);
    expect(myArray.get(0)).toBe(2);
    expect(myArray.size()).toBe(1);
  });

  test('forEach', () => {
    myArray.push(1);
    myArray.push(2);
    myArray.push(3);

    const result: number[] = [];
    myArray.forEach((item) => {
      result.push(item);
    });

    expect(result).toEqual([1, 2, 3]);
  });

  test('shift and unshift', () => {
    myArray.push(1);
    myArray.push(2);

    expect(myArray.shift()).toBe(1);
    expect(myArray.size()).toBe(1);

    myArray.unshift(3);
    expect(myArray.size()).toBe(2);
    expect(myArray.get(0)).toBe(3);
    expect(myArray.get(1)).toBe(2);
  });
});