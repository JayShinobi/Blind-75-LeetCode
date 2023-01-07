var hammingWeight = function(n) {
    let regex = /1/g
    let string = n.toString(2)
    //use spread iterator to out into array to interate over each match 
      let match = [...string.matchAll(regex)]
      return match.length
  };
