var MultiplicationCipher = (function () {
    function MultiplicationCipher(key) {
        this.key = key;
        this.alphabetSize = 128;
    }

    MultiplicationCipher.prototype.encrypt = function (plaintext) {
        var ciphertextArr = [];
        for (var i = 0, len = plaintext.length; i < len; ++i) {
            var ascii = plaintext.charCodeAt(i);
            var j = (ascii * this.key) % this.alphabetSize;
            var char = String.fromCharCode(j);
            ciphertextArr.push(char);
        }
        return ciphertextArr.join('');
    };

    MultiplicationCipher.prototype.decrypt = function (ciphertext) {
        // var plaintextArr = [];
        // for (var i = 0, len = ciphertext.length; i < len; ++i) {
        //     var ascii = ciphertext.charCodeAt(i);
        //     var j = (ascii * Math.pow(key, -1)) % this.alphabetSize;
        //     var char = String.fromCharCode(j);
        //     plaintextArr.push(char);
        // }
        // return plaintextArr.join('');
        // todo 求模逆元
    };
    return MultiplicationCipher;
})();

module.exports = MultiplicationCipher;