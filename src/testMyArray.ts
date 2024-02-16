import MyArray from './MyArray.js';

const testMyArray = () => {
  // Create an instance of MyArray
  const myArray = new MyArray<number>();

  // Test push method
  myArray.push(1);
  myArray.push(2);
  myArray.push(3);
  console.log('After push:', myArray);

  // Test pop method
  const poppedItem = myArray.pop();
  console.log('Popped item:', poppedItem);
  console.log('After pop:', myArray);

  // Test get method
  const getItemAtIndex = myArray.get(1);
  console.log('Item at index 1:', getItemAtIndex);

  // Test delete method
  myArray.delete(0);
  console.log('After delete at index 0:', myArray);

  // Test forEach method
  console.log('ForEach output:');
  myArray.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
  });

  // Test shift method
  const shiftedItem = myArray.shift();
  console.log('Shifted item:', shiftedItem);
  console.log('After shift:', myArray);

  // Test unshift method
  myArray.unshift(4);
  console.log('After unshift 4:', myArray);

  // Test size method
  const arraySize = myArray.size();
  console.log('Array size:', arraySize);
};

testMyArray();