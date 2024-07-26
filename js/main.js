import './copy-link.js'

const dom = { 
    password: document.querySelector('#password'), 
    button : document.querySelector('#button'), 
    length : document.querySelector('#length'), 
    checkboxUpper : document.querySelector('#check1'), 
    checkboxNumber : document.querySelector('#check2'), 
    checkboSpecial : document.querySelector('#check3'), 
}; 

const data = { 
    upperLetters : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
    lowerLetters : 'abcdefghijklmnopqrstuvwxyz', 
    number : '0123456789', 
    specialLetters: '!@#$%^&*()-=+<>{}[];,.:' 
}; 
let passwordLength = parseInt(dom.length.value); 

function createPassword(){
    let passwordLength = parseInt(dom.length.value); 
    if (passwordLength < 8 || passwordLength > 20 ) {
        alert('Длина пароля от 8 до 20 символов')
    }else{
        passwordRules()
    }

}

function passwordRules(){
    let resultPassword = '';  
    let passwordLength = parseInt(dom.length.value); 
    if (dom.checkboxUpper.checked) {
        for(let i = 0 ; i < Math.floor (Math.random () * (4 - 2 + 1)) + 2; i++){
            resultPassword += data.upperLetters.charAt(Math.floor(Math.random() * data.upperLetters.length));
        }
        
    }
    
    if (dom.checkboxNumber.checked) {

        for(let i = 0 ; i < Math.floor (Math.random () * (4 - 2 + 1)) + 2; i++){
            resultPassword += data.number.charAt(Math.floor(Math.random() * data.number.length));
        }
        
    }
        
    if (dom.checkboSpecial.checked) {
        for(let i = 0 ; i < Math.floor (Math.random () * (4 - 2 + 1)) + 2; i++){
            resultPassword += data.specialLetters.charAt(Math.floor(Math.random() * data.specialLetters.length));
        }
        
    }

    while (resultPassword.length < passwordLength) {
        resultPassword += data.lowerLetters.charAt(Math.floor(Math.random() * data.lowerLetters.length));
    } 
    resultPassword = resultPassword.split('').sort(() => Math.random() - 0.5).join('');

    dom.password.innerText = resultPassword; 
}

dom.button.addEventListener('click', function() { 

    createPassword()

});




