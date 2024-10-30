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

[types/MemoizedFunction.ts:4](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/types/MemoizedFunction.ts#L4)

## Properties

### cache

> **cache**: [`MemoizeCache`](../type-aliases/MemoizeCache.md)\<`K`, `ReturnType`\<`F`\>\>

Cache.

#### Defined in

[types/MemoizedFunction.ts:8](https://github.com/nevoland/unchangeable/blob/39d9a85d75efc199f878876259d3e7487750c9c6/lib/types/MemoizedFunction.ts#L8)
