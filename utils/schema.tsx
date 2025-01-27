// import {  } from "drizzle-orm/mysql-core";
import { pgTable, serial,text,varchar} from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
  id:serial('id').primaryKey(),
  formData:varchar('formData').notNull(),
  aiResponse:text('aiResponse'),
  templateSlug:varchar('templateSlug').notNull(),
  createdBy:varchar('cretedBy'),
  createdAt:varchar('cretedAt')
})