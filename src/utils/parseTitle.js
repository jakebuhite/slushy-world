function parseTitle(title) {
    let wordsArray = title.split(' ');

    let lastWord = wordsArray.pop();
    
    let remainingWords = wordsArray.join(' ');
    
    return [remainingWords, lastWord]
}

export default parseTitle