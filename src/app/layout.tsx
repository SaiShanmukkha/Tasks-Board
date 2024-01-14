import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sai Shanmukkha | Tasks-Board',
  description: 'Your ToDo Lists App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{colorScheme: 'light'}} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
