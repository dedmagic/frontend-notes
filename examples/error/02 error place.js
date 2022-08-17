try {
    throw new Error('Good place'); // line 2
} catch (e) {
    console.log(e); // --> line 2
}

const error = new Error('Bad place'); // line 7
try {
    throw error; // line 9
} catch (e) {
    console.log(e); // --> line 7
}

function createError() {
    return new Error('Bad stack trace');
}

function generateError() {
    const error = createError();
    throw error;
}

try {
    generateError();
} catch (e) {
    console.log(e); // --> stacktrace: createError → generateError → ...
}
