const {isPrime} = require('./index.js');

if (! isPrime(3))
    process.exit(1);

if (! isPrime(7))
    process.exit(1);

if (isPrime(1))
    process.exit(1);

if (isPrime(4))
    process.exit(1);

process.exit(0);
