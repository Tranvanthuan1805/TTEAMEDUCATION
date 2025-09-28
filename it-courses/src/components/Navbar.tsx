"use client"

import Link from 'next/link'
import { useCart } from './CartProvider'

export function Navbar() {
	const { items } = useCart()
	const count = items.reduce((sum, it) => sum + it.quantity, 0)

	return (
		<header className="border-b border-gray-200 bg-white">
			<div className="container-page h-16 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<div className="h-8 w-8 rounded bg-brand-600 text-white grid place-items-center font-bold">IT</div>
					<span className="text-lg font-semibold">IT Courses</span>
				</Link>
				<nav className="flex items-center gap-4">
					<Link href="/courses" className="text-sm text-gray-700 hover:text-gray-900">Khóa học</Link>
					<Link href="/cart" className="text-sm text-gray-700 hover:text-gray-900">Giỏ hàng ({count})</Link>
				</nav>
			</div>
		</header>
	)
}
