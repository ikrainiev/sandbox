const { ObserversList } = require('./observers-list')

const Subject = () => {
    const observers = ObserversList()

    return {
        add: (observer) => observers.add(observer),
        notify: (message) => {
            for (let i = 0; i < observers.count(); i++) {
                observers.get(i).update({ msg: message })
            }
        }
    }
}

module.exports = {
    Subject
}
