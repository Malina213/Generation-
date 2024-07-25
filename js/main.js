
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
    specialLetters: '!@#$%^&*()-=+<>{}[];:'
};
let result = data.lowerLetters;

dom.checkboxUpper.addEventListener('click',function(){
    if(dom.checkboxUpper.checked && !result.includes(data.upperLetters)){
       result += data.upperLetters
    }else if(!dom.checkboxUpper.checked){
       result = result.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ','')
    }
});
dom.checkboxNumber.addEventListener('click',function(){
    if(dom.checkboxUpper.checked && !result.includes(data.number)){
        result += data.number
    }else if(!dom.checkboxNumber.checked){
        result = result.replace('0123456789','')
    }
});
dom.checkboSpecial.addEventListener('click',function(){
    if(dom.checkboxUpper.checked && !result.includes(data.specialLetters)){
        result += data.specialLetters
    }else if(!dom.checkboSpecial.checked){
        result = result.replace('!@#$%^&*()-=+<>{}[];:','')
    }
});

dom.button.addEventListener('click',function(){
    let resultPassword = ''
    for(let i = 0 ; i < dom.length.value; i++){
        resultPassword += result.charAt(Math.floor(Math.random() * result.length));
    }
    
    dom.password.innerText = resultPassword
})


