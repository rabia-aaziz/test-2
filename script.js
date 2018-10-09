// write your JS code here
let alphabtes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function initializer(){
    let keyBoard = document.querySelector(".alphabates-card");
    for(let i = 0 ; i < alphabtes.length ; i ++){
        keyBoard.innerHTML += `
        <div class="btn-img" onclick = "showAlpha('${alphabtes[i]}')">
              <p>${alphabtes[i]}</p>
         </div>`;    }
         keyBoard.innerHTML +=`
         <div class="space-and-arrow">
    <div class="space-img" onclick="space()">
        <p>SPACE</p>
    </div>
    <div class="btn-img arrow" onclick="send()">
        <p><i class="fas fa-arrow-circle-right"></i></p>
    </div>
</div> `
   document.body.addEventListener('keypress', 
   function (event) {
    if (event.keyCode >= 100 || event.keyCode <= 200) {
        document.querySelector('input').value += String.fromCharCode(event.keyCode);
    }
});


document.input.addEventListener("keyup", function(event) {
    event.send();
    if (event.keyCode >= 100 || event.keyCode <= 200) {
        document.querySelector('input').value += String.fromCharCode(event.keyCode);
        
    }
});
    }

    function myFunction(event) {
        var x = event.which;
        document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
    }

function showAlpha(locale) {
    document.querySelector('.form-control').value += locale.toLowerCase();
}
function space(){
    document.querySelector('.form-control').value += " ";

}
function send(){
     alert("Your Message has been sent Successfully");
    window.location.reload();  
    // document.body.style[cursor]=`bubble`;   
}