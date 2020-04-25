/** 
 * Instagram bot with web console
*/

// Follow bot

// set follow loop
for(var follow = 0; follow < 10; follow++) {
  // get button class
  document.getElementsByClassName("sqdOP")[follow].click();
  // console
  console.log(`You followed ${follow + 1} account`);
}
