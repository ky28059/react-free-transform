import type { ReactNode } from 'react'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'React free transform',
    description: 'A simple React library for touch or key-based free transform of arbitrary HTML elements.',
}

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {props.children}
            </body>
        </html>
    )
}
