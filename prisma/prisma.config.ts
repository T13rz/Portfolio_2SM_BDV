import path from 'path'
import { defineConfig } from 'prisma/config'
import { PrismaMysql } from '@prisma/adapter-mysql'
import mysql from 'mysql2/promise'

const connectionString = process.env.DATABASE_URL

export default defineConfig({
  earlyAccess: true,
  schema: path.join('prisma', 'schema.prisma'),
  migrate: {
    async adapter() {
      const pool = mysql.createPool(connectionString)
      return new PrismaMysql(pool)
    }
  }
})
