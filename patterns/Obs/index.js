const { HR } = require('./HR')
const { Candidate } = require('./Candidate')

const candidate1 = Candidate('Jane')
const candidate2 = Candidate('John')

const hr = HR()

hr.addCandidate(candidate1)
hr.addCandidate(candidate2)

hr.notifyAboutOpenVacancy('wow new js vacancy')


