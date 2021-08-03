module.exports = function check(str, bracketsConfig) {
  const stack = [];
  str.split("").forEach((itm) => {
    const [open, close] = bracketsConfig.find((subitm) => subitm.includes(itm));
    if (itm === stack[stack.length - 1] && open === close) {
      stack.pop();
    } else if (itm === close && stack[stack.length - 1] === open) {
      stack.pop();
    } else {
      stack.push(itm)
    }
  });

  return !stack.length;
}
