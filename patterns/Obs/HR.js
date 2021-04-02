const {Subject} = require('./subject')

const HR = () => {
    const openVacancy = Subject()
    return {
        addCandidate: (c1) => openVacancy.add(c1),
        notifyAboutOpenVacancy: (msg) => openVacancy.notify(msg)
    }
}

module.exports = {
    HR
}
