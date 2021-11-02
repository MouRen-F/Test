//单个导出
export function sum(a, b) {
    return a + b;
}
export function sub(a, b) {
    return a * b;
}

//多个导出
export default {
    sum(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a * b;
    }
}