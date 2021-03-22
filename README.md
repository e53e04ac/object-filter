# object-filter

## Requirements

- Node.js (v15)

## Installation

~~~~~
npm install e53e04ac/object-filter
~~~~~

## Example

~~~~~ js
const stream = require('stream');
const { ObjectFilter } = require('object-filter');
(async () => {
    const stream1 = stream.Readable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const stream2 = ObjectFilter(async (x) => x % 2 == 0);
    for await (const x of stream1.pipe(stream2)) {
        console.log(x);
    }
})();
~~~~~
