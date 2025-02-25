import {  ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

const Header = async () => {
  return (
    <header className="w-full border-b bg-green-100 fixed top-0 left-0 z-50">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start gap-2">
            <Image
              src="/shirt.svg"
              width={50}
              height={50}
              alt={`${APP_NAME} logo`}
            className={"rounded-2xl ring-4 ring-red-700 p-1"}/>
           <span className={'text-2xl text-red-700 font-serif font-bold'}>
             {APP_NAME}
           </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/cart">
              <ShoppingCart />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header