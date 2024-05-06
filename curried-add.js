function curriedAdd(...nums) {
  let allNums = nums;

  function add(...addNewNums) {
    if (addNewNums.length === 0) {
      return allNums.reduce((acc, currentValue) => acc + currentValue, 0);
    } else {
      allNums = allNums.concat(addNewNums);
      return add;
    }
  }

  add;
}

module.exports = { curriedAdd };
