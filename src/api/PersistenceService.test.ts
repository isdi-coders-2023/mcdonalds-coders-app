import { LocalPersistenceService, PersistenceService } from "./PersistenceService";

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("LocalPersistenceService", () => {
  let persistenceService: PersistenceService<number>;

  beforeEach(() => {
    persistenceService = new LocalPersistenceService<number>();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe("setItem", () => {
    it("should store an item in localStorage", () => {
      const key = "testKey";
      const item = 42;

      persistenceService.setItem(key, item);

      expect(localStorage.getItem(key)).toBe(JSON.stringify(item));
    });
  });

  describe("getItems", () => {
    it("should retrieve items from localStorage", () => {
      const key = "testKey";
      const items = [1, 2, 3];

      localStorage.setItem(key, JSON.stringify(items));

      const retrievedItems = persistenceService.getItems(key);

      expect(retrievedItems).toEqual(items);
    });

    it("should return an empty array if no items are found in localStorage", () => {
      const key = "testKey";
      const retrievedItems = persistenceService.getItems(key);

      expect(retrievedItems).toEqual([]);
    });
  });
});
