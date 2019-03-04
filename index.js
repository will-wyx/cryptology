var PermutationCipher = require('./permutation-cipher');
var AdditiveCipher = require('./substitution-cipher/additive-cipher');
var MultiplicationCipher = require('./substitution-cipher/multiplication-cipher');

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

console.log('-- multiplication cipher --');
var multiplicationCipher = new MultiplicationCipher(11);
var multiplicationCipherCiphertext = multiplicationCipher.encrypt(plaintext);
console.log(multiplicationCipherCiphertext);
var multiplicationCipherPlaintext = multiplicationCipher.decrypt(multiplicationCipherCiphertext);
console.log(multiplicationCipherPlaintext);
