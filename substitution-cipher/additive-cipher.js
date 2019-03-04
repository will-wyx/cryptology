var AdditiveCipher = (function () {
    function AdditiveCipher(offset) {
        this.offset = offset;
        this.alphabetSize = 128;
    }

    AdditiveCipher.prototype.encrypt = function (plaintext) {
        var plaintextArr = plaintext.split('');
        var that = this;
        var ciphertextArr = [];
        plaintextArr.map(function (e) {
            var ascii = e.charCodeAt(0);
            ascii += that.offset;
            ciphertextArr.push(String.fromCharCode(ascii % that.alphabetSize));
        });
        var ciphertext = ciphertextArr.join('');
        return ciphertext;
    };

    AdditiveCipher.prototype.decrypt = function (ciphertext) {
        var ciphertextArr = ciphertext.split('');
        var that = this;
        var plaintextArr = [];
        ciphertextArr.map(function (e) {
            var ascii = e.charCodeAt(0);
            ascii += (that.alphabetSize - that.offset);
            plaintextArr.push(String.fromCharCode(ascii % that.alphabetSize));
        });
        var plaintext = plaintextArr.join('');
        return plaintext;
    };

    return AdditiveCipher;
})();

module.exports = AdditiveCipher;

