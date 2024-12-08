import Share from '@/theme/posts/Share';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const posts = {
    categories: [
        {
            id: 1,
            name: 'Sản phẩm mới',
            slug: 'san-pham-moi'
        },
        {
            id: 2,
            name: 'Review sản phẩm',
            slug: 'review-san-pham'
        }
    ],
    title: '#2024withBinance: Tổng kết hành trình Crypto năm qua của bạn – Các cột mốc, sự đổi mới và cộng đồng',
    thumbnail: '/posts.png',
    content: `
    <p>
        <strong>
            Đầu tư vào Bitcoin và các loại tiền điện tử khác
        </strong>{' '}
        có thể mang lại lợi nhuận cao nhưng cũng rất rủi ro. Đây không
        phải là một lời khuyên đầu tư. Bạn nên tìm hiểu và hiểu rõ về
        tất cả rủi ro trước khi quyết định đầu tư.
    </p>
    <p>
        Kỷ niệm một năm bứt phá của Binance với khối lượng giao dịch
        100 nghìn tỷ USD và hơn 240 triệu người dùng trên toàn thế
        giới, cùng chúng tôi xây dựng tương lai của crypto.
    </p>
    <p>
        Trải nghiệm bản tổng kết Nhìn lại một năm mà chúng tôi thiết
        kế dành riêng cho bạn trên app hoặc website chính thức của
        Binance. Đây là cách tuyệt vời để bạn nhìn lại những con số,
        những cột mốc quan trọng và hoạt động từ bạn đã giúp định hình
        cộng đồng Binance như thế nào.
    </p>
    <p>
        Năm 2024 đang đi đến những ngày tháng cuối cùng, chúng ta hãy
        dành một chút thời gian để nhìn lại một năm đầy những sự kiện
        đáng nhớ nhé! Từ các cột mốc quan trọng cho đến các sản phẩm
        đổi mới, bài blog lần này sẽ là tổng kết của những khoảnh khắc
        định hình năm 2024 của Binance và cộng đồng của chúng ta
    </p>
    <p>
        Bắt đầu từ ngày 3/12, bạn cũng sẽ có thể xem bản Nhìn lại năm
        2024 được chúng tôi thiết kế dành riêng cho mỗi người dùng
        trên app hoặc web của Binance. Kỷ niệm hành trình của bạn,
        nhìn lại các cột mốc và đóng góp của bản thân như thế nào cho
        một năm đáng chú ý.
    </p>
    `
};

const page = () => {
    return (
        <div>
            <Share />
            <div className='mx-auto max-w-screen-lg px-4 pt-12'>
                <div className='flex items-center justify-center'>
                    <p className='text-sm text-center text-gray-600 rounded-full border px-4 py-1'>
                        Xuất bản ngày 12, tháng 6, 2021
                    </p>
                </div>
                <div>
                    <h1 className='text-center text-4xl font-semibold py-6 leading-[3rem] text-pretty'>
                        {posts.title}
                    </h1>
                    <div className='flex items-center gap-x-3 justify-center'>
                        {posts.categories.map((category) => (
                            <Link
                                className='text-xs bg-muted px-2 py-1 rounded-lg'
                                key={category.id}
                                href={category.slug}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                    <div className='max-w-screen-md mx-auto'>
                        <Image
                            src={posts.thumbnail}
                            alt={posts.title}
                            width={800}
                            height={400}
                            className='w-full rounded-2xl object-cover my-8 aspect-video'
                        />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: posts.content }}
                        className='*:leading-8 *:text-pretty *:my-4 max-w-screen-md mx-auto'
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default page;
