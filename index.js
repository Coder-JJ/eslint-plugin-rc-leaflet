const configs = require('./configs')
const rules = require('./rules')

function getRules (rules, env) {
  let obj = {}
  let level = 2
  typeof env === 'number' && [0, 1, 2].includes(env) && (level = env)
  env === 'dev' && (level = 1)
  for (let [key, value] of Object.entries(rules)) {
    if (value === 0) {
      obj[key] = value
    } else if (typeof value === 'number') {
      obj[key] = level
    } else if (value instanceof Array) {
      const [status, ...params] = value
      obj[key] = [level, ...params]
    }
  }
  return obj
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
