import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";
import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import { documentTable } from "./document";
import { relations } from "drizzle-orm";

export const skillsTable = pgTable("skills", {
  id: serial("id").primaryKey(),
  docId: integer("document_id")
    .references(() => documentTable.id, {
      onDelete: "cascade",
    })
    .notNull(),
  name: varchar("name", { length: 255 }),
  rating: integer("rating").notNull().default(0),
});

export const skillsRelations = relations(skillsTable, ({ one }) => ({
  document: one(documentTable, {
    fields: [skillsTable.docId],
    references: [documentTable.id],
  }),
}));

export const skillsTableSchema = createInsertSchema(skillsTable, {
  id: z.number().optional(),
}).pick({
  id: true,
  name: true,
  rating: true,
});

export type SkillsSchema = z.infer<typeof skillsTableSchema>;
