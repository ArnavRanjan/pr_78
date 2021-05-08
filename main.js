var family=
["https://i.pinimg.com/originals/01/9b/90/019b90b5f8f04e00e0c7b104da92a67a.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus14wLKmFsJLhZsaPdyGmvXbFPfma4xOkJg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--9HkRQuxBnPAGVJQbye2AWJGIFWeR86tNQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHghhw8hDycz0uqrM7eTMcBg7Ux2sZAcadfg&usqp=CAU"];

var mem=[brother,mother,sister,father];


var i=0;
 function update()
 {
     i++;
     var family=4;
     if( i > family){
         i=0;
         
     }
     var sun = family[i];
     var bright = mem[i];
     document.getElementById("familym").src=sun;
     document.getElementById("family_members_name").innerHTML = bright;
 }