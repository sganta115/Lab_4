//Practice 2
function change_color() {

    let border_R = document.getElementById("border_R").value.trim();
    let border_G = document.getElementById("border_G").value.trim();
    let border_B = document.getElementById("border_B").value.trim();
    let border_width = document.getElementById("border_width").value.trim();

    let text_R = document.getElementById("Text_R").value.trim();
    let text_G = document.getElementById("Text_G").value.trim();
    let text_B = document.getElementById("Text_B").value.trim();

    let paragraph = document.getElementById("text-container");

    paragraph.style.borderColor = `rgb(${border_R}, ${border_G}, ${border_B})`;
    paragraph.style.borderStyle = "solid"; 
    paragraph.style.color= `rgb(${text_R}, ${text_G}, ${text_B})`;
    paragraph.style.borderWidth = border_width + "px";

}

//Practice 3
function validate(){
    let password_1 = document.getElementById("Password_1").value;
    let password_2 = document.getElementById("Password_2").value;
    
    if (password_1.length < 8) {
        alert("Password 1 is under 8 characters. ")
    }
    else if (password_2.length < 8)
        alert("Password 2 is under 8 characters. ")

    else if (password_1 != password_2) {
        alert('Passwords do not match!')

    }

    else {
        alert('Passwords Match!')
    }



}