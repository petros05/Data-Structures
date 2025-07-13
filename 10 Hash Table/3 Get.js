class HashTable {
    constructor(size = 6) {
        this.table = new Array(size);
    }

    _hash(key) {
        let index = 0;

        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            index = (index * 31 + value) % this.table.length
        }
        return Math.abs(index);
    }

    // Add new node
    set(key, value) {
        let index = this._hash(key);
        if(!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    // Find value by it's key
    get(key) {
        let index = this._hash(key);
        const bucket = this.table[index];
        if(!bucket) return "Key/Value not found";
        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                return bucket[i][1]
            }
        }
        return "Key/Value not found";
    }

}

const ht = new HashTable();
ht.set("Apple", "#FF0800");
ht.set("Banana", "#FFE135");
ht.set("Grape", "#6F2DA8");
ht.set("Lime", "#32CD32");
ht.set("Orange", "#FFA500");
ht.set("Blueberry", "#4F86F7");
ht.set("Peach", "#FFE5B4");
ht.set("Plum", "#8E4585");
ht.set("Mango", "#FFB347");
ht.set("Cherry", "#DE3163");
console.log(ht.get("Orange"));
console.log(ht.table)