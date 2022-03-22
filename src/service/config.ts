let BASE_URL = ''
const TIME_OUT = 5000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = '/api'
    break
  case 'production':
    BASE_URL = 'http://175.178.164.2:3000'
    break
  default:
    BASE_URL = 'http://175.178.164.2:3000'
    break
}

export { BASE_URL, TIME_OUT }
