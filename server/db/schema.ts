import { pgTable, serial, varchar, timestamp, boolean, integer, numeric } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: varchar('full_name', { length: 120 }).notNull(),
  username: varchar('username', { length: 60 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 20 }).notNull().default('user'),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull()
});
export const products = pgTable('products', {
  id: serial('id').primaryKey(), code: varchar('code', { length: 40 }).notNull().unique(), name: varchar('name', { length: 150 }).notNull(),
  price: numeric('price', { precision: 12, scale: 2 }).notNull(), stock: integer('stock').notNull().default(0), lowStockThreshold: integer('low_stock_threshold').notNull().default(5), isActive: boolean('is_active').notNull().default(true), createdAt: timestamp('created_at').defaultNow().notNull()
});
export const invoices = pgTable('invoices', {
  id: serial('id').primaryKey(), userId: integer('user_id').notNull(), subtotal: numeric('subtotal', { precision: 12, scale: 2 }).notNull(), tax: numeric('tax', { precision: 12, scale: 2 }).notNull(), discount: numeric('discount', { precision: 12, scale: 2 }).notNull(), totalAmount: numeric('total_amount', { precision: 12, scale: 2 }).notNull(), paymentMethod: varchar('payment_method', { length: 20 }).notNull(), createdAt: timestamp('created_at').defaultNow().notNull()
});
export const invoiceItems = pgTable('invoice_items', {
  id: serial('id').primaryKey(), invoiceId: integer('invoice_id').notNull(), productId: integer('product_id'), productName: varchar('product_name', { length: 160 }).notNull(), quantity: integer('quantity').notNull(), price: numeric('price', { precision: 12, scale: 2 }).notNull()
});
export const activityLogs = pgTable('activity_logs', {
  id: serial('id').primaryKey(), userId: integer('user_id').notNull(), action: varchar('action', { length: 120 }).notNull(), entityType: varchar('entity_type', { length: 50 }).notNull(), entityId: integer('entity_id').notNull(), createdAt: timestamp('created_at').defaultNow().notNull()
});
