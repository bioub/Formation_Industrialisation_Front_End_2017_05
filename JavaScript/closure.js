
const logClosure = function(msg) {
    // Portée de closure
    return function() {
        console.log(msg);
    };
};

const sayHello = logClosure('Hello');
sayHello();

for (var i=0; i<3; i++) {
    setTimeout(logClosure(i), 1000);
}

