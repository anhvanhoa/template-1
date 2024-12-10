'use client';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { UploadIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function UploadImage() {
    const [isDrag, setIsDrag] = useState(false);
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log(e.dataTransfer.files);
    };
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
    };
    return (
        <div
            onDragOver={(e) => {
                e.preventDefault();
                setIsDrag(true);
            }}
            onDragLeave={() => setIsDrag(false)}
            onDrop={handleDrop}
            className={cn('relative size-full border border-dashed rounded-lg', {
                'border-primary bg-primary/10 text-primary': isDrag
            })}
        >
            <div className='size-full'>
                <Label
                    htmlFor='upload'
                    className='w-full absolute inset-0 flex items-center justify-center hover:text-muted-foreground font-normal cursor-pointer'
                >
                    <UploadIcon size={24} />
                </Label>
                <Input
                    id='upload'
                    type='file'
                    accept='image/*'
                    multiple={false}
                    className='hidden'
                    onChange={handleFileInput}
                />
            </div>
        </div>
    );
}
