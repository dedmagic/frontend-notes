const iterable = {
    from: 1,
    to: 5,

    getIterator: function() {
        return { // iterator
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return { value: this.current++, done: false }
                } else {
                    return { value: undefined, done: true }
                }
            } // end iterator
        }
    }
}

// #region manually getting values
// const iterator = iterable.getIterator();

// let iteration_result = iterator.next();
// console.log(iteration_result.value);

// iteration_result = iterator.next();
// console.log(iteration_result.value);

// iteration_result = iterator.next();
// console.log(iteration_result.value);

// iteration_result = iterator.next();
// console.log(iteration_result.value);

// iteration_result = iterator.next();
// console.log(iteration_result.value);

// iteration_result = iterator.next();
// console.log(iteration_result.value);
// #endregion manually getting values

// #region getting iteration results
// const iterator = iterable.getIterator();

// let iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);

// iteration_result = iterator.next();
// console.log(iteration_result);
// #endregion getting iteration results

//#region getiing values in loop
// const iterator = iterable.getIterator();

// let iteration_result = iterator.next();
// while (!iteration_result.done) {
//     console.log(iteration_result.value);
//     iteration_result = iterator.next();
// }
//#endregion getiing values in loop
