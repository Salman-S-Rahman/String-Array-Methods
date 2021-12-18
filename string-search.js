var products = [
    'dell hardcore i29 laptop',
    'iphone 1TB camera flaslight phone',
    'yellow laptop with black camera',
    '33r commercial yoga Laptop',
    'Dell low price phone',
    'LG supernova laptop',
    'Hp laptop with double Camera'
]

var lowercaseLaptop = []

for (const product of products) {
    if (product.indexOf('laptop') !== -1) {
        lowercaseLaptop.push(product)
    }
}
console.log(lowercaseLaptop);

// ======== search all lower case laptop by using Index of ========

var allLaptop = [];
var prLaptpop = "laptop"
for (const product of products) {
    if (product.toLowerCase().includes("laptop".toLowerCase())) {
        allLaptop.push(product)
    }
}
console.log(allLaptop)

// ============= search all laptop by using includes ===========

var startsWith = []

for (const product of products) {
    if (product.toLowerCase().startsWith("dell".toLowerCase())) {
        startsWith.push(product);
    }
}

console.log(startsWith);

// ======== search all laptop by using starts with ===========


var endsWith = []
for (const product of products) {
    if (product.toLowerCase().endsWith("camera".toLowerCase())) {
        endsWith.push(product);
    }
}
console.log(endsWith);

// =========== search all laptop by using ends with ===========