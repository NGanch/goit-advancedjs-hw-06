/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// let arr: Array<string | number> = [];
// (string | number)[]
function getPromise(): Promise<string | number | {}>  {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
    // resolve('Done!');
  });
}

getPromise()
.then((data) => {
  console.log(data);
});

export {};


