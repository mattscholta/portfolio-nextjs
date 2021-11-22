// import { selector } from 'recoil';

// import { cartAtom } from '@src/recoil/atoms/cart';
// import { Product } from '@src/types';

// /**
//  * @description Selectors in RecoilJS allow us to derive state from
//  * our atoms. This selector will run over all our cart items and group
//  * them by duplicate SKU's for a more consolidate UI in the Dropdown
//  * and the Bag/Cart details page.
//  */
// export const selectCartItems = selector({
//   get: ({ get }) => {
//     const cart = get(cartAtom);
//     const counts: Record<Product['id'], number> = {};
//     const items: Product[] = [];

//     /**
//      * Group items so we get a count, eventually the API will likely
//      * return a full cart on each request to help ensure our data is
//      * exactly as we'd expect it
//      */
//     cart.items.map((item) => {
//       const exists = counts[item.id] || false;
//       const value = counts[item.id] || 0;

//       counts[item.id] = value + 1;

//       if (!exists) items.push(item);
//     });

//     const data = { counts, items };

//     return data;
//   },

//   key: 'selectCartItems'
// });
