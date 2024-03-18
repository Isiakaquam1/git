const input1 = document.getElementById('password')

const input2 = document.getElementById('comfirmPassword')

function pass() {
 if (password.value == confirmPassword.value) {
     alert('password match')

 } else {
     alert('password mismatch')
 }





}

let input = document.getElementById('eligibility')

function age() {
 
 if (eligibility.value == 18) {
     alert('you are eligible')
 } else {
     alert('you are not eligible')
     
 }

}
   let names = ["Victot", "Samuel", "David"];
    console.log(names);
     names.push("ola");
    console.log(names);
    names.shift('quam')
    console.log(names);
    names.unshift('ade');
    console.log(names);
    

  input = document.getElementById("display");

    function push(params) {
        names.push(input.value);
        console.log(names);
     }

     function pop(params) {
        names.pop(input.value);
        console.log(names);
     }
     function unshift(params) {
        names.unshift(input.value);
        console.log(names);
     }
     function shift(params) {
        names.shift(input.value);
        console.log(names);
     }length
