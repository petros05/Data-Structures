class HashTable {
  constructor(size = 6) {
    this.table = new Array(size);
  }

  _hash(key) {
    let index = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      index = (index * PRIME + value) % this.table.length;
    }
    return Math.abs(index);
  }

  // Add new node
  set(key, value) {
    let index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    const bucket = this.table[index];
    if (!bucket) return "Value/Key not found!";
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return "Value/Key not found";
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
ht.set("abc", "#348");
ht.set("cbs", "#09394");

console.log(ht.get("Black"));
console.log(ht.table);
