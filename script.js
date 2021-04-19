let inputText = document.querySelector('.inputText');

inputText.addEventListener('keyup', () => {
    var maxChars = 280;
    let inputText = document.querySelector(".inputText").value;
    let inputTextLength = document.querySelector(".inputTextLength");

    inputTextLength.value = inputText.length;          

    if(inputTextLength.value < maxChars){        
      inputTextLength.style.color = "green";
    }
    else if (inputTextLength.value > maxChars){         
      inputTextLength.value = 280 - inputTextLength.value;
      inputTextLength.style.color = "red";
    }

    console.log(inputTextLength.value)
  })