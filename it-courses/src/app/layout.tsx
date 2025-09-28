import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CartProvider } from '@/components/CartProvider'

export const metadata: Metadata = {
	title: 'IT Courses - Học lập trình hiện đại',
	description: 'Website bán khóa học IT, sẵn sàng deploy lên Vercel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="vi">
			<body>
				<CartProvider>
					<div className="min-h-dvh flex flex-col">
						<Navbar />
						<main className="flex-1 py-8">
							<div className="container-page">
								{children}
							</div>
						</main>
						<Footer />
					</div>
				</CartProvider>
			</body>
		</html>
	)
}
