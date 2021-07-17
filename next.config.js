require('dotenv').config()
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', '*', 'ishan-jirety.hashnode.dev'],
  },
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
  }
}
