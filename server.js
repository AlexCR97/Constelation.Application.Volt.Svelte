import express from 'express'
import path, { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = process.env.PORT || 8180

function getCustomEnvironmentVariables() {
  return {
    ENVIRONMENT: process.env.NODE_ENV,
    VX_API_IDENTITY: process.env.VX_API_IDENTITY,
  }
}

function loadCustomEnvironmentVariables() {
  let environment = process.env.NODE_ENV

  if (!environment) {
    console.log('Environment was not set. Defaulting to "local"')
    environment = 'local'
    process.env.NODE_ENV = 'local'
  }
  
  const envpath = path.join(__dirname, `.env.${environment}`)
  
  const output = dotenv.config({
    path: envpath,
  })

  if (!output.parsed) {
    console.log('Could not find .env file')
    throw output
  }
}

async function loadSpaEnvironmentAsync(environmentVariables) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./public/env.json`, JSON.stringify(environmentVariables, null, 4), (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

async function main() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Server is NOT running in production mode. Using environment variables from .env files')
    loadCustomEnvironmentVariables()
  } else {
    console.log('Server is running in production mode. Using environment variables from host')
  }
  
  const env = getCustomEnvironmentVariables()
  console.log('env:', env)
  await loadSpaEnvironmentAsync(env)
  
  const app = express()
  
  app.use(express.static(__dirname + '/public'))
  
  app.get('*', function (request, response) {
    response.sendFile(resolve(__dirname, '/public/index.html'))
  })

  app.listen(port, () => {
    console.log("Server started on port " + port)
  })
}

main().catch((err) => {
  console.log('Unhandled error:', err)
})
