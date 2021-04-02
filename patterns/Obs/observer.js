const Observer = () => {
    return {
        update: (data) => {
            console.log('update observer with message::: >', data)
        }
    }
}

module.exports = {
    Observer
}
