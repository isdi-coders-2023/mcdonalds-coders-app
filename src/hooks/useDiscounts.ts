import { useEffect, useState } from "react";
import { CachedDiscountsService } from "../api/CachedDiscountsService";
import { DiscountsAPI } from "../api/DiscountsService";
import { LocalPersistenceService } from "../api/PersistenceService";
import { Discount } from "../core/discount/api";

const DEFAULT_STATE: Discount[] = [{
  category: '',
  id: '',
  items: []
}]

export const useDiscounts = () => {
  const [discounts, setDiscounts] = useState<Discount[]>(DEFAULT_STATE);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchDiscounts = async () => {
      const discountsService = initDiscountsService();
      return await discountsService.getDiscounts();
    };

    fetchDiscounts()
      .then(result => {
        setDiscounts(result);
      })
      .catch(error => setError(error.message));
  }, []);

  const initDiscountsService = () => {
    const persistenceService = new LocalPersistenceService<Discount>();
    const discountsService = new DiscountsAPI(persistenceService);
    const cachedDiscountsService = new CachedDiscountsService(
      discountsService
    );

    return cachedDiscountsService;
  }

  return { discounts, error };
};
