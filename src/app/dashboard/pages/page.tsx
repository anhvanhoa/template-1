'use client';
import Browser from './_components/Browser';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { Components } from './_components/Components';

const Page = () => {
    return (
        <Browser>
            <div className='grid border-x border-b'>
                {/* {sections.map((section, index) => ())} */}
                <div className='p-4'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Components />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add session</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </Browser>
    );
};

export default Page;
