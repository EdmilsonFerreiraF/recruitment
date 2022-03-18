// Reverse words

const text = "Hello world"

const reverseWords = (text) => {
    let newText = ""
    let word = ""
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i]

        if (char !== " ") {
            word += char

            if (i === text.length - 1) {
                word += " " + newText
                newText = word
                word = ""
            }
        } else if (word !== "") {
            word += " " + newText
            newText = word
            word = ""
        }
    }
    
    return newText.trim()
}

singleNonDuplicate(text)