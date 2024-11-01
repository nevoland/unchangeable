[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / memoize

# Function: memoize()

> **memoize**\<`F`, `K`\>(`callable`, `resolver`, `cache`): [`MemoizedFunction`](../interfaces/MemoizedFunction.md)\<`F`, `K`\>

Returns a memoized function.

## Type Parameters

• **F** *extends* [`Callable`](../type-aliases/Callable.md)

• **K** = `Parameters`\<`F`\>\[`0`\]

## Parameters

• **callable**: `F`

The function to memoize.

• **resolver** = `defaultResolver`

An optional function to compute the key from the arguments provided to the memoized function. Defaults to returning the first argument.

• **cache**: [`MemoizeCache`](../type-aliases/MemoizeCache.md)\<`K`, `ReturnType`\<`F`\>\> = `...`

An optional cache to store the results. Defaults to a `Map` instance.

## Returns

[`MemoizedFunction`](../interfaces/MemoizedFunction.md)\<`F`, `K`\>

The memoized function.

## Defined in

[tools/memoize.ts:15](https://github.com/nevoland/unchangeable/blob/73093ebfd96aa50f8db4971b57185ca41ac38a51/lib/tools/memoize.ts#L15)
