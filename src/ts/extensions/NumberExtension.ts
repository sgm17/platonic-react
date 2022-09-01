export { }

declare global {
    interface Number {
        toTimeDigit(): string
    }
}

Number.prototype.toTimeDigit = function () {
    return this >= 10 ? this.toString() : `0${this.toString()}`
}