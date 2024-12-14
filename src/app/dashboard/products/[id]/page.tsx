'use client';
import * as React from 'react';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CreateProductType, defaultCreateProduct, schemaCreateProduct } from '@/schemas/product';
import Basic from './_components/Basic';
import Attributes from './_components/Attributes';
import Variants from './_components/Variants';
import MediaProduct from './_components/MediaProduct';
import Dimensions from './_components/Dimensions';
import Orther from './_components/Orther';

export default function ProductForm() {
    const form = useForm<CreateProductType>({
        resolver: zodResolver(schemaCreateProduct),
        defaultValues: defaultCreateProduct,
    });
    return (
        <div className='bg-background py-3 lg:py-6 lg:px-3 rounded-xl'>
            <Form {...form}>
                <form method='POST' className='space-y-6'>
                    <div className='grid lg:grid-cols-3 gap-2'>
                        <div className='space-y-4 col-span-2'>
                            <Basic />
                            <Attributes />
                            <Variants />
                        </div>
                        <div className='space-y-6 px-3 col-span-2 lg:col-span-1'>
                            <MediaProduct />
                            <Dimensions />
                            <Orther />
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
