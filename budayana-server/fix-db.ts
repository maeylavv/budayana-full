// import { Client } from 'pg';
// import dotenv from 'dotenv';

// dotenv.config();

// async function fixSchema() {
//   const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//   });

//   try {
//     await client.connect();
//     console.log("Altering column emailVerified to BOOLEAN...");
//     await client.query(`
//       ALTER TABLE "user" 
//       ALTER COLUMN "emailVerified" TYPE BOOLEAN 
//       USING (CASE WHEN "emailVerified" IS NULL THEN false ELSE true END);
//     `);
    
//     await client.query(`
//       ALTER TABLE "user" 
//       ALTER COLUMN "emailVerified" SET DEFAULT false;
//     `);

//     await client.query(`
//       ALTER TABLE "user" 
//       ALTER COLUMN "emailVerified" SET NOT NULL;
//     `);

//     console.log("Success!");
    
//     const res = await client.query(`
//       SELECT column_name, data_type 
//       FROM information_schema.columns 
//       WHERE table_name = 'user' 
//       AND column_name = 'emailVerified';
//     `);
//     console.log(JSON.stringify(res.rows, null, 2));
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.end();
//   }
// }

// fixSchema();
