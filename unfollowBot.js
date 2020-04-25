/** 
 * Instagram bot with web console
*/

// Unfollow from profile

let noAcc = 1;

// Set unfollow
for (let unfollow = 0; unfollow < 10; unfollow++){
  // click unfollow
  document.getElementsByClassName("sqdOP")[noAcc].click();
  // confirm button
  document.getElementsByClassName("aOOlW -Cab_")[0].click();
  // unfollow done
  console.log(`Anda telah unfollow sebanyak ${noAcc} akaun`);
  // index increase
  noAcc++;
}
