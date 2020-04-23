/** 
 * Instagram bot with web console
*/

// Like instagram bot

// like variable
let kira = 0;

// set time for like
setInterval(function() {
    // get like button
    let hati = document.querySelector("button.wpO6b");
    // dapatkan butang panah pagination
    let panah = document.querySelector("a.coreSpriteRightPaginationArrow");

    // if true hit button
    if(hati){
        hati.click();
        kira++;
        console.log(`Anda telah like ${kira} gambar`);
    }
    // change picture
    panah.click();

    // like time loop
}, 60000);


// Follow bot

// set follow loop
for(var follow = 0; follow < 10; follow++) {
  // get button class
  document.getElementsByClassName("sqdOP")[follow].click();
  // console
  console.log(`Anda telah follow sebanyak ${follow + 1} akaun`);
}

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


// comment bot ---> under maintainance

// let komen =  document.querySelector("textarea.Ypffh").value = "Test 123!!!"; // ruang komen
// let post = document.querySelector("button.y3zKF"); // butang post


