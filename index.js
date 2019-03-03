var PermutationCipher = require('./permutation-cipher');

var plaintext = '0123456789abcdef';

console.log('--\tpermutation cipher\t--');
var permutationCipher = new PermutationCipher(4, '$');
var permutationCipherCiphertext = permutationCipher.encrypt(plaintext);
console.log(permutationCipherCiphertext);
var permutationCipherPlaintext = permutationCipher.decrypt(permutationCipherCiphertext);
console.log(permutationCipherPlaintext);
