import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import React from 'react'

export default function RootLayout({
                                       children,

                                   }: {
    children: React.ReactNode

}) {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1 wrapper">{children}</main>

            <Footer />
        </div>
    )
}