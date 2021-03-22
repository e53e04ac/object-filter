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

type ObjectFilterBlock = {
    (input: any): Promise<boolean>;
};

type ObjectFilterConstructor = {
    (block: ObjectFilterBlock, options?: ObjectFilterConstructorOptions): ObjectFilter;
};

export const ObjectFilter: ObjectFilterConstructor;
