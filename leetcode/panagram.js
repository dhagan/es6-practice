
let sentence = "thequickbrownfoxjumpsoverthelazydog"

var checkIfPangram = function (sentence) {
    var map = new Map()
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence.charAt(i)
        if (!map.has(char)) {
            map.set(char)
        }
        if (map.size == 26)
            return true

    }
    //console.log(map.size)
    return false
}
