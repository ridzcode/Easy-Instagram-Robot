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
    // get pagination arrow
    let panah = document.querySelector("a.coreSpriteRightPaginationArrow");

    // if true hit button
    if(hati){
        hati.click();
        kira++;
        console.log(`${kira} photos liked!!!`);
    }
    // change picture
    panah.click();

    // like time loop
}, 60000);
