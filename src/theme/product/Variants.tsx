'use client';
import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useProduct } from '@/hooks/useProduct';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
const Variants = () => {
    const [product] = useProduct();
    const [selectedVariant, setSelectedVariant] = useState<Record<number, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formBuy, setFormBuy] = useState({
        idProduct: product.id,
        quantity: '1'
    });

    const quantityAvailableMax = useMemo(() => {
        if (!product.variants) return product.quantity || undefined;
        const variant = product.variants.find((variant) => {
            return variant.attributes.every((attr) => {
                return selectedVariant[attr.id] === attr.value.id.toString();
            });
        });
        return variant?.quantity || undefined;
    }, [product.quantity, product.variants, selectedVariant]);

    const getAvailableValues = (attrId: number) => {
        const selectedAttrs = { ...selectedVariant };
        delete selectedAttrs[attrId];
        if (!product.variants) return new Set<string>();
        return product.variants.reduce((acc, variant) => {
            if (
                variant.quantity > 0 &&
                Object.entries(selectedAttrs).every(([key, value]) =>
                    variant.attributes.some((attr) => attr.id === Number(key) && attr.value.id === Number(value))
                )
            ) {
                const attrValue = variant.attributes.find((attr) => attr.id === attrId);
                if (attrValue) {
                    acc.add(attrValue.value.id.toString());
                }
            }
            return acc;
        }, new Set<string>());
    };

    const handleSelectVariant = (attrId: number, valueId: string) => {
        setSelectedVariant((prev) => {
            const newVariant = { ...prev };
            if (newVariant[attrId] === valueId) {
                delete newVariant[attrId];
            } else {
                newVariant[attrId] = valueId;
            }
            return newVariant;
        });
        if (Object.keys(errors).length) setErrors({});
    };

    const isValueAvailable = (attrId: number, valueId: string) => {
        if (Object.keys(selectedVariant).length === 0) return true;
        return getAvailableValues(attrId).has(valueId);
    };

    const incrementQuantity = () => {
        const quantity =
            Number(formBuy.quantity) === quantityAvailableMax ? formBuy.quantity : Number(formBuy.quantity) + 1;
        setFormBuy((prev) => ({ ...prev, quantity: quantity.toString() }));
    };
    const decrementQuantity = () => {
        const quantity = Math.max(1, Number(formBuy.quantity) - 1).toFixed(0);
        setFormBuy((prev) => ({ ...prev, quantity }));
    };

    const changeQuantity = (quantity: string) => {
        setFormBuy((prev) => ({ ...prev, quantity }));
    };

    const getProductVariantId = () => {
        if (!product.variants) return undefined;
        const variant = product.variants.find((variant) => {
            return variant.attributes.every((attr) => {
                return selectedVariant[attr.id] === attr.value.id.toString();
            });
        });
        return variant?.id;
    };

    const validateForm = () => {
        let isValid = false;
        const variantId = getProductVariantId();
        if (product.variants && product.variants.length > 0 && product.attributes && !variantId) {
            setErrors((prev) => ({
                ...prev,
                variant: 'Vui lòng chọn thuộc tính'
            }));
            isValid = true;
        }
        if (!formBuy.quantity) {
            setErrors((prev) => ({
                ...prev,
                quantity: 'Vui lòng chọn số lượng'
            }));
            isValid = true;
        }
        return isValid;
    };

    const handleBuy = () => {
        if (validateForm()) return;
        const variantId = getProductVariantId();
        console.log('Buy', formBuy, variantId);
    };

    const handleAddToCart = () => {
        if (validateForm()) return;
        const variantId = getProductVariantId();
        console.log('Buy', formBuy, variantId);
    };

    return (
        <div className={'space-y-6'}>
            <div
                className={cn('space-y-3 border border-dashed border-transparent', {
                    'border-primary rounded-lg p-3': errors.variant
                })}
            >
                {product.attributes &&
                    product.attributes.map((attr) => (
                        <div key={attr.id}>
                            <Label className='text-sm font-medium mb-2 block' id={`attr-label-${attr.id}`}>
                                {attr.name}
                            </Label>
                            <div className='grid grid-cols-5 gap-2'>
                                {attr.values.map((item) => (
                                    <Button
                                        variant={'secondary'}
                                        key={item.id}
                                        onClick={() => handleSelectVariant(attr.id, item.id.toString())}
                                        className={cn(
                                            'flex items-center justify-center rounded-lg border border-muted bg-background py-2 text-sm transition-all hover:border-primary',
                                            'cursor-pointer shadow-none font-normal hover:text-primary hover:bg-transparent',
                                            {
                                                'border-primary bg-primary/10 text-primary font-semibold':
                                                    selectedVariant[attr.id] === item.id.toString(),
                                                'pointer-events-none opacity-50': !isValueAvailable(
                                                    attr.id,
                                                    item.id.toString()
                                                )
                                            }
                                        )}
                                    >
                                        {item.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ))}
                {errors.variant && <p className='text-sm text-red-500'>{errors.variant}</p>}
            </div>
            <div>
                <Label htmlFor='quantity' className='text-sm font-medium mb-2 block'>
                    Số lượng
                </Label>
                <div
                    className={cn('space-y-3 border border-dashed border-transparent', {
                        'border-primary rounded-lg p-3': errors.quantity
                    })}
                >
                    <div className='flex items-center gap-x-4'>
                        <div
                            className={cn('inline-flex items-center gap-1 border rounded-lg px-1', {
                                'pointer-events-none opacity-50':
                                    product.attributes &&
                                    Object.keys(selectedVariant).length !== product.attributes.length
                            })}
                        >
                            <Button size='sm' variant='ghost' className='p-2' onClick={decrementQuantity}>
                                <MinusIcon />
                            </Button>
                            <Input
                                id='quantity'
                                className='w-12 py-2 text-center border-y-0 rounded-none shadow-none border-x'
                                value={formBuy.quantity}
                                onChange={(e) => {
                                    if (e.target.value === '') changeQuantity('');
                                    if (e.target.value.match(/^\d+$/))
                                        changeQuantity(Number(e.target.value).toString());
                                    if (Object.keys(errors).length) setErrors({});
                                }}
                                aria-label='Số lượng'
                            />
                            <Button size='sm' variant='ghost' className='p-2' onClick={incrementQuantity}>
                                <PlusIcon />
                            </Button>
                        </div>
                        {quantityAvailableMax !== undefined && (
                            <span className='text-sm text-muted-foreground'>
                                Còn lại {quantityAvailableMax} sản phẩm
                            </span>
                        )}
                    </div>
                    {errors.quantity && <p className='text-sm text-red-500'>{errors.quantity}</p>}
                </div>
            </div>
            <div className='flex gap-4 pt-6'>
                <Button onClick={handleBuy} size='lg' className='flex-1 py-3 rounded-full border border-primary'>
                    Mua ngay
                </Button>
                <Button
                    onClick={handleAddToCart}
                    size='lg'
                    variant='outline'
                    className='shadow-none hover:bg-primary/10 hover:text-primary border-primary rounded-full text-primary'
                >
                    Thêm vào giỏ hàng
                </Button>
            </div>
        </div>
    );
};

export default Variants;
