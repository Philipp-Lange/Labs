document.getElementById("print-button").addEventListener("click", (event) => printLyrics());

function printLyrics() {
    document.getElementById("print-button").style.display = "none";
    let bottles = 99;
    while (bottles >= 0) {
        let message = "";
        if (bottles > 2) {
            message = bottles + " bottles of beer on the wall, " + bottles + " bottles of beer<br>Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall" + "<br><br>";
        } else if (bottles > 1) {
            message = "2 bottles of beer on the wall, 2 bottles of beer<br>Take one down and pass it around, 1 bottle of beer on the wall<br><br>";
        } else if (bottles > 0) {
            message = "1 bottle of beer on the wall, 1 bottle of beer<br>Take one down and pass it around, no more bottles of beer on the wall<br><br>";
        } else {
            message = "No more bottles of beer on the wall, no more bottles of beer<br>Go to the store and buy some more, 99 bottles of beer on the wall";
        }

        document.getElementById("song-lyrics").innerHTML += message;
        bottles--;
    }
}