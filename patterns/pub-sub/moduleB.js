const pubSub = require('./pubsub');

const publishEvent = (eventName, data) => {
    pubSub.publish(eventName, data);
}

module.exports = {
    publishEvent
};
