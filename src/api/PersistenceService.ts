export interface PersistenceService<T> {
  getItems(key: string): T[];
  setItem(key: string, item: T | T[]): void;
}

export class LocalPersistenceService<T> implements PersistenceService<T> {
  setItem(key: string, item: T | T[]): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItems(key: string): T[] {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
}
