## About

A Bloom Filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set.

It can quickly check membership with very little memory.

False positives are possible (it may say an element exists when it doesn’t), but false negatives never occur (it will never miss an element that was added).

Commonly used in databases, caching, and network systems where speed and memory efficiency are important.

## Usage

Import the Bloom Filter class and create a new instance:

```ts
import { BloomFilter } from "my-bloom-filter";

// Create a Bloom Filter
// size: number of bits in the filter
// hashCount: number of hash functions to use
const filter = new BloomFilter(100, 3);

// Add elements to the filter
filter.add("apple");
filter.add("banana");

// Check if elements might be in the filter
console.log(filter.contains("apple")); // true
console.log(filter.contains("banana")); // true
console.log(filter.contains("grape")); // false (or true: false positive)
```
