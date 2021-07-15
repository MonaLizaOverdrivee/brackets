module.exports = function check(str, bracketsConfig) {
   const pair = [];
  const [open, close] = bracketsConfig.reduce((acc,[a,b]) => {
    acc[0].push(a)
    acc[1].push(b)
    return acc
  },[[], []])
  function configOpen() {
    let pairNumber = 0;
    return function(val) {
      pair[pairNumber] = [val, null]
      pairNumber++
    }
  }
  function configClose() {
    let pairNumber = 0
    return function(val) {
      pair[pair.length - 1 - pairNumber][1] = val
      if(pair.length - 1 - pairNumber === 0) pairNumber = 0
      else pairNumber++
    }
  }
  const setOpen = configOpen()
  const setClose = configClose()

  for(let v of str) {
    if(open.includes(v)) setOpen(v)
    else setClose(v)
  }
  return pair.every(itm => bracketsConfig.some(sub => itm[0] === sub[0] && itm[1] === sub[1]))
}
