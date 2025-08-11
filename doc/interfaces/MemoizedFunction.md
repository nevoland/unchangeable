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

[types/MemoizedFunction.ts:4](https://github.com/nevoland/unchangeable/blob/90aff8eb074821c44b2befe353f53ae1546bb16f/lib/types/MemoizedFunction.ts#L4)

## Properties

### cache

> **cache**: [`MemoizeCache`](../type-aliases/MemoizeCache.md)\<`K`, `ReturnType`\<`F`\>\>

Cache.

#### Defined in

[types/MemoizedFunction.ts:8](https://github.com/nevoland/unchangeable/blob/90aff8eb074821c44b2befe353f53ae1546bb16f/lib/types/MemoizedFunction.ts#L8)
