

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();
    const exists =
      this.cache.has(key) && this.cache.get(key).expiry > now;

    // overwrite value and expiry
    this.cache.set(key, {
      value: value,
      expiry: now + duration
    });

    return exists;
  }

  get(key) {
    const now = Date.now();

    if (!this.cache.has(key)) return -1;

    const entry = this.cache.get(key);

    if (entry.expiry <= now) {
      this.cache.delete(key); // cleanup expired key
      return -1;
    }

    return entry.value;
  }

  count() {
    const now = Date.now();
    let count = 0;

    for (const [key, entry] of this.cache) {
      if (entry.expiry > now) {
        count++;
      } else {
        this.cache.delete(key); // cleanup expired key
      }
    }

    return count;
  }
}
