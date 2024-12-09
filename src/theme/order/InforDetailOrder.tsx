import React from 'react';
import FormatPrice from '../common/FormatPrice';

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
        totalProducts: 2000000,  // Giá trị tổng sản phẩm
        subTotal: 2000000,       // Giá trị tạm tính trước giảm giá
        discount: -1734567,      // Tổng giảm giá (bao gồm giảm trực tiếp và phiếu giảm giá)
        coupon: -1234567,        // Giá trị phiếu giảm giá
        shippingFee: 50000,      // Phí vận chuyển
        totalAmount: 315433      // Tổng số tiền phải thanh toán
    }
};


const InforDetailOrder = () => {
    return (
        <div className='space-y-6'>
            <div className='space-y-2 pt-6'>
                <p className='font-medium text-sm'>Thông tin Khách hàng</p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Họ & Tên:</span>
                    <span className='text-muted-foreground capitalize'>
                        {orderDetails.customerInfo.fullName}
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Số điện thoại:</span>
                    <span className='text-muted-foreground grid text-right'>
                        {orderDetails.customerInfo.phoneNumber}
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Địa chỉ:</span>
                    <span className='text-muted-foreground grid text-right capitalize'>
                        {orderDetails.customerInfo.address.detail}
                    </span>
                </p>
            </div>
            <div className='space-y-2 border-t pt-6'>
                <p className='font-medium text-sm'>Thông tin vận chuyển</p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Phương thức vận chuyển:</span>
                    <span className='text-muted-foreground'>
                        <span className='uppercase'>
                            {orderDetails.shippingInfo.method}
                        </span>
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Người vận chuyển:</span>
                    <span className='text-muted-foreground grid text-right'>
                        <span className='capitalize'>
                            {orderDetails.shippingInfo.shipper.fullName}
                        </span>
                        <span className='capitalize'>
                            {orderDetails.shippingInfo.shipper.phoneNumber}
                        </span>
                    </span>
                </p>
            </div>
            <div className='space-y-2 border-t pt-6'>
                <p className='font-medium text-sm'>Thông tin thanh toán</p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Phương thức thanh toán:</span>
                    <span className='text-muted-foreground'>
                        <span className='uppercase'>
                            {orderDetails.paymentInfo.method}
                        </span>
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Trạng thái thanh toán:</span>
                    <span className='text-muted-foreground'>
                        <span className='uppercase'>
                            {orderDetails.paymentInfo.status}
                        </span>
                    </span>
                </p>
            </div>
            <div className='space-y-2 border-t pt-6'>
                <p className='font-medium text-sm'>Thông tin mã giảm giá</p>
                {orderDetails.discountInfo.map((discount) => (
                    <p
                        key={discount.code}
                        className='flex items-center justify-between text-sm'
                    >
                        <span className='text-muted-foreground'>{discount.code}:</span>
                        <span className='text-muted-foreground'>
                            <FormatPrice price={discount.value} />
                        </span>
                    </p>
                ))}
            </div>
            <div className='space-y-2 border-t pt-6'>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Tổng sản phẩm:</span>
                    <span className='text-muted-foreground'>
                        <FormatPrice price={orderDetails.summary.totalProducts} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Tạm tính: </span>
                    <span className='text-muted-foreground'>
                        <FormatPrice price={orderDetails.summary.totalAmount} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Giảm giá: </span>
                    <span className='text-muted-foreground'>
                        <FormatPrice price={orderDetails.summary.discount} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Phiếu giảm giá:</span>
                    <span className='text-muted-foreground'>
                        <FormatPrice price={orderDetails.summary.coupon} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Vận chuyển: </span>
                    <span className='text-muted-foreground'>
                        <FormatPrice price={orderDetails.summary.shippingFee} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span className='text-muted-foreground'>Tổng tiền: </span>
                    <span className='font-semibold text-primary'>
                        <FormatPrice price={orderDetails.summary.totalAmount} />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default InforDetailOrder;
