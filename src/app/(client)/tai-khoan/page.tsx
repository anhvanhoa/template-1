import { FormAccount } from '@/theme/account';

const Page = () => {
    return (
        <div className='pt-2 mb-4 px-20'>
            <h4 className='font-semibold text-xl'>Thông tin tài khoản</h4>
            <p className='text-sm text-gray-600 max-w-sm'>
                Quản lý thông tin cá nhân, đổi mật khẩu, cập nhật thông tin liên hệ, xem
                lịch sử đơn hàng và thông báo
            </p>
            <FormAccount />
        </div>
    );
};

export default Page;
