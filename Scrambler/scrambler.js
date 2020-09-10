function scrambler(str){
    var word = str.split("");
    newWord = word.length;
    for(var i = newWord -1; i > 0; i--){
        var j = Math.floor(Math.random() * (i +1));
        var temp = word[i];
        word[i] = word[j];
        word[j] = temp;
    }
    return word.join("");
}

console.log(scrambler("Hello World"));