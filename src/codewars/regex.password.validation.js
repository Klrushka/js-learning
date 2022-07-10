function validate(password) {
    return /^[a-zA-z0-9]{6,}/.test(password) && /[a-z]+/.test(password) && /[A-Z]+/.test(password) && /[0-9]+/.test(password);
}

console.log(validate('JHD5FJ53'))