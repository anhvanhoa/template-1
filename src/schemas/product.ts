import { z } from 'zod';
import { nanoid } from 'nanoid';

export const ConstProduct = {
    MAX_VALUE_ATTRIBUTE: 5,
    MIN_VALUE_ATTRIBUTE: 1,
    MIN_ATTRIBUTE: 1,
    MAX_ATTRIBUTE: 6
};

export const schemaAttributeProduct = z.object({
    id: z.string(),
    name: z.string().min(1, {
        message: 'Tên thuộc tính không được để trống'
    }),
    values: z
        .array(
            z.object({
                id: z.string(),
                name: z.string().min(1, {
                    message: 'Tên giá trị không được để trống'
                })
            })
        )
        .min(1, {
            message: 'Giá trị không được để trống'
        })
        .max(ConstProduct.MAX_VALUE_ATTRIBUTE, {
            message: 'Giá trị không được quá 5'
        })
        .superRefine((data, ctx) => {
            // check value unique
            const values = data.map((item) => item.name);
            const unique = new Set(values).size === values.length;
            if (!unique) {
                values.forEach((value, index) => {
                    ctx.addIssue({
                        code: 'custom',
                        message: 'Giá trị không được trùng nhau',
                        path: [`[${index}].name`]
                    });
                });
            }
        })
});

export const schemaAttributeVariant = z.object({
    id: z.string(),
    name: z.string().min(1, {
        message: 'Tên thuộc tính không được để trống'
    }),
    value: z.object({
        id: z.string(),
        name: z.string().min(1, {
            message: 'Tên thuộc tính không được để trống'
        })
    })
});

export const schemaVariantProduct = z.object({
    id: z.string(),
    price: z.number().max(999999999, {
        message: 'Giá sản phẩm không được quá 999,999,999'
    }), // 999,999,999
    typeDiscount: z.enum(['fixed', 'percent', 'none']),
    discount: z
        .number()
        .min(0, {
            message: 'Giảm giá sản phẩm không được nhỏ hơn 0'
        })
        .max(999999999, {
            message: 'Giảm giá sản phẩm không được quá 999,999,999'
        })
        .optional(),
    quantity: z
        .number()
        .max(999999999, {
            message: 'Số lượng sản phẩm không được quá 999,999,999'
        })
        .min(0, {
            message: 'Số lượng sản phẩm không được nhỏ hơn 0'
        }), // 999,999,999
    attributes: z.array(schemaAttributeVariant),
    weight: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    length: z.number().optional(),
    status: z.enum(['active', 'inactive'])
});

export const schemaBonusProduct = z.object({
    id: z.string(),
    name: z.string().min(1, {
        message: 'Tên sản phẩm không được để trống'
    }),
    price: z
        .string()
        .min(1, {
            message: 'Giá sản phẩm không được để trống'
        })
        .max(999999999, {
            message: 'Giá sản phẩm không được quá 999,999,999'
        }),
    quantity: z
        .number()
        .min(0, {
            message: 'Số lượng sản phẩm không được nhỏ hơn 0'
        })
        .max(999999999, {
            message: 'Số lượng sản phẩm không được quá 999,999,999'
        }),
    status: z.enum(['active', 'inactive']),
    thumbnail: z.string().url({
        message: 'Ảnh không hợp lệ'
    })
});

export const schemaSimpleProduct = z.object({
    price: z
        .number()
        .min(1, {
            message: 'Giá sản sản phẩm không được nhỏ hơn 1'
        })
        .max(999999999, {
            message: 'Giá sản phẩm không được quá 999,999,999'
        }), // 999,999,999
    quantity: z
        .number()
        .min(1, {
            message: 'Số lượng sản phẩm không được nhỏ hơn 1'
        })
        .max(999999999, {
            message: 'Số lượng sản phẩm không được quá 999,999,999'
        }), // 999,999,999
    typeDiscount: z.enum(['fixed', 'percent', 'none']),
    discount: z
        .number()
        .max(999999999, {
            message: 'Giảm giá sản phẩm không được quá 999,999,999'
        })
        .optional(),
    weight: z
        .number()
        .max(99999, {
            message: 'Cân nặng sản phẩm không được quá 99999'
        })
        .optional(),
    width: z
        .number()
        .max(99999, {
            message: 'Chiều rộng sản phẩm không được quá 99999'
        })
        .optional(),
    height: z
        .number()
        .max(99999, {
            message: 'Chiều cao sản phẩm không được quá 99999'
        })
        .optional(),
    length: z
        .number()
        .max(99999, {
            message: 'Chiều dài sản phẩm không được quá 99999'
        })
        .optional()
});

export const schemaCreateProduct = z
    .object({
        id: z.string(),
        name: z
            .string()
            .min(1, {
                message: 'Tên sản phẩm không được để trống'
            })
            .max(255, {
                message: 'Tên sản phẩm không được quá 255 ký tự'
            }),
        thumbnail: z.string().url({
            message: 'Ảnh không hợp lệ'
        }),
        images: z
            .array(
                z.string().url({
                    message: 'Ảnh không hợp lệ'
                })
            )
            .min(2, {
                message: 'Sản phẩm cần ít nhất 2 ảnh'
            }),
        video: z
            .string()
            .url({
                message: 'video không hợp lệ'
            })
            .optional(),
        description: z.string().min(1, {
            message: 'Mô tả sản phẩm không được để trống'
        }),
        category: z.string().min(1, {
            message: 'Danh mục không được để trống'
        }),
        status: z.enum(['active', 'inactive']).default('active'),
        simple: schemaSimpleProduct.optional(),
        attributes: z
            .array(schemaAttributeProduct)
            .min(ConstProduct.MIN_ATTRIBUTE, {
                message: 'Thuộc tính ít nhất 1'
            })
            .optional(),
        variants: z.array(schemaVariantProduct).optional(),
        preOrder: z.boolean().optional().default(false),
        type: z.enum(['simple', 'variable']).default('simple'),
        condition: z.enum(['new', 'old', 'none']).default('none'),
        sku: z.string().optional(),
        isDimensions: z.boolean().optional().default(false), // dimensions of variable product
        bonus: z.array(schemaBonusProduct).optional(),
        unit: z.string().optional()
    })
    .superRefine((data, ctx) => {
        if (data.type === 'simple') {
            if (!data.simple) {
                const paths = ctx.path.concat('simple');
                ctx.addIssue({
                    code: 'custom',
                    message: 'Thông tin sản phẩm không được để trống',
                    path: paths
                });
            }
        }
    });

export const conditionProduct = [
    {
        id: 'none',
        name: 'Tình trạng hàng'
    },
    {
        id: 'new',
        name: 'Mới'
    },
    {
        id: 'old',
        name: 'Cũ'
    }
] as const;

export const statusProduct = [
    {
        id: 'active',
        name: 'Hoạt động'
    },
    {
        id: 'inactive',
        name: 'Không hoạt động'
    }
] as const;

export const typeDiscountProduct = [
    {
        id: 'fixed',
        name: 'Cố định'
    },
    {
        id: 'percent',
        name: 'Phần trăm'
    },
    {
        id: 'none',
        name: 'Không'
    }
] as const;
export type CreateProductType = z.infer<typeof schemaCreateProduct>;
export type VariantProductType = z.infer<typeof schemaVariantProduct>;
export type BonusProductType = z.infer<typeof schemaBonusProduct>;
export type SimpleProductType = z.infer<typeof schemaSimpleProduct>;
export type AttributeProductType = z.infer<typeof schemaAttributeProduct>;
export type AttributeVariantType = z.infer<typeof schemaAttributeVariant>;

export const defaultSimpleProduct: SimpleProductType = {
    price: 0,
    quantity: 0,
    discount: 0,
    typeDiscount: 'none',
    height: 0,
    length: 0,
    weight: 0,
    width: 0
};

export const defaultAttributeProduct: AttributeProductType = {
    id: nanoid(5),
    name: '',
    values: [
        {
            id: nanoid(5),
            name: ''
        }
    ]
};

export const defaultVariantProduct: VariantProductType = {
    id: nanoid(5),
    price: 0,
    quantity: 0,
    discount: 0,
    typeDiscount: 'none',
    attributes: [
        {
            id: nanoid(5),
            name: '',
            value: {
                id: nanoid(5),
                name: ''
            }
        }
    ],
    weight: 0,
    width: 0,
    height: 0,
    length: 0,
    status: 'active'
};

export const defaultCreateProduct: CreateProductType = {
    thumbnail: '',
    images: [],
    status: 'active',
    name: '',
    description: '',
    category: '',
    condition: 'none',
    preOrder: false,
    isDimensions: false,
    bonus: [],
    id: nanoid(5),
    type: 'variable',
    // simple: defaultSimpleProduct,
    attributes: [defaultAttributeProduct],
    unit: '',
    video: ''
};

export const dataFake: CreateProductType = {
    thumbnail: '/pro-1.png',
    images: ['/pro-1.png', '/pro-2.png'],
    status: 'active',
    name: 'Iphone 16 Pro Max',
    description: 'Iphone 16 Pro Max 2024',
    category: 'iphone',
    simple: {
        price: 1000,
        quantity: 20,
        discount: 10,
        typeDiscount: 'percent',
        height: 20,
        length: 30,
        weight: 0.5,
        width: 10
    },
    sku: 'SD-123',
    condition: 'new',
    preOrder: false,
    isDimensions: true,
    attributes: [
        {
            id: 'ram',
            name: 'RAM',
            values: [
                {
                    id: '8gb',
                    name: '8GB'
                },
                {
                    id: '16gb',
                    name: '16GB'
                }
            ]
        },
        {
            id: 'color',
            name: 'Color',
            values: [
                {
                    id: 'red',
                    name: 'Red'
                },
                {
                    id: 'blue',
                    name: 'Blue'
                }
            ]
        }
    ],
    variants: [
        {
            id: '1',
            price: 30000,
            quantity: 10,
            discount: 5,
            typeDiscount: 'percent',
            attributes: [
                {
                    id: 'ram',
                    name: 'RAM',
                    value: {
                        id: '8gb',
                        name: '8GB'
                    }
                },
                {
                    id: 'color',
                    name: 'Color',
                    value: {
                        id: 'red',
                        name: 'Red'
                    }
                }
            ],
            weight: 0.5,
            width: 10,
            height: 20,
            length: 30,
            status: 'active'
        },
        {
            id: '2',
            price: 1000,
            quantity: 20,
            discount: 10,
            typeDiscount: 'percent',
            attributes: [
                {
                    id: 'ram',
                    name: 'RAM',
                    value: {
                        id: '8gb',
                        name: '8GB'
                    }
                },
                {
                    id: 'color',
                    name: 'Color',
                    value: {
                        id: 'blue',
                        name: 'Blue'
                    }
                }
            ],
            weight: 0.5,
            width: 10,
            height: 20,
            length: 30,
            status: 'active'
        }
    ],
    bonus: [
        {
            id: '1',
            name: 'Tai nghe',
            price: '100',
            quantity: 10,
            status: 'active',
            thumbnail: '/pro-1.png'
        },
        {
            id: '2',
            name: 'Cáp sạc',
            price: '50',
            quantity: 20,
            status: 'active',
            thumbnail: '/pro-2.png'
        }
    ],
    id: '1',
    type: 'simple',
    unit: 'pcs',
    video: ''
};
