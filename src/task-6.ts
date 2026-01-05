function getFirstElement <T> (arr: Array<T>) :T {
    return arr[0];
  }
  
  getFirstElement<number>([1, 2, 3]);           // 1
  getFirstElement<string>(["a", "b", "c"]);     // "a"
  getFirstElement<boolean>([true, false, true]); // true
  