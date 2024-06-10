export const bubbleSort = (array: Array<number>) => {

  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - (i + 1); ++j) {

      const left = array[j];
      const right = array[j + 1];

      if(left > right) {

        array[j] = right;
        array[j + 1] = left;
      }
    }
  }
}