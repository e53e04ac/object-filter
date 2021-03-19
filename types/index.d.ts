/*!
 * object-filter/types/index.d.ts
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

import stream from 'stream';

type ObjectFilterConstructorOptions = {
    allowHalfOpen?: boolean
    readableHighWaterMark?: number;
    writableHighWaterMark?: number;
    writableCorked?: number;
    callback: {
        (input: any): Promise<boolean>;
    };
};

type _ObjectFilter = {

};

type ObjectFilter = stream.Transform & {
    ObjectFilterConstructorOptions: {
        (): ObjectFilterConstructorOptions;
    };
    _ObjectFilter: {
        (): _ObjectFilter;
    };
};

type ObjectFilterConstructor = {
    (options: ObjectFilterConstructorOptions): ObjectFilter;
};

export const ObjectFilter: ObjectFilterConstructor;
