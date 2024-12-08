import { ContextCheckout } from '@/providers/CheckoutProvider';
import {
    ActionType,
    AddressType,
    CartItemType,
    CheckoutType,
    CouponType
} from '@/types/cart';
import { use, useCallback } from 'react';

const useCheckout = () => {
    const [checkout, dispatch] = use(ContextCheckout);
    const addItem = (value: CartItemType) => {
        dispatch({
            type: ActionType.ADD_ITEM,
            value
        });
    };
    const removeItem = (value: CartItemType) => {
        dispatch({
            type: ActionType.REMOVE_ITEM,
            value
        });
    };
    const changeQuantity = useCallback(
        (value: Pick<CartItemType, 'id' | 'quantity'>) => {
            dispatch({
                type: ActionType.CHANGE_QUANTITY,
                value
            });
        },
        [dispatch]
    );
    const setTransport = useCallback(
        (value: Pick<CheckoutType, 'methodPayment' | 'transport'>) => {
            dispatch({
                type: ActionType.CHANGE_METHOD_PAYMENT,
                value
            });
        },
        [dispatch]
    );
    const validateCustomer = useCallback(
        (key: keyof AddressType, value: string | React.ChangeEvent<HTMLInputElement>) => {
            value = typeof value === 'string' ? value : value.target.value;
            const MAX_NAME = 50;
            if (!value)
                return dispatch({
                    type: ActionType.SET_ERROR,
                    value: {
                        key,
                        messgae: ''
                    }
                });
            if (key === 'phone') {
                const regexPhoneNumber = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
                if (!regexPhoneNumber.test(value))
                    dispatch({
                        type: ActionType.SET_ERROR,
                        value: {
                            key,
                            messgae: 'Số điện thoại không hợp lệ'
                        }
                    });
                else
                    dispatch({
                        type: ActionType.SET_ERROR,
                        value: {
                            key,
                            messgae: ''
                        }
                    });
            }
            if (key === 'name') {
                if (value.length === MAX_NAME) {
                    dispatch({
                        type: ActionType.SET_ERROR,
                        value: {
                            key,
                            messgae: 'Họ & Tên không được quá 50 ký tự'
                        }
                    });
                }
            }
        },
        [dispatch]
    );
    const changeAddress = useCallback(
        (key: keyof AddressType) =>
            (value: string | React.ChangeEvent<HTMLInputElement>) => {
                validateCustomer(key, value);
                dispatch({
                    type: ActionType.CHANGE_ADDRESS,
                    value: {
                        ...checkout.address,
                        [key]: typeof value === 'string' ? value : value.target.value
                    }
                });
            },
        [checkout.address, dispatch, validateCustomer]
    );
    const addCoupon = useCallback(
        (value: CouponType) => {
            dispatch({
                type: ActionType.ADD_COUPON,
                value
            });
        },
        [dispatch]
    );
    const removeCoupon = useCallback(
        (value: CouponType) => {
            dispatch({
                type: ActionType.REMOVE_COUPON,
                value
            });
        },
        [dispatch]
    );
    const setMethodPayment = useCallback(
        (value: string) => {
            dispatch({
                type: ActionType.SET_METHOD_PAYMENT,
                value
            });
        },
        [dispatch]
    );
    return {
        checkout,
        addItem,
        removeItem,
        changeQuantity,
        setTransport,
        changeAddress,
        validateCustomer,
        addCoupon,
        removeCoupon,
        setMethodPayment
    };
};

export default useCheckout;
