function genPasswd(key, str, pwLen) {
    let password = "";

    for (let i = 0; i < Math.ceil(pwLen / 2); i++) {
        const indexFromStart = (key + i) % str.length;
        const indexFromEnd = str.length - indexFromStart - 1;

        password += str[indexFromStart] + str[indexFromEnd];
    }

    if (password.length > pwLen) password = password.slice(0, pwLen);

    return password;
}

/*
const str = '0123456789';
const [key, pwLen] = [5, 12];
const password = genPasswd(key, str, pwLen);
assert.strictEqual(password, '546372819009');
*/
const str = '0123456789#';
const [key, pwLen] = [0, 15];
const password = genPasswd(key, str, pwLen);
assert.strictEqual(password, '0#1928374655647'); 