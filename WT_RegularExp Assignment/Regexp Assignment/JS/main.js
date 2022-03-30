function ValidateEmail(){
    let pattern = new RegExp("[a-z]*[0-9a-z_]@gmail\.com");
// First word should be alphabhetical then any number of digits , alphabets and _ can be there then @gmail.com for gmail account
    let str = prompt('Enter your email address')
    if(pattern.test(str))
    alert('Your entered email id is valid')
    else
    alert('Invalid Email id')
}

function ValidatePhoneNumber(){
    let pattern = /\+91-\d{10}/;
    let str = prompt('Enter ur Indian phone number preceding with +91-');
    if(pattern.test(str))
    alert('Your entered phone number is valid')
    else
    alert('Invalid Number')
}

function ValidateZipCode(){
    let pattern = /\d{5}/;
    let str = prompt("Enter zip code");
    if(pattern.test(str))
    alert('Valid ZipCode');
    else
    alert('InValid ZipCode');
}

function WithPattern(){
    let pattern = /W.d[a-z]+y/;
    alert('Pattern is First char is W and third char is d and last char is y Memmorize it and enter a word following this pattern')
    let word = prompt('Enter any word');
    if(pattern.test(word))
        alert('It follows tha pattern');
    else    
        alert('It doesn\'t follow the pattern');
}

