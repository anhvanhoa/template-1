import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    CreateProductType,
    defaultAttributeProduct,
    ConstProduct,
    defaultSimpleProduct,
    defaultVariantProduct
} from '@/schemas/product';
import { Plus, Trash, X } from 'lucide-react';
import React, { useEffect, useMemo } from 'react';
import { ControllerRenderProps, useFormContext, useWatch } from 'react-hook-form';
import Simple from './Simple';
import AddAttribute from './AddAttribute';
import GenerateVariants from './GenerateVariants';
import { CombinationItem, updateCombinations } from '@/lib/helper';
import { cn } from '@/lib/utils';
import { nanoid } from 'nanoid';
import { useDebounceValue } from 'usehooks-ts';

const Attributes = () => {
    const form = useFormContext<CreateProductType>();
    const attributes = useWatch({
        control: form.control,
        name: 'attributes'
    });
    const variants = useWatch({
        control: form.control,
        name: 'variants'
    });
    const [attr] = useDebounceValue(attributes, 500);
    const productVariants = useMemo(() => {
        if (!attr || attr.length === 0) return [];
        if (!variants || !!variants.length) return updateCombinations([], attr);
        const existingItems: CombinationItem[] = variants.map((v) => ({ id: v.id, attributes: v.attributes }));
        return updateCombinations(existingItems, attr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [attr]);
    const type = useWatch({
        control: form.control,
        name: 'type'
    });
    const changeType = (field: ControllerRenderProps<CreateProductType>) => () => {
        field.onChange(type === 'variable' ? 'simple' : 'variable');
        if (type === 'variable') {
            form.setValue('simple', defaultSimpleProduct);
            form.setValue('variants', undefined);
            form.setValue('attributes', undefined);
        }
        if (type === 'simple') {
            form.setValue('attributes', [defaultAttributeProduct]);
            form.setValue('simple', undefined);
        }
    };
    const handleRemoveValue = (i: number, iV: number) => () => {
        if (!attributes) return;
        form.setValue(
            'attributes',
            attributes.map((a, index) => {
                if (index === i) {
                    if (a.values.length <= ConstProduct.MIN_VALUE_ATTRIBUTE) return a;
                    const values = a.values.filter((v, indexV) => indexV !== iV);
                    return {
                        ...a,
                        values
                    };
                }
                return a;
            })
        );
    };
    const handleAddValue = (i: number) => () => {
        if (!attributes) return;
        const newAttributes = attributes.map((a, index) => {
            if (index === i) {
                if (a.values.length >= ConstProduct.MAX_VALUE_ATTRIBUTE) return a;
                const values = [...a.values, { id: nanoid(5), name: '' }];
                return {
                    ...a,
                    values
                };
            }
            return a;
        });
        form.setValue('attributes', newAttributes);
    };
    const handleRemoveAttribute = (i: number) => () => {
        if (!attributes) return;
        if (attributes.length <= ConstProduct.MIN_ATTRIBUTE) return;
        form.setValue(
            'attributes',
            attributes.filter((_, index) => index !== i)
        );
    };
    useEffect(() => {
        if (productVariants.length === 0) {
            form.setValue('variants', undefined);
            return;
        }
        // auto generate variant product
        const newVariants = productVariants.map((v) => {
            const variantDefault = { ...defaultVariantProduct, attributes: v.attributes, id: v.id };
            if (!variants) return variantDefault;
            const item = variants.find((i) => i.id === v.id);
            if (item) return item;
            return variantDefault;
        });
        form.setValue('variants', newVariants);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form, productVariants]);
    return (
        <Card className='shadow-none border-none'>
            <CardContent className='px-3'>
                <div className='flex items-center justify-between mb-3'>
                    <h2 className='line-clamp-1 text-base font-semibold'>Thông tin bán hàng</h2>
                    <div className='space-x-2 flex items-center'>
                        <FormField
                            control={form.control}
                            name='type'
                            render={({ field }) => (
                                <FormItem
                                    title='biến thể | đơn giản'
                                    className='flex items-center space-y-0 gap-1 justify-between'
                                >
                                    {field.value === 'variable' && (
                                        <>
                                            <AddAttribute />
                                            <GenerateVariants />
                                        </>
                                    )}
                                    <FormControl>
                                        <div
                                            onClick={changeType(field)}
                                            className={cn('p-1 rounded-full cursor-pointer', {
                                                'bg-green-600/30': field.value === 'simple',
                                                'bg-primary/30': field.value === 'variable'
                                            })}
                                        >
                                            <div
                                                className={cn('p-2.5 rounded-full', {
                                                    'bg-green-600': field.value === 'simple',
                                                    'bg-primary': field.value === 'variable'
                                                })}
                                            ></div>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                {type === 'simple' && <Simple />}
                {type === 'variable' && (
                    <div className='grid sm:grid-cols-2 gap-3'>
                        {attributes &&
                            attributes.map((attribute, i) => (
                                <div key={attribute.id} className='border p-4 rounded-xl'>
                                    <div className='flex items-center justify-between gap-x-2'>
                                        <FormField
                                            control={form.control}
                                            name={`attributes.${i}.name`}
                                            render={({ field, fieldState, formState }) => {
                                                return (
                                                    <FormItem className='flex-1'>
                                                        <FormControl>
                                                            <div className='flex items-center gap-x-2'>
                                                                <Input
                                                                    className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                    placeholder='Tên thuộc tính'
                                                                    {...field}
                                                                />
                                                                <Button
                                                                    disabled={
                                                                        attribute.values.length >=
                                                                        ConstProduct.MAX_VALUE_ATTRIBUTE
                                                                    }
                                                                    onClick={handleAddValue(i)}
                                                                    type='button'
                                                                    variant={'secondary'}
                                                                    size='icon'
                                                                    className='rounded-full shrink-0'
                                                                >
                                                                    <Plus />
                                                                </Button>
                                                                <Button
                                                                    disabled={
                                                                        attributes.length <= ConstProduct.MIN_ATTRIBUTE
                                                                    }
                                                                    onClick={handleRemoveAttribute(i)}
                                                                    type='button'
                                                                    variant={'secondary'}
                                                                    size='icon'
                                                                    className='rounded-full shrink-0'
                                                                >
                                                                    <Trash className='text-red-600' />
                                                                </Button>
                                                            </div>
                                                        </FormControl>
                                                        <div className='flex items-center'>
                                                            <FormMessage />
                                                            {!fieldState.error?.message &&
                                                                formState.errors?.attributes &&
                                                                formState.errors?.attributes[i]?.values && (
                                                                    <span className='font-medium text-[13px] text-red-500'>
                                                                        {
                                                                            formState.errors?.attributes[i]?.values.root
                                                                                ?.message
                                                                        }
                                                                    </span>
                                                                )}
                                                        </div>
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className='mt-2 grid gap-2'>
                                        {attribute.values.map((value, iV) => (
                                            <FormField
                                                key={value.id}
                                                control={form.control}
                                                name={`attributes.${i}.values.${iV}.name`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <div className='relative group'>
                                                                <Input
                                                                    className='text-sm flex-1 focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                    placeholder='Giá trị'
                                                                    {...field}
                                                                />
                                                                <X
                                                                    onClick={handleRemoveValue(i, iV)}
                                                                    className='left-full bg-background rounded-full border border-muted p-0.5 -translate-x-1/2 absolute bottom-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-all cursor-pointer size-4'
                                                                />
                                                            </div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default Attributes;
