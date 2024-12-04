export type ProductType = {
    id: string;
    title: string;
    description?: string;
    image: string;
    slug: string;
    typeDiscount?: 'percent' | 'price';
    discount?: number;
    price?: number;
    priceSale: number;
    star?: number;
};

export type ProductDetailType = {
    id: string;
    thumbnail: string;
    images: { id: number; url: string }[];
    stars: number;
    totalReviews: number;
    price?: number;
    priceSale: number;
    typeDiscount?: 'percent' | 'price';
    discount?: number;
    name: string;
    description: string;
    quantity?: number;
    attributes?: {
        id: number;
        name: string;
        values: {
            id: number;
            name: string;
        }[];
    }[];
    variants?: {
        id: string;
        price: number;
        priceSale?: number;
        image: string;
        attributes: {
            id: number;
            name: string;
            value: {
                id: number;
                name: string;
            };
        }[];
        quantity: number;
    }[];
};
