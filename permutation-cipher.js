// 置换密码
var PermutationCipher = (function () {
    function PermutationCipher(unitSize, placeholder) {
        this.unitSize = unitSize;
        this.placeholder = placeholder;
    }

    PermutationCipher.prototype.encrypt = function (plaintext) {
        // 处理明文，去掉无意义字符
        plaintext = plaintext.replace(/ /g, '');
        var plaintextSize = plaintext.length;
        // 用占位符补齐不足部分
        plaintext += new Array(this.unitSize - (plaintextSize % this.unitSize) + 1).join(this.placeholder);
        plaintextSize = plaintext.length;

        var plaintextGroups = [];
        var i = 0;
        for (i = 0; i < this.unitSize; ++i) {
            plaintextGroups.push([]);
        }

        // 转矩阵
        for (i = 0; i < plaintextSize; ++i) {
            var char = plaintext[i];
            var groupIndex = i % this.unitSize;
            plaintextGroups[groupIndex].push(char);
        }

        var ciphertext = plaintextGroups.map(
            function (e) {
                return e.join('');
            }
        ).join('');
        return ciphertext;
    };

    PermutationCipher.prototype.decrypt = function (ciphertext) {
        var ciphertextSize = ciphertext.length;
        var groupSize = ciphertextSize / this.unitSize;

        var ciphertextGroups = [];
        var i = 0;
        for (i = 0; i < groupSize; ++i) {
            ciphertextGroups.push([]);
        }

        for (i = 0; i < ciphertextSize; ++i) {
            var char = ciphertext[i];
            var groupIndex = i % groupSize;
            ciphertextGroups[groupIndex].push(char);
        }

        var plaintext = ciphertextGroups.map(
            function (e) {
                return e.join('');
            }
        ).join('');
        plaintext = plaintext.slice(0, plaintext.indexOf(this.placeholder));
        return plaintext;
    };

    return PermutationCipher;
})();
module.exports = PermutationCipher;
