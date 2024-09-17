function isPalindrome(kata) {
  let tampungan = [];
  for (let j = kata.length - 1; j >= 0; j--) {
    tampungan += kata[j];
  }
  if (kata == tampungan) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('madam'));
