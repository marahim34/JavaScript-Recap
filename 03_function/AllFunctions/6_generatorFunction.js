// Generator Functions: Functions that can be paused and resumed, returning an iterator. Defined with the function* syntax.
// Use them when you need to produce a sequence of values lazily (on-demand) or implement custom iterators.

function* count() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = count();
console.log(iterator.next().value);
