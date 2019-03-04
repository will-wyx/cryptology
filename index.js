var PermutationCipher = require('./permutation-cipher');
var AdditiveCipher = require('./substitution-cipher/additive-cipher');

var plaintext = '0123456789abcdef';

console.log('-- permutation cipher --');
var permutationCipher = new PermutationCipher(4, '$');
var permutationCipherCiphertext = permutationCipher.encrypt(plaintext);
console.log(permutationCipherCiphertext);
var permutationCipherPlaintext = permutationCipher.decrypt(permutationCipherCiphertext);
console.log(permutationCipherPlaintext);

console.log('-- additive cipher --');
var additiveCipher = new AdditiveCipher(3);
var additiveCipherCiphertext = additiveCipher.encrypt(plaintext);
console.log(additiveCipherCiphertext);
var additiveCipherPlaintext = additiveCipher.decrypt(additiveCipherCiphertext);
console.log(additiveCipherPlaintext);
