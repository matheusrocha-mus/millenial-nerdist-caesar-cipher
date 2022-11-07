var caesar_shift = function (str, amount) {
    if (amount < 0) {
        return caesar_shift(str, amount + 26);
    }

    var output = "";

    for (var i = 0; i < str.length; i++) {
        var c = str[i];

        if (c.match(/[a-z]/i)) {
            var code = str.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }

            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }

        output += c;
    }

    return output;
};

var encryptedClass = document.getElementsByClassName("encrypted");
for (var i = 0; i < encryptedClass.length; i++) {
    encryptedClass[i].innerHTML = caesar_shift (encryptedClass[i].innerText, -3);
}