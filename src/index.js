/*!
 * object-filter/src/index.jss
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const { ObjectFilter } = (() => {

    /** @typedef ObjectFilterConstructorOptions @type {import('../types').ObjectFilterConstructorOptions} */
    /** @typedef _ObjectFilter @type {import('../types')._ObjectFilter} */
    /** @typedef ObjectFilter @type {import('../types').ObjectFilter} */
    /** @typedef ObjectFilterConstructor @type {import('../types').ObjectFilterConstructor} */

    /** @type {ObjectFilterConstructor}  */
    const ObjectFilter = (block, options) => {

        /** @type {ObjectFilterConstructorOptions}  */
        const _options = {};
        _options.allowHalfOpen = options?.allowHalfOpen;
        _options.readableHighWaterMark = options?.readableHighWaterMark;
        _options.writableHighWaterMark = options?.writableHighWaterMark;
        _options.writableCorked = options?.writableCorked;

        /** @type {_ObjectFilter}  */
        const _it = {};

        /** @type {ObjectFilter}  */
        // @ts-ignore
        const it = new stream.Transform({
            allowHalfOpen: _options.allowHalfOpen,
            writableObjectMode: true,
            readableObjectMode: true,
            readableHighWaterMark: _options.readableHighWaterMark,
            writableHighWaterMark: _options.writableHighWaterMark,
            writableCorked: _options.writableCorked,
            transform: async (chunk, encoding, callback) => {
                const output = await block(chunk);
                if (output) {
                    it.push(chunk);
                }
                callback();
            }
        });
        it.ObjectFilterConstructorOptions = () => {
            return _options;
        };
        it._ObjectFilter = () => {
            return _it;
        };
        return it;

    };
    return { ObjectFilter };

})();

module.exports = { ObjectFilter };
