const caesarCipher = require('./caesarCipher');

test('Caesar Cipher test', () => {
    expect(caesarCipher('bob')).toBe("cpc")
})

test('Caesar Cipher last letter test', () => {
    expect(caesarCipher('zzz')).toBe("aaa")
})

test('Caesar Cipher capitalization test', () => {
    expect(caesarCipher('Bad')).toBe("Cbe")
})

test('Caesar Cipher capitalization test', () => {
    expect(caesarCipher('Bad!')).toBe("Cbe!")
})