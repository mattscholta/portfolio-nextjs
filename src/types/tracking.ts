/**
 * @external https://developers.google.com/gtagjs/reference/ga4-events#add_to_cart_item
 * @external https://developers.google.com/gtagjs/reference/ga4-events#remove_from_cart_item
 * @description One of either "item_id" or "item_name" are required. (docs)
 * We've chosen to include both, hopefully it's just that much more useful.
 */
export type TrackingCartItem = {
  affiliation?: string;
  coupon?: string;
  currency?: string;
  discount?: number;
  index?: number;
  item_brand?: string;
  item_category?: string;
  item_category2?: string;
  item_category3?: string;
  item_category4?: string;
  item_category5?: string;
  item_id: string;
  item_list_id?: string;
  item_list_name?: string;
  item_name: string;
  item_variant?: string;
  location_id?: string;
  price?: number;
  quantity?: number;
};

export type TrackingAddToCart = {
  currency: 'USD';
  items: TrackingCartItem[];
  value: number;
};

export type TrackingBeginCheckout = {
  coupon?: string;
  currency: 'USD';
  items: TrackingCartItem[];
  value: number;
};

export type TrackingRemoveFromCart = {
  currency: 'USD';
  items: TrackingCartItem[];
  value: number;
};
