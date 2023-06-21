import { Discount } from "../core/discount/api";
import { CachedDiscountsService } from "./CachedDiscountsService";
import { DiscountsService } from "./DiscountsService";

describe("CachedDiscountsService", () => {
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
  let discountsService: DiscountsService;
  let cachedDiscountsService: DiscountsService;

  beforeEach(() => {
    discountsService = {
      getDiscounts: jest.fn(),
    };
    cachedDiscountsService = new CachedDiscountsService(discountsService);
  });

  describe("getDiscounts", () => {
    it("should return cached discounts if available", () => {
      (discountsService.getDiscounts as jest.Mock).mockReturnValue(discounts);

      const result = cachedDiscountsService.getDiscounts();

      expect(discountsService.getDiscounts).toHaveBeenCalled();
      expect(result).toEqual(discounts);
    });

    it("should call underlying service and cache the discounts if not available", () => {
      (discountsService.getDiscounts as jest.Mock).mockReturnValue(discounts);

      const result1 = cachedDiscountsService.getDiscounts();
      const result2 = cachedDiscountsService.getDiscounts();

      expect(discountsService.getDiscounts).toHaveBeenCalledTimes(1);
      expect(result1).toEqual(discounts);
      expect(result2).toEqual(discounts);
    });
  });
});
