const copyButton = document.querySelector('#copyButton')
const password =  document.querySelector('#password')

copyButton.addEventListener('click',function(){
    const text = password.innerText

    if (text){
        navigator.clipboard.writeText(text)
        password.innerText = "Copied!"
        setTimeout(() => password.innerText = text, 1500)
    }
})