const ObserversList = () => {
    const observers = []
    return {
        add: (obj) => observers.push(obj),
        count: () => observers.length,
        get: (index) => {
            if( index > -1 && index < observers.length ){
                return observers[ index ];
            }
        }
    }
}

module.exports = {
    ObserversList
}
