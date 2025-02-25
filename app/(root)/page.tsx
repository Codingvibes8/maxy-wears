import ProductList from '@/components/product/ProductList'
import { getLatestProducts } from '@/lib/actions/productActions'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `${APP_NAME} - ${APP_DESCRIPTION}`,
}

export default async function Home() {
    const latestProducts = await getLatestProducts()
    return (
        <div>
            <ProductList title="Newest Arrivals" data={latestProducts} />
        </div>
    )
}