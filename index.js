const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let buttonEl = document.getElementById("button-el")
let passwordEl1 = document.getElementById("password-el-1")
let passwordEl2 = document.getElementById("password-el-2")


// setting up slider for password length
let slider = document.getElementById("slider-el");
let sliderValue = document.getElementById("slider-value-el");
let passwordLength = slider.value

sliderValue.textContent = slider.value; 

function updatePasswordLength() {
    sliderValue.textContent = slider.value;
    passwordLength = slider.value 
}

slider.addEventListener("input", updatePasswordLength);

// symbols toggle button 
let symbolsButton = document.getElementById("symbols-button")
let toggleSymbols = true

function toggleSymbolsButton() {
    
    toggleSymbols = !toggleSymbols
    
    symbolsButton.textContent = toggleSymbols ? "On" : "Off";
    
     if (toggleSymbols === true) {
        this.style.backgroundColor = "#10B981"
    } else {
        this.style.backgroundColor = "#BE123C"
    }
}

symbolsButton.addEventListener("click", toggleSymbolsButton)

// numbers toggle button
let numbersButton = document.getElementById("numbers-button")
let toggleNumbers = true

function toggleNumbersButton() {
    
    toggleNumbers = !toggleNumbers
    
    numbersButton.textContent = toggleNumbers ? "On" : "Off";
    
    if (toggleNumbers === true) {
        this.style.backgroundColor = "#10B981"
    } else {
        this.style.backgroundColor = "#BE123C"
    }
}

numbersButton.addEventListener("click", toggleNumbersButton)

// creating and displaying passwords from conditions above

function createPassword() {
    allowedCharacters = characters
    
    if (toggleNumbers) {
        allowedCharacters = allowedCharacters.concat(numbers)
    }
    
    if (toggleSymbols) {
        allowedCharacters = allowedCharacters.concat(symbols)
    }
    
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allowedCharacters.length)
        password += allowedCharacters[randomIndex]
    }
    return password
}

function generatePasswords() {
    let password1 = createPassword()
    let password2 = createPassword()
    passwordEl1.textContent = password1
    passwordEl2.textContent = password2
    
}

 function copyToClipboard(name) {
      // Select the text inside the div
      const textToCopy = document.getElementById(name);
      const range = document.createRange();
      range.selectNode(textToCopy);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Execute the copy command
      document.execCommand('copy');

      // Clean up and notify the user
      window.getSelection().removeAllRanges();
      alert('Text has been copied to the clipboard');
    }