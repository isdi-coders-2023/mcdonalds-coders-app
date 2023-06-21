import { Discount } from '../core/discount/api';
import DISCOUNTS from '../data/discounts';
import { PersistenceService } from './PersistenceService';

export interface DiscountsService {
  getDiscounts(): Discount[];
}

export class DiscountsAPI implements DiscountsService {
  private persistenceService: PersistenceService<Discount>;

  constructor(persistenceService: PersistenceService<Discount>) {
    this.persistenceService = persistenceService;

    this.persistenceService.setItem('discounts', DISCOUNTS);
  }

  getDiscounts(): Discount[] {
    return this.persistenceService.getItems('discounts');
  }
}
