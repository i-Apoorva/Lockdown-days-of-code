/** Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.m= new Map()
    this.cap= capacity
    this.lru= []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let i=this.lru.indexOf(key)
    if(this.m.has(key)){
        if(i > -1) this.lru.splice(i,1)
        this.lru.push(key)
        return this.m.get(key)
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let i=this.lru.indexOf(key)
    let cap= this.capacity
    this.m.set(key, value)
    if(this.m.size > this.cap) {
        this.m.delete(this.lru.shift())
    }
    if(i > -1) this.lru.splice(i,1)
    this.lru.push(key)
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
