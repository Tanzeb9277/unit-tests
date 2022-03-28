const bob = require('./capitalize.js');

test("Capitalize first character", ()=>{
    expect(bob("hello")).toBe("Hello")
})