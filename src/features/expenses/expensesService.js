// features/expenses/expensesService.js
import { openDB } from 'idb';

const DB_NAME = 'expense-tracker';
const DB_VERSION = 1;
const EXPENSES_STORE_NAME = 'expenses';

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(EXPENSES_STORE_NAME, { keyPath: 'id', autoIncrement: true });
  },
});

export async function addExpenseToDB(expense) {
  const db = await dbPromise;
  const tx = db.transaction(EXPENSES_STORE_NAME, 'readwrite');
  const store = tx.objectStore(EXPENSES_STORE_NAME);
  await store.put(expense);
  await tx.complete;
}

export async function getExpensesFromDB() {
  const db = await dbPromise;
  const tx = db.transaction(EXPENSES_STORE_NAME, 'readonly');
  const store = tx.objectStore(EXPENSES_STORE_NAME);
  return store.getAll();
}

export async function deleteExpenseFromDB(expenseId) {
  const db = await dbPromise;
  const tx = db.transaction(EXPENSES_STORE_NAME, 'readwrite');
  const store = tx.objectStore(EXPENSES_STORE_NAME);
  await store.delete(expenseId);
  await tx.complete;
}
