const OPERATIONS = {
    sum: '+',
    sub: '-',
    pom: '*',
    del: '/'
};

function calculate({ a, b, operation }) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
        case OPERATIONS.sub:
            result = sub(a, b);
            break;
        case OPERATIONS.pom:
            result = pom(a, b);
            break;
        case OPERATIONS.del:
            result = del(a, b);
            break;
            default:
                break;
    }
    return result;
}