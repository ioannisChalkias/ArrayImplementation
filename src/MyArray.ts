
class MyArray<T> {
  private length: number;
  private data: { [index: number]: T };

  constructor() {
    // Initialize the array length to 0
    this.length = 0;
    // Initialize the data as an empty object
    this.data = {};
  }

  // Adds an item to the end of the array
  push(item: T): void {
    this.data[this.length] = item;
    this.length++;
  }

  // Removes and returns the last item from the array
  pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  // Retrieves an item at a given index
  get(index: number): T | undefined {
    return this.data[index];
  }

  // Removes an item at a given index
  delete(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  // Returns the size of the array
  size(): number {
    return this.length;
  }

  // Applies a callback function to each element in the array
  forEach(callback: (item: T, index: number) => void): void {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i);
    }
  }

  // Removes and returns the first item from the array
  shift(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const firstItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

  // Adds items to the beginning of the array
  unshift(item: T): void {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;
    this.length++;
  }
}

export default MyArray;