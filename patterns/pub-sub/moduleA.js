
const pubSub = require("./pubsub");
let subscription;

subscribeOn = (eventName) => {
    subscription = pubSub.subscribe(eventName, data => {
        console.log(`"anEvent", was published with this data: "${data.msg}"`);
        subscription.unsubscribe();
    });
}

module.exports = {
    subscribeOn
}
