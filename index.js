const configs = require('./configs')
const rules = require('./rules')

function getRules (rules, env) {
  let resRules = {}
  let level = 2
  typeof env === 'number' && [0, 1, 2].includes(env) && (level = env)
  env === 'dev' && (level = 1)
  for (let key in rules) {
    let ruleValue = rules[key]
    if (ruleValue === 0) {
      resRules[key] = ruleValue
    } else if (typeof ruleValue === 'number') {
      resRules[key] = level
    } else if (ruleValue instanceof Array) {
      ruleValue[0] = level
      resRules[key] = ruleValue
    }
  }
  return resRules
}

module.exports = {
  configs: {
    'es-dev': {
      ...configs.es,
      rules: getRules(rules.es, 'dev')
    },
    'es-prod': {
      ...configs.es,
      rules: getRules(rules.es)
    },
    'ts-dev': {
      ...configs.ts,
      rules: {
        ...getRules(rules.es, 'dev'),
        ...getRules(rules.ts, 'dev')
      }
    },
    'ts-prod': {
      ...configs.ts,
      rules: {
        ...getRules(rules.es),
        ...getRules(rules.ts)
      }
    },
    'react-dev': {
      ...configs.react,
      rules: getRules(rules.react, 'dev')
    },
    'react-prod': {
      ...configs.react,
      rules: getRules(rules.react)
    }
  }
}
