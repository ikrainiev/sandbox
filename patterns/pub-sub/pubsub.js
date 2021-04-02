let subscribers = {};

const publish = (event, data) => {
    if (!subscribers[event]) return;

    subscribers[event].forEach(cb => cb(data))
};

const subscribe = (event, cb) => {
    let index;

    if (!subscribers[event]) {
        subscribers[event] = []
    }

    index = subscribers[event].push(cb) - 1

    return {
        unsubscribe() {
            subscribers[event].splice(index, 1)
        }
    }
}

module.exports = {
    publish,
    subscribe
}
