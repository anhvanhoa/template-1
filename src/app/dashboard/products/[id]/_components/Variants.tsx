import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreateProductType, typeDiscountProduct } from '@/schemas/product';
import { Trash, X } from 'lucide-react';
import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const Variants = () => {
    const form = useFormContext<CreateProductType>();
    const variants = useWatch({
        control: form.control,
        name: 'variants'
    });
    const type = useWatch({
        control: form.control,
        name: 'type'
    });
    const isDimensions = form.getValues('isDimensions');
    return (
        <div>
            {type === 'variable' &&
                variants &&
                variants.map((variant, i) => (
                    <div key={variant.id}>
                        {variant.status === 'active' && (
                            <Card className='shadow-none m-3'>
                                <CardContent className='p-4'>
                                    <div className='flex items-center mb-4 justify-between'>
                                        <h2 className='line-clamp-1 text-base font-semibold'>
                                            Sản phẩm thuộc tính {i + 1}
                                        </h2>
                                        <div className='flex items-center gap-2'>
                                            <p className='bg-muted px-2 py-1 rounded-md space-x-1 text-sm'>
                                                {variant.attributes.map((item, i) => (
                                                    <span key={item.name}>
                                                        <span className='text-slate-600 pr-1'>{item.name}:</span>
                                                        <span>
                                                            {item.value.name}
                                                            {i !== variant.attributes.length - 1 && ','}
                                                        </span>
                                                    </span>
                                                ))}
                                            </p>
                                            <FormField
                                                control={form.control}
                                                name={`variants.${i}.status`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Button
                                                                onClick={() => field.onChange('inactive')}
                                                                type='button'
                                                                variant={'secondary'}
                                                                size='icon'
                                                                className='rounded-full'
                                                            >
                                                                <Trash className='text-red-600' />
                                                            </Button>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className='grid sm:grid-cols-2 gap-4'>
                                        <FormField
                                            control={form.control}
                                            name={`variants.${i}.price`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            type='number'
                                                            placeholder='Giá tiền'
                                                            className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            {...field}
                                                            value={field.value || ''}
                                                            onChange={(e) =>
                                                                field.onChange(Number(e.target.value) || 0)
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name={`variants.${i}.quantity`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            type='number'
                                                            placeholder='Số lượng'
                                                            {...field}
                                                            value={field.value || ''}
                                                            onChange={(e) =>
                                                                field.onChange(Number(e.target.value) || 0)
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name={`variants.${i}.discount`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            type='number'
                                                            placeholder='Giảm giá'
                                                            {...field}
                                                            value={field.value || ''}
                                                            onChange={(e) =>
                                                                field.onChange(Number(e.target.value) || 0)
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name={`variants.${i}.typeDiscount`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className='text-sm focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                                                <SelectValue placeholder='Loại giảm giá' />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className='rounded-lg'>
                                                            {typeDiscountProduct.map((type) => (
                                                                <SelectItem
                                                                    key={type.id}
                                                                    className='rounded-lg'
                                                                    value={type.id}
                                                                >
                                                                    {type.name}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        {isDimensions && (
                                            <>
                                                <FormField
                                                    control={form.control}
                                                    name={`variants.${i}.weight`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input
                                                                    className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                    placeholder='Cân nặng'
                                                                    value={field.value || ''}
                                                                    onChange={(e) =>
                                                                        field.onChange(Number(e.target.value) || 0)
                                                                    }
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className='flex items-center gap-x-1'>
                                                    <FormField
                                                        control={form.control}
                                                        name={`variants.${i}.width`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormControl>
                                                                    <Input
                                                                        className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                        placeholder='R'
                                                                        {...field}
                                                                        value={field.value || ''}
                                                                        onChange={(e) =>
                                                                            field.onChange(Number(e.target.value) || 0)
                                                                        }
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <X className='sm:size-10 text-muted-foreground' />
                                                    <FormField
                                                        control={form.control}
                                                        name={`variants.${i}.height`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormControl>
                                                                    <Input
                                                                        className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                        placeholder='D'
                                                                        {...field}
                                                                        value={field.value || ''}
                                                                        onChange={(e) =>
                                                                            field.onChange(Number(e.target.value) || 0)
                                                                        }
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <X className='sm:size-10 text-muted-foreground' />
                                                    <FormField
                                                        control={form.control}
                                                        name={`variants.${i}.length`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormControl>
                                                                    <Input
                                                                        className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                        placeholder='C'
                                                                        {...field}
                                                                        value={field.value || ''}
                                                                        onChange={(e) =>
                                                                            field.onChange(Number(e.target.value) || 0)
                                                                        }
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Variants;
