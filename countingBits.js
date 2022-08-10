/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let result = []
     let regex = /1/g
     
     for(let i = 0; i <= n; i++){
   
        result.push( i.toString(2).split('1').length-1)
       
        
     }
     return result
 };
