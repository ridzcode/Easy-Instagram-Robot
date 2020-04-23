/** 
 * Instagram bot with console
*/

// Like instagram bot

// variable jumlah like
let kira = 0;

// set masa untuk like
setInterval(function() {
    // dapatkan butang hati
    let hati = document.querySelector("button.wpO6b");
    // dapatkan butang panah pagination
    let panah = document.querySelector("a.coreSpriteRightPaginationArrow");

    // selama true like akan ditekan
    if(hati){
        hati.click();
        kira++;
        console.log(`Anda telah like ${kira} gambar`);
    }
    // anak panah pagination akan ditekan untuk ke gambar seterusnya
    panah.click();

    // masa yang ditanam untuk setiap like  
}, 60000);


// Follow dan unfollow bot

// Set jumlah untuk follow
for(var follow = 0; follow < 5; follow++) {
  // tekan follow
  document.getElementsByClassName("sqdOP")[follow].click();
  // berjaya follow
  console.log(`Anda telah follow sebanyak ${follow + 1} akaun`);
}

setTimeout(function(){
  // Set jumlah unfollow
  for (let unfollow = 0; unfollow < 5; unfollow++){
    // tekan unfollow
    document.getElementsByClassName("sqdOP")[unfollow].click();
    // confirm unfollow
    document.getElementsByClassName("aOOlW -Cab_")[0].click();
    // berjaya unfollow
    console.log(`Anda telah unfollow sebanyak ${unfollow + 1} akaun`);
  }
  // Proses selesai dijalankan
  console.log(`Proses anda telah berjaya 100%`);

}, 10000);

// Unfollow acc instagram dari profile robot

let noAcc = 1;

// Set jumlah ntuk unfollow
for (let unfollow = 0; unfollow < 33; unfollow++){
  // Tekan unfollow acc
  document.getElementsByClassName("sqdOP")[noAcc].click();
  // tekan confirm
  document.getElementsByClassName("aOOlW -Cab_")[0].click();
  // berjaya unfollow
  console.log(`Anda telah unfollow sebanyak ${noAcc} akaun`);
  // index acc bertambah
  noAcc++;
}


// comment bot ---> masih dalam development

// let komen =  document.querySelector("textarea.Ypffh").value = "Test 123!!!"; // ruang komen
// let post = document.querySelector("button.y3zKF"); // butang post


