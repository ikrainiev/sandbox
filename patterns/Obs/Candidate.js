const { Observer } = require('./observer')

const Candidate = (name) => {
    const observer = Observer();

    return {
        update: (data) => observer.update(`${name}: ${data.msg}`)
    }
}

module.exports = {
    Candidate
}
