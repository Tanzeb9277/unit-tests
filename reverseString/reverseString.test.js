const reverseString = require("./reverseString");

test("Reverse String", () =>{
    expect(reverseString('Racecar')).toBe("racecaR" || "racecar")
})