import React from 'react';
import { Button } from '@/components/ui/button';
import slugify from 'slugify';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AttributeProductType, ConstProduct, CreateProductType, schemaAttributeProduct } from '@/schemas/product';
import { useForm, useFormContext, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nanoid } from 'nanoid';
import { X } from 'lucide-react';

const namesAttribute = [
    {
        id: 'ram',
        name: 'RAM'
    },
    {
        id: 'color',
        name: 'Color'
    },
    {
        id: 'size',
        name: 'Size'
    }
];

const AddAttribute = () => {
    const form = useFormContext<CreateProductType>();
    const attributes = form.watch('attributes');
    const formAttribute = useForm<AttributeProductType>({
        resolver: zodResolver(schemaAttributeProduct),
        defaultValues: {
            id: '',
            name: '',
            values: [
                {
                    id: '',
                    name: ''
                }
            ]
        },
        shouldUnregister: false,
        shouldUseNativeValidation: false
    });
    const valuesForm = useWatch({
        control: formAttribute.control,
        name: 'values'
    });
    const handleAddValue = () => {
        formAttribute.setValue('values', [
            ...valuesForm,
            {
                id: nanoid(5),
                name: ''
            }
        ]);
    };
    const handleRemoveValue = (id: string) => () => {
        if (valuesForm.length === ConstProduct.MIN_VALUE_ATTRIBUTE) return;
        formAttribute.setValue(
            'values',
            valuesForm.filter((value) => value.id !== id)
        );
    };
    const onSubmit = (data: AttributeProductType) => {
        if (!attributes) return;
        const isExist = attributes.some((attribute) => attribute.name === data.name || attribute.id === data.id);
        if (isExist) return formAttribute.setError('name', { type: 'manual', message: 'Thuộc tính đã tồn tại' });
        form.setValue('attributes', [...attributes, data]);
        formAttribute.reset();
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    disabled={attributes && attributes.length >= ConstProduct.MAX_ATTRIBUTE}
                    type='button'
                    className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                    size={'sm'}
                    variant={'outline'}
                >
                    <span>Thêm thuộc tính</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className='sr-only'>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <Form {...formAttribute}>
                    <div className='grid grid-cols-3 gap-x-2'>
                        <FormField
                            control={formAttribute.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem className='col-span-2'>
                                    <FormControl>
                                        <Input
                                            className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                            placeholder='Tên thuộc tính'
                                            {...field}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                field.onChange(value);
                                                formAttribute.setValue(
                                                    'id',
                                                    slugify(value, {
                                                        replacement: '-'
                                                    }) + nanoid(5)
                                                );
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={formAttribute.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <Select
                                        onValueChange={(value) => {
                                            const [id, name] = value.split('||');
                                            field.onChange(name);
                                            formAttribute.setValue('id', id);
                                        }}
                                        value={''}
                                    >
                                        <FormControl>
                                            <SelectTrigger className='text-sm  focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                                <SelectValue placeholder='Thuộc tính sẵn' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className='rounded-lg'>
                                            {namesAttribute.map((name) => (
                                                <SelectItem
                                                    key={name.id}
                                                    className='rounded-lg'
                                                    value={`${name.id}||${name.name}`}
                                                >
                                                    {name.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='space-y-2'>
                        {valuesForm.map((value, i) => (
                            <FormField
                                key={value.id}
                                control={formAttribute.control}
                                name={`values.${i}.name`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className='relative group'>
                                                <Input
                                                    className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                    placeholder='Giá trị'
                                                    {...field}
                                                />
                                                <X
                                                    onClick={handleRemoveValue(value.id)}
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
                    <div className='grid grid-cols-3 gap-x-2 mt-4'>
                        <Button onClick={formAttribute.handleSubmit(onSubmit)} className='col-span-2 rounded-full'>
                            Thêm thuộc tính
                        </Button>
                        <Button
                            disabled={valuesForm.length >= ConstProduct.MAX_VALUE_ATTRIBUTE}
                            onClick={handleAddValue}
                            className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                            variant={'outline'}
                        >
                            Thêm giá trị
                        </Button>
                    </div>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddAttribute;
