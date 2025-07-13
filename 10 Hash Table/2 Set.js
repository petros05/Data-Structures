class HashTable {
    constructor(size = 6) {
        this.table = new Array(size);
    }

    _hash(key) {
        let index = 0;
        const PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            index = (index * PRIME + value) % this.table.length
        }
        return Math.abs(index);
    }

    // Add new node
    set(key, value) {
        let index = this._hash(key)
        if(!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push([key, value])
    }
}

const ht = new HashTable();
ht.set("Pink", "#12893");
ht.set("Black", "#3874");
ht.set("Red", "#2398");
ht.set("Blue", "#01293");
ht.set("Dark", "#22222");
ht.set("Green", "#29379");
ht.set("hello", "#39443");
ht.set("abc", "#348498");
ht.set("cbs", "#434778");
console.log(ht.table)