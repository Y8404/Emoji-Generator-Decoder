const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const input = document.getElementById("input");
const output = document.getElementById("output");

const encodeEmoji = (text) => {
    let encodedText = "";
    for (let char of text) {
        const charCode = char.charCodeAt(0);
        encodedText += String.fromCodePoint(charCode + 128512);
    }
    return encodedText;
};

const decodeEmoji = (text) => {
    let decodedText = "";
    const regex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

    text.replace(regex, (match) => {
        const emojiCode = match.codePointAt(0) - 128512;
        decodedText += String.fromCodePoint(emojiCode);
    });

    return decodedText;
};

encodeBtn.addEventListener("click", () => {
    const inputValue = input.value;
    const encodedValue = encodeEmoji(inputValue);
    output.textContent = encodedValue;
});

decodeBtn.addEventListener("click", () => {
    const inputValue = input.value;
    const decodedValue = decodeEmoji(inputValue);
    output.textContent = decodedValue;
});
