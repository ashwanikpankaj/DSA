// Problem Statement 
// // Koko Eating Bananas
// Koko loves bananas.
// There are several piles of bananas.
// piles = [3,6,7,11]

// Koko can decide an eating speed:

// k bananas/hour
// If a pile has fewer than k bananas, she finishes it in less than an hour and waits for the next hour.
// You are also given:

// h = 8 hours

// Find the minimum integer eating speed k so that Koko finishes all bananas within h hours.

// Example
// Input:
// piles = [3,6,7,11]
// h = 8

// Output:4



function minEatingSpeed(piles, h){
  let left = 1; // we have taken min speed initially to 1 , so koko can eat minimum one banana in a hour
  let right = Math.max(...piles);
  let answer = right // since max banana koko can eat is Max of the piles;
  
  while(left<= right){
    const mid = left+ Math.floor((right-left)/2);
    let hours = 0;

    for(const pile of piles){
      hours = hours + Math.ceil(pile/mid);
    }
    
    if(hours<=h){
        // This speed works.
      // But maybe a smaller speed also works.
      answer = mid;
      right = mid-1; // we are doing this to find the minumum answer;
    }else{
      // speed is to slow we will have to increase the speed;
      left = mid+1;
    }

  }
   return answer;
}

const piles = [3,6,7,11];
const h = 8

console.log(minEatingSpeed(piles, h))