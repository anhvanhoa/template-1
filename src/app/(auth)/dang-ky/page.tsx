import Link from 'next/link';
import Image from 'next/image';
import { FormRegister } from '@/theme/auth';

const Page = () => {
    return (
        <div className='min-h-screen bg-opacity-95 relative overflow-hidden'>
            <div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: "url('/bg-login.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className='relative z-10 backdrop-blur-sm bg-black/80 h-screen'>
                <nav className='flex items-center justify-between p-6'>
                    <div className='flex items-center space-x-2'>
                        <Link href={'/'}>
                            <Image
                                src={'/logo.png'}
                                alt={'logo'}
                                width={100}
                                height={100}
                                className='size-10 rounded-lg'
                            />
                        </Link>
                    </div>
                    <div className='flex text-sm items-center space-x-6'>
                        <Link
                            className='text-white hover:text-white transition-colors'
                            href='#'
                        >
                            Trang chủ
                        </Link>
                    </div>
                </nav>
                <main className='max-w-md mx-auto px-6 pt-16'>
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <p className='text-sm text-primary uppercase'>
                                Lonely Stonie
                            </p>
                            <h1 className='text-4xl font-bold text-white'>
                                Tạo tài khoản<span className='text-primary'>.</span>
                            </h1>
                            <p className='text-gray-300'>
                                Đã có tài khoản?
                                <Link
                                    href='/dang-nhap'
                                    className='text-primary hover:underline pl-1'
                                >
                                    Đăng Nhập
                                </Link>
                            </p>
                        </div>
                        <FormRegister />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Page;
