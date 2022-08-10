var hammingWeight = function(n) {
    let regex = /1/g
    let string = n.toString(2)
      let match = [...string.matchAll(regex)]
      return match.length
  
  
  };