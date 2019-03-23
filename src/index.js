module.exports = 
function getZerosCount(number, base) {
  let primeFactor = getBaseDividers(base);
  let zerosCounts = countZeros(number, primeFactor);

  //prime factors of base 
  function getBaseDividers(base) {
      let primeFactorBase = {};
      
      for (let i = 2; i <= base; i++) {
          while((base % i) === 0) {
              base /= i;
              if (primeFactorBase[i] === undefined) {
                  primeFactorBase[i] = 1;
              } else {
                  primeFactorBase[i]++;
              }
          }
      }

      return primeFactorBase;
  }

  //find counts of each prime factors in number 
  function countZeros(number, primeFactor) {
      let zeros = [];
      for (let factor in primeFactor) {
          let count = 0;
          let divider = factor;
          do {
              count += Math.floor(number / divider);
              divider *= factor;
          } while (Math.floor(number / divider) > 0);

          if(primeFactor[factor] > 1) {
              zeros[factor] = Math.floor(count / primeFactor[factor]);
          } else {
              zeros[factor] = count;
          }
          
      }

      return zeros;
  }

    //find min count of zeros 
    function getZeros(zeros) {
        let arr = new Array();
        for (let number in zeros) {
            arr.push(zeros[number]);
        }
        let min = arr[0];
        for (let i = 0 ; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }

    return getZeros(zerosCounts);
};
// console.log(getZerosCount(7003432, 119));
// console.log(getZerosCount(19848293, 192));
