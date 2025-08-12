[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / MemoizedFunction

# Interface: MemoizedFunction()\<F, K\>

## Type Parameters

• **F** *extends* (...`args`) => `any`

• **K**

> **MemoizedFunction**(...`args`): `ReturnType`\<`F`\>

## Parameters

• ...**args**: `Parameters`\<`F`\>

## Returns

`ReturnType`\<`F`\>

## Defined in

[types/MemoizedFunction.ts:4](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/types/MemoizedFunction.ts#L4)

## Properties

### cache

> **cache**: [`MemoizeCache`](../type-aliases/MemoizeCache.md)\<`K`, `ReturnType`\<`F`\>\>

The cache used to store the results of the memoized function.

#### Defined in

[types/MemoizedFunction.ts:8](https://github.com/nevoland/unchangeable/blob/dd3492fb78b3ab9733f94ad51551bd591389c2c3/lib/types/MemoizedFunction.ts#L8)
