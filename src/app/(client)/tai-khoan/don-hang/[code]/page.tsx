import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import StatusOrder from '@/theme/order/StatusOrder';
import FormatPrice from '@/theme/common/FormatPrice';
import { TreeViewElement } from '@/components/ui/file-tree';
import TrackOrder from '@/theme/order/TrackOrder';
import InforDetailOrder from '@/theme/order/InforDetailOrder';
import CartItem from '@/theme/cart/CartItem';
import { CartItemType } from '@/types/cart';

type TrackOrderType = {
    icon?: React.ReactNode;
    time: string;
    note: string;
} & TreeViewElement;

const tracks: TrackOrderType[] = [
    {
        id: '2',
        isSelectable: true,
        name: 'Đã giao',
        note: 'Đã giao hàng thành công tại địa chỉ của bạn',
        time: '13/09/2023 5:23 pm'
    },
    {
        id: '1',
        isSelectable: false,
        name: 'Đang giao',
        note: 'Đang giao hàng tại địa chỉ của bạn',
        time: '13/09/2023 4:15 pm'
    },
    {
        id: '3',
        isSelectable: true,
        name: 'Chờ xác nhận',
        note: 'Đơn hàng đang chờ xác nhận từ người bán',
        time: '13/09/2023 3:00 pm'
    },
    {
        id: '5',
        isSelectable: false,
        name: 'Đang xử lý',
        note: 'Đơn hàng đang được xử lý và chuẩn bị vận chuyển',
        time: '12/09/2023 9:00 am'
    },
    {
        id: '6',
        isSelectable: false,
        name: 'Đã thanh toán',
        note: 'Đơn hàng đã được thanh toán thành công',
        time: '11/09/2023 8:45 am'
    }
];

const cartItems: CartItemType[] = [
    {
        id: 1,
        name: 'MacBook Air 13 inch với chip M2',
        priceSell: 24999000,
        price: 26999000,
        image: '/pro-1.png',
        quantity: 2,
        quantityMax: 10,
        variant: [
            {
                id: 1,
                name: 'Màu',
                value: 'trắng'
            },
            {
                id: 2,
                name: 'RAM',
                value: '8GB'
            }
        ]
    },
    {
        id: 3,
        name: 'IMac 24 inch với chip M1',
        priceSell: 14999000,
        price: 18999000,
        image: '/pro-1.png',
        quantity: 1,
        quantityMax: 22,
        variant: [
            {
                id: 1,
                name: 'Màu',
                value: 'đen'
            },
            {
                id: 2,
                name: 'RAM',
                value: '16GB'
            }
        ]
    },
    {
        id: 4,
        name: 'IMac 24 inch với chip M4',
        priceSell: 34999000,
        price: 40999000,
        image: '/pro-2.png',
        quantity: 3,
        quantityMax: 22,
        variant: [
            {
                id: 1,
                name: 'Màu',
                value: 'đen'
            },
            {
                id: 2,
                name: 'RAM',
                value: '16GB'
            }
        ]
    },
    {
        id: 2,
        name: 'IMac 24 inch với chip M2',
        priceSell: 36999000,
        price: 39999000,
        image: '/pro-2.png',
        quantity: 3,
        quantityMax: 22,
        variant: [
            {
                id: 1,
                name: 'Màu',
                value: 'đen'
            },
            {
                id: 2,
                name: 'RAM',
                value: '16GB'
            }
        ]
    }
];
const orderDetails = {
    customerInfo: {
        fullName: 'Nguyễn Thành Công',
        phoneNumber: '0977 123 456',
        address: {
            detail: 'Số 1 - Đại Cồ Việt',
            city: 'Hà Nội'
        }
    },
    shippingInfo: {
        method: 'Nhanh',
        shipper: {
            fullName: 'Nguyễn Thành Công',
            phoneNumber: '0977 123 456'
        }
    },
    paymentInfo: {
        method: 'COD',
        status: 'Thành công'
    },
    discountInfo: [
        {
            code: 'ABCDEF',
            value: -1234567
        },
        {
            code: 'GHIJKL',
            value: -500000
        }
    ],
    summary: {
        totalProducts: 2000000, // Giá trị tổng sản phẩm
        subTotal: 2000000, // Giá trị tạm tính trước giảm giá
        discount: -1734567, // Tổng giảm giá (bao gồm giảm trực tiếp và phiếu giảm giá)
        coupon: -1234567, // Giá trị phiếu giảm giá
        shippingFee: 50000, // Phí vận chuyển
        totalAmount: 315433 // Tổng số tiền phải thanh toán
    }
};

export default function OrderTracking() {
    return (
        <div className='pt-2 mb-4 px-20'>
            <Card className='border-none shadow-none'>
                <CardHeader className='space-y-4 pt-0'>
                    <div className='flex justify-between items-center gap-4'>
                        <div>
                            <h1 className='text-xl font-semibold'>Đơn hàng #5913</h1>
                            <p className='text-sm text-muted-foreground'>
                                Ngày đặt: 12/12/2004
                            </p>
                        </div>
                        <div className='space-x-3 flex items-center'>
                            <Button
                                size={'sm'}
                                className='py-2 rounded-full border border-primary'
                            >
                                Nhận hàng
                            </Button>
                            <Button
                                variant={'outline'}
                                size={'sm'}
                                className='py-2 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                            >
                                Hủy đơn hàng
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant='outline'
                                        size='icon'
                                        className='focus-visible:ring-0 rounded-full'
                                    >
                                        <MoreHorizontal className='h-4 w-4' />
                                        <span className='sr-only'>More actions</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align='end'
                                    className='border-none rounded-xl'
                                >
                                    <DropdownMenuItem className='rounded-xl'>
                                        Tải hóa đơn
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='flex items-center justify-between text-sm'>
                            <span className='text-muted-foreground'>Trạng thái:</span>
                            <StatusOrder status='Đã giao' />
                        </p>
                        <p className='flex items-center justify-between text-sm'>
                            <span className='text-muted-foreground'>
                                Phương thức thanh toán:
                            </span>
                            <span>
                                <span className='uppercase text-muted-foreground'>
                                    {orderDetails.paymentInfo.method}
                                </span>
                            </span>
                        </p>
                        <p className='flex items-center justify-between text-sm'>
                            <span className='text-muted-foreground'>Số sản phẩm:</span>
                            <span>
                                <span className='uppercase text-muted-foreground'>
                                    {cartItems.length}
                                </span>
                            </span>
                        </p>
                        <p className='flex items-center justify-between text-sm'>
                            <span className='text-muted-foreground'>Tổng tiền:</span>
                            <span className='text-primary font-medium'>
                                <FormatPrice price={orderDetails.summary.totalAmount} />
                            </span>
                        </p>
                    </div>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue='status' className='w-full'>
                        <TabsList className='w-full justify-start border-b rounded-none h-auto p-0 bg-transparent'>
                            <TabsTrigger
                                value='status'
                                className='w-full rounded-none border-b-2 border-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent'
                            >
                                Trạng thái đơn hàng
                            </TabsTrigger>
                            <TabsTrigger
                                value='infor'
                                className='w-full rounded-none border-b-2 border-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent'
                            >
                                Thông tin đơn hàng
                            </TabsTrigger>
                            <TabsTrigger
                                value='products'
                                className='w-full rounded-none border-b-2 border-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent'
                            >
                                Sản phẩm
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value='status' className='border-none p-0 mt-6'>
                            <TrackOrder tracks={tracks} />
                        </TabsContent>
                        <TabsContent value='infor' className='border-none p-0 mt-6'>
                            <InforDetailOrder />
                        </TabsContent>
                        <TabsContent value='products' className='border-none p-0 mt-6'>
                            <div className='space-y-4 mt-4'>
                                {cartItems.map((product) => (
                                    <CartItem
                                        isOrder
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
