[**unchangeable**](../README.md) • **Docs**

***

[unchangeable](../README.md) / MemoizedFunction

# Interface: MemoizedFunction()\<F, K\>

## Type Parameters

• **F** *extends* (...`args`) => `any`

• **K**

> **MemoizedFunction**(...`args`): `void`

## Parameters

• ...**args**: `Parameters`\<`F`\>

## Returns

`void`

## Defined in

[types/MemoizedFunction.ts:4](https://github.com/nevoland/unchangeable/blob/ad66755f095504a94d40a3a96d1734780b3bf9ee/lib/types/MemoizedFunction.ts#L4)

## Properties

### cache

> **cache**: [`MemoizeCache`](../type-aliases/MemoizeCache.md)\<`K`, `ReturnType`\<`F`\>\>

Cache.

#### Defined in

[types/MemoizedFunction.ts:8](https://github.com/nevoland/unchangeable/blob/ad66755f095504a94d40a3a96d1734780b3bf9ee/lib/types/MemoizedFunction.ts#L8)
