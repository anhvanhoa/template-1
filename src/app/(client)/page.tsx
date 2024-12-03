import Banner, { BannerFooter } from '@/theme/banner';
import HomePosts from '@/theme/posts/HomePosts';
import { HomeProduct } from '@/theme/product';

export default async function Home() {
    return (
        <main>
            <Banner />
            <HomeProduct />
            <HomePosts />
            <BannerFooter />
        </main>
    );
}
