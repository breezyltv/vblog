/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

module.exports = nextConfig


module.exports = {

  publicRuntimeConfig: {
      APP_NAME: 'VUBLOG',
      API_DEV: 'http://localhost:8000/api',
      PRODUCTION: false
  },
}
