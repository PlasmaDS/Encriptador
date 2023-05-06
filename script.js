var text;
var encryptedText = "";
var decryptedText = "";
var lastAction;

function textCapture() {
  text = document
    .querySelector("#textarea")
    .value.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  document.querySelector("#textarea").value = "";
  return text;
}

function encrypt() {
  encryptedText = "";
  textCapture();
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        encryptedText += "ai";
        break;
      case "e":
        encryptedText += "enter";
        break;
      case "i":
        encryptedText += "imes";
        break;
      case "o":
        encryptedText += "ober";
        break;
      case "u":
        encryptedText += "ufat";
        break;
      default:
        encryptedText += text[i];
        break;
    }
  }
  document.querySelector("#resultText").innerHTML = encryptedText;
  document.querySelector("#noEncryptedYet").style.display = "none";
  document.querySelector("#copy").style.display = "block";
  lastAction = encryptedText;
}

function decrypt() {
  textCapture();
  decryptedText = text.replace(/(enter|imes|ai|ober|ufat)/g, function (match) {
    switch (match) {
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ai":
        return "a";
      case "ober":
        return "o";
      case "ufat":
        return "u";
      default:
        return match;
    }
  });
  document.querySelector("#resultText").innerHTML = decryptedText;
  document.querySelector("#noEncryptedYet").style.display = "none";
  document.querySelector("#copy").style.display = "block";
  lastAction = decryptedText;
}

function copyText() {
  navigator.clipboard.writeText(lastAction);
}
