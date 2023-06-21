import { Discount } from "../core/discount/api";
import { DiscountsService } from "./DiscountsService";

export class CachedDiscountsService implements DiscountsService {
  private discountsService: DiscountsService;
  private discounts: Discount[] | undefined;

  constructor(discountsService: DiscountsService) {
    this.discountsService = discountsService;
  }

  getDiscounts(): Discount[] {
    if (!this.discounts) this.discounts = this.discountsService.getDiscounts();

    return this.discounts;
  }
}
