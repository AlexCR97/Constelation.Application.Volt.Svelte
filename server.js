const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs')
const port = process.env.PORT || 8180
const defaultEnvironment = 'development'

function getCustomEnvironmentVariables() {
  return {
    ENVIRONMENT: process.env.NODE_ENV,
    VX_API_IDENTITY: process.env.VX_API_IDENTITY,
  }
}

function loadCustomEnvironment() {
  let environment = process.env.NODE_ENV

  if (!environment) {
    console.log(`Environment was not set. Defaulting to "${defaultEnvironment}"`)
    environment = defaultEnvironment
    process.env.NODE_ENV = defaultEnvironment
  }

  const envPath = path.join(__dirname, `.env.${environment}`)

  const output = dotenv.config({
    path: envPath,
  })

  if (!output.parsed) {
    console.log('Could not find .env file')
    throw output
  }
}

async function loadSpaEnvironmentAsync(environmentVariables) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./public/env.json`, JSON.stringify(environmentVariables, null, 4), (err) => {
      return err == undefined || err == null
        ? resolve()
        : reject(err)
    })
  })
}

async function main() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Server is NOT running in production mode. Using environment variables from .env files')
    loadCustomEnvironment()
  } else {
    console.log('Server is running in production mode. Using environment variables from host')
  }

  const env = getCustomEnvironmentVariables()
  console.log('env:', env)
  await loadSpaEnvironmentAsync(env)

  const app = express()

  app.use(express.static(__dirname + '/public'))

  app.get('*', function (request, response) {
    const indexPath = path.join(__dirname, '/public/index.html')
    response.sendFile(indexPath)
  })

  app.listen(port, () => {
    console.log("Server started on port " + port)
  })
}

main().catch((err) => {
  console.log('Unhandled error:', err)
})
