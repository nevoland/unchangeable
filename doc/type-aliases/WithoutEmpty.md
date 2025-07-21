[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / WithoutEmpty

# Type Alias: WithoutEmpty\<T\>

> **WithoutEmpty**\<`T`\>: `T` *extends* readonly infer U[] ? readonly `Exclude`\<`U`, [`Empty`](Empty.md)\>[] : `T` *extends* `object` ? `{ [K in keyof T as T[K] extends Empty ? never : K]: Exclude<T[K], Empty> }` : `T`

## Type Parameters

• **T**

## Defined in

[types/WithoutEmpty.ts:3](https://github.com/nevoland/unchangeable/blob/2346b066c6a3bcab5cd6c3ea00a37b523802ea73/lib/types/WithoutEmpty.ts#L3)
