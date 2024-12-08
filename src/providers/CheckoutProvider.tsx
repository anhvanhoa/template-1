'use client';
import { Action, ActionType, CartItemType, CheckoutType } from '@/types/cart';
import React, { createContext, useReducer } from 'react';

// #region ContextCart
type CheckoutContextType = [cart: CheckoutType, dispatch: (action: Action) => void];

// #region initialState
export const initialState: CheckoutType = {
    id: '',
    total: 0,
    products: [],
    cartItems: [],
    countProduct: 0,
    codeCoupon: [],
    discount: 0,
    discountCoupon: 0,
    transport: 0,
    provisional: 0,
    methodPayment: 'cod',
    methodTransport: '1',
    statusPayment: 'cod',
    address: {
        city: '',
        country: '',
        detail: '',
        name: '',
        phone: '',
        zip: '',
        email: ''
    },
    errors: {}
};

export const ContextCheckout = createContext<CheckoutContextType>([
    initialState,
    () => {}
]);

// #region handleReducer
const handleReducer = (state: CheckoutType, action: Action): CheckoutType => {
    switch (action.type) {
        case ActionType.ADD_ITEM:
            return {
                ...state,
                countProduct: state.countProduct + action.value.quantity,
                products: [...state.products, action.value.id],
                provisional:
                    state.provisional + action.value.quantity * action.value.price,
                discount:
                    state.discount -
                    (action.value.price - action.value.priceSell) * action.value.quantity,
                total: state.total + action.value.quantity * action.value.priceSell
            };
        case ActionType.REMOVE_ITEM:
            const products = state.products.filter((item) => item !== action.value.id);
            if (products.length === 0)
                return {
                    ...initialState,
                    cartItems: state.cartItems,
                    address: state.address
                };
            return {
                ...state,
                countProduct: state.countProduct - action.value.quantity,
                products,
                provisional:
                    state.provisional - action.value.quantity * action.value.price,
                discount:
                    state.discount +
                    (action.value.price - action.value.priceSell) * action.value.quantity,
                total: state.total - action.value.quantity * action.value.priceSell
            };
        case ActionType.CHANGE_QUANTITY:
            const item = state.cartItems.find((item) => item.id === action.value.id);
            if (!item) return state;
            const cartItems = state.cartItems.map((item) =>
                item.id === action.value.id
                    ? { ...item, quantity: action.value.quantity }
                    : item
            );
            if (!state.products.length) return { ...state, cartItems };
            const countProduct =
                state.countProduct + action.value.quantity - item.quantity;
            const provisional =
                state.provisional + (action.value.quantity - item.quantity) * item.price;
            const discount =
                state.discount -
                (item.price - item.priceSell) * (action.value.quantity - item.quantity);
            const total =
                state.total + (action.value.quantity - item.quantity) * item.priceSell;
            return {
                ...state,
                countProduct,
                provisional,
                discount,
                total,
                cartItems
            };
        case ActionType.CHANGE_METHOD_PAYMENT: {
            const total = state.total + (action.value.transport - state.transport);
            return {
                ...state,
                methodPayment: action.value.methodPayment,
                transport: action.value.transport,
                total
            };
        }
        case ActionType.CHANGE_ADDRESS:
            return {
                ...state,
                address: action.value
            };
        case ActionType.ADD_COUPON: {
            const isExist = state.codeCoupon.some(
                (item) => item.code === action.value.code
            );
            if (isExist) return state;
            const codeCoupon = [...state.codeCoupon, action.value];
            const total = state.total - action.value.discount;
            return {
                ...state,
                codeCoupon,
                discountCoupon: state.discountCoupon - action.value.discount,
                total
            };
        }
        case ActionType.REMOVE_COUPON: {
            const codeCoupon = state.codeCoupon.filter(
                (item) => item.code !== action.value.code
            );
            const total = state.total + action.value.discount;
            return {
                ...state,
                codeCoupon,
                discountCoupon: state.discountCoupon + action.value.discount,
                total
            };
        }
        case ActionType.SET_METHOD_PAYMENT:
            return {
                ...state,
                methodPayment: action.value
            };

        case ActionType.SET_ERROR:
            return {
                ...state,
                errors: {
                    [action.value.key]: action.value.messgae
                }
            };
        default:
            return state;
    }
};

// #region CartProvider
type CheckoutProviderProps = {
    children: React.ReactNode;
    cartItems: CartItemType[];
};

const CheckoutProvider = ({ children, cartItems }: CheckoutProviderProps) => {
    const reducer = useReducer(handleReducer, { initialState }, (init) => {
        return {
            ...init.initialState,
            cartItems
        };
    });
    return (
        <ContextCheckout.Provider value={reducer}>{children}</ContextCheckout.Provider>
    );
};

export default CheckoutProvider;
