var text;
var encryptedText = "";
var decryptedText = "";

function textCapture() {
  text = document.querySelector("#textarea").value;
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
  return encryptedText;
}

function copyText() {
  navigator.clipboard.writeText(encryptedText);
}
