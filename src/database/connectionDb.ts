import * as dotenv from 'dotenv'
dotenv.config()
import { Client } from 'pg'

const db = async () => { 
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  })

  await client.connect()

  return { client }
}

exports { db }
