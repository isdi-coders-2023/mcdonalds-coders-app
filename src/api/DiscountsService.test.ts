import { Discount } from "../core/discount/api";
import { DiscountsAPI, DiscountsService } from "./DiscountsService";
import { PersistenceService } from "./PersistenceService";

describe("DiscountsAPI", () => {
  let discountsService: DiscountsService;
  let persistenceService: PersistenceService<Discount>;

  beforeEach(() => {
    persistenceService = {
      getItems: jest.fn(),
      setItem: jest.fn(),
    };
    discountsService = new DiscountsAPI(persistenceService);
  });

  describe("getDiscounts", () => {
    it("should return discounts from persistence service if available", () => {
      const discounts: Discount[] = [
        {
          category: "Category",
          id: "123",
          items: [
            { title: "Item 1", img: "img1", price: 10 },
            { title: "Item 2", img: "img2", price: 20 },
          ],
        },
      ];
      (persistenceService.getItems as jest.Mock).mockReturnValue(discounts);

      const result = discountsService.getDiscounts();

      expect(persistenceService.getItems).toHaveBeenCalledWith("discounts");
      expect(result).toEqual(discounts);
    });
  });
});
