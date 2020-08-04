import problemType from '../ProblemFormat/problem_types'
const createProblem = (config) => {
    const prob = {
        ...config,
        value: config.type === problemType.ALL_THAT_APPLY ? new Set() : "",
        correct: undefined
    }
    return prob
}

export default createProblem