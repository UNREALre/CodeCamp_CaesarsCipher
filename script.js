function rot13(str) { // LBH QVQ VG!
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let rotReg = new RegExp("[A-Z]", 'g');
    let decoded = str.replace(rotReg, (curChar) => {
        let encIndex = alphabet.indexOf(curChar.toLowerCase());
        if (encIndex != -1) {
            let decIndex = encIndex - 13;
            return decIndex >= 0 ? alphabet[decIndex].toUpperCase() : alphabet[alphabet.length + decIndex].toUpperCase();
        }

        return curChar;
    });

  return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");