function caesarCipher(str){
   
    const isAlpha = code => (code >= 65 && code <= 90) || (code >= 97 && code
    <= 122);
    const isLast = code => code === 90 || code === 122;
    const strArr = str.split('');
    return strArr.reduce((acc, val) => {
        const code = val.charCodeAt(0);
        if(!isAlpha(code)){
            return acc+val;
        };
        if(isLast(code)){
            return acc+String.fromCharCode(code-25);
        };
        return acc+String.fromCharCode(code+1);
    }, '');
   

}

module.exports = caesarCipher;