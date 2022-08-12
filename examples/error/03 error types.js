try {
    throw new RangeError('Range error');
} catch (e) {
    switch (e.name) {
        case 'URIError':
            console.log('URI');
            break;
        case 'RangeError':
            console.log('Range');
            break;
        case 'ReferenseError':
            console.log('Reference');
            break;
    }
}

try {
    throw new URIError('Range error');
} catch (e) {
    if (e instanceof URIError) {
        console.log('URI');
    } else if (e instanceof RangeError) {
        console.log('Range')
    } else if (e instanceof ReferenseError) {
        console.log('Reference');
    }
}