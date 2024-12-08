import { FormChangePass } from '@/theme/account';
import React from 'react';
const Page = () => {
    return (
        <div className='pt-2 mb-4 px-20'>
            <h4 className='font-semibold text-xl'>Đổi mật khẩu</h4>
            <p className='text-sm text-gray-600 max-w-sm'>
                Để bảo mật tài khoản, vui lòng dùng mật khẩu mạnh
            </p>
            <FormChangePass />
        </div>
    );
};

export default Page;
