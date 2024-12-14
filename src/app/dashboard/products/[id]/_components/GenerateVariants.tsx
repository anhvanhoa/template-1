import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Settings } from 'lucide-react';
import { useFormContext, useWatch } from 'react-hook-form';
import { CreateProductType, VariantProductType } from '@/schemas/product';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const GenerateVariants = () => {
    const form = useFormContext<CreateProductType>();
    const variants = useWatch({
        control: form.control,
        name: 'variants'
    });
    const handleSelectAll = () => {
        if (variants) {
            const allActive: VariantProductType[] = variants.map((v) => ({ ...v, status: 'active' }));
            form.setValue('variants', allActive);
        }
    };
    const handleUnSelectAll = () => {
        if (variants) {
            const allActive: VariantProductType[] = variants.map((v) => ({ ...v, status: 'inactive' }));
            form.setValue('variants', allActive);
        }
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    disabled={!variants || variants.length === 0}
                    type='button'
                    className='py-1 rounded-full'
                    size={'sm'}
                >
                    <Settings />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className='sr-only'>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div>
                    <div className='space-y-3'>
                        {variants &&
                            variants.map((v, i) => (
                                <div key={v.id} className='flex items-center gap-x-4'>
                                    <FormField
                                        key={v.id}
                                        control={form.control}
                                        name={`variants.${i}.status`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Checkbox
                                                        onCheckedChange={() =>
                                                            field.onChange(
                                                                field.value === 'active' ? 'inactive' : 'active'
                                                            )
                                                        }
                                                        checked={field.value === 'active'}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <p className='text-sm bg-muted flex items-center flex-1 px-2 py-1 rounded-md space-x-2'>
                                        {v.attributes.map((item, i) => (
                                            <span key={item.id} className='flex items-center'>
                                                <span className='text-slate-600 pr-1'>{item.name}:</span>
                                                <span>
                                                    {item.value.name}
                                                    {i !== v.attributes.length - 1 && ','}
                                                </span>
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                    </div>
                    <div className='grid grid-cols-3 gap-x-2 mt-4'>
                        <Button onClick={handleSelectAll} className='col-span-2 rounded-full'>
                            Chọn tất cả
                        </Button>
                        <Button
                            onClick={handleUnSelectAll}
                            className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                            variant={'outline'}
                        >
                            Hủy chọn tất cả
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default GenerateVariants;
