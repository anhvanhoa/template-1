import { AddressType, CartItemType, CouponType } from "./cart";

export type OrderType = {
    cartItems: CartItemType[];
    id: string;
    countProduct: number;
    total: number;
    provisional: number; // total product cost
    discount: number; // total product costs decrease
    discountCoupon: number;
    transport: number;
    methodTransport: string;
    codeCoupon: CouponType[];
    methodPayment: string;
    address: AddressType;
    statusPayment: 'cod' | 'success' | 'pending';
    status: string;
    createdAt: string;
};
