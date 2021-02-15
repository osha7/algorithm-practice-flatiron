# Set()

    - object
    - Set() creates a new set object
    - collection of values
    - iterable
    - value in Set MUST BE UNIQUES - can only occur once
    - NaN and undefined can also be stored in a Set

## Set.prototype.size

---Returns the number of values in the Set object.

## Set.prototype.add(value)

---Appends value to the Set object. Returns the Set object with added value.

## Set.prototype.clear()

---Removes all elements from the Set object.

## Set.prototype.delete(value)

---Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not.

## Set.prototype.has(value)

---Returns a boolean asserting whether an element is present with the given value in the Set object or not.

# ------------------ITERATORS---------------------

## Set.prototype.keys()

Returns a new iterator object that yields the values for each element in the Set object in insertion order. (For Sets, this is the same as the values() method.)

## Set.prototype.values()

Returns a new iterator object that yields the values for each element in the Set object in insertion order.

## Set.prototype.entries()

Returns a new iterator object that contains an array of [value, value] for each element in the Set object, in insertion order.
This is similar to the Map object, so that each entry's key is the same as its value for a Set.

## Set.prototype.forEach(callbackFn[, thisArg])

Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackFn.
