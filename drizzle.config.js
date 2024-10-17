/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Ai-Content-Generator_owner:HzM8rGRmaKq9@ep-misty-bread-a5poup9q.us-east-2.aws.neon.tech/Ai-Content-Generator?sslmode=require'}
};