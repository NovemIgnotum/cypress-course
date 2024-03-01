// Function to encode the string using the Caesar cipher algorithm
function encodeString(string, key) {
  let encodedString = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      encodedString += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      encodedString += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
    } else {
      // Non-alphabetic characters
      encodedString += string.charAt(i);
    }
  }
  return encodedString;
}

// Encode the string using the provided key
const encodedString = encodeString(string, key);

// Display the encoded string
console.log("Encoded string:", encodedString);
