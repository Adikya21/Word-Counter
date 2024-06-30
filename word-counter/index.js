function keyHasBeenPressed(){
    let textAreaContent = document.querySelector('textarea')
    let charCount = document.querySelector('.charCount')
    charCount.innerHTML = String(textAreaContent.value).length
    let  charlimit = 20
    let charlimitElement = document.querySelector('.charlimitspan')
    charlimitElement.innerHTML = charlimit - textAreaContent.value.length
    let wordCount = document.querySelector('.wordCount')
    let wordArray = String(textAreaContent.value).split(' ')
    wordCount.innerHTML = wordArray.length

    if(textAreaContent.value.length > 20){
        textAreaContent.value = String(textAreaContent.value).substring(0,charlimit)
    }
}

document.querySelector('.clearButton').addEventListener('click',()=>{
    document.querySelector('textarea').value = ' '
    document.querySelector('.charCount').innerHTML = 0
    document.querySelector('.wordCount').innerHTML = 0
})