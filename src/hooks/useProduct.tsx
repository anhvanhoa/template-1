import { ContextProduct } from '@/providers/ProductProvider';
import { useContext } from 'react';

export const useProduct = () => {
    return useContext(ContextProduct);
};
