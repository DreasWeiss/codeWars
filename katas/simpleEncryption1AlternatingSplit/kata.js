function encrypt(text, n) {
  if (!text || n <= 0) return text;

  let even = '';
  let odd = '';

  for (let i = 0; i < text.length; i++) {
    i % 2 !== 0 ? odd += text[i] : even += text[i];
  }

  return encrypt(`${odd}${even}`, --n);
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

  let even = encryptedText.slice(0, Math.floor(encryptedText.length / 2));
  let odd = encryptedText.slice(Math.floor(encryptedText.length / 2));
  let deccryptText = '';

  for (let i = 0; i < odd.length; i++) {
    deccryptText += `${odd[i]}${even[i] !== undefined ? even[i] : ''}`
  }

  return decrypt(deccryptText, --n);
}



console.log(encrypt("This is a test!", 0));
// "This is a test!");


console.log(encrypt("This is a test!", 1));
// "hsi  etTi sats!");


console.log(encrypt("This is a test!", 2));
// "s eT ashi tist!");


console.log(encrypt("This is a test!", 3));
// " Tah itse sits!");


console.log(encrypt("This is a test!", 4));
// "This is a test!");


console.log(encrypt("This is a test!", -1));
// "This is a test!");


console.log(encrypt("This kata is very interesting!", 1));
// "hskt svr neetn!Ti aai eyitrsig");


console.log(decrypt("This is a test!", 0));
// "This is a test!");


console.log(decrypt("hsi  etTi sats!", 1));
// "This is a test!");


console.log(decrypt("s eT ashi tist!", 2));
// "This is a test!");


console.log(decrypt(" Tah itse sits!", 3));
// "This is a test!");


console.log(decrypt("This is a test!", 4));
// "This is a test!");


console.log(decrypt("This is a test!", -1));
// "This is a test!");


console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));
// "This kata is very interesting!");


console.log(encrypt("", 0));
// "");


console.log(decrypt("", 0));
// "");


console.log(encrypt(null, 0));
// null);


console.log(decrypt(null, 0));
  // null);

