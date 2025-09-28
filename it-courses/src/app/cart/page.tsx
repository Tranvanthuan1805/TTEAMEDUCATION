"use client"

import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { formatPrice } from '@/lib/courses'

export const metadata = { title: 'Giỏ hàng' }

export default function CartPage() {
	const { items, removeItem, clear } = useCart()
	const total = items.reduce((sum, it) => sum + it.course.price * it.quantity, 0)

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>
			{items.length === 0 ? (
				<div className="text-center py-16 space-y-4">
					<p className="text-gray-600">Giỏ hàng trống.</p>
					<Link href="/courses" className="btn btn-primary">Tiếp tục mua sắm</Link>
				</div>
			) : (
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-4">
						{items.map(it => (
							<div key={it.course.id} className="card p-4 flex items-center justify-between">
								<div>
									<p className="font-semibold">{it.course.title}</p>
									<p className="text-sm text-gray-600">x{it.quantity}</p>
								</div>
								<div className="flex items-center gap-3">
									<span className="font-medium">{formatPrice(it.course.price * it.quantity)}</span>
									<button className="btn" onClick={() => removeItem(it.course.id)}>Xóa</button>
								</div>
							</div>
						))}
					</div>
					<aside className="card p-6 h-fit space-y-4">
						<p className="text-lg">Tổng: <span className="font-semibold">{formatPrice(total)}</span></p>
						<Link href="/checkout" className="btn btn-primary w-full">Tiến hành thanh toán</Link>
						<button className="btn w-full" onClick={() => clear()}>Xóa giỏ</button>
					</aside>
				</div>
			)}
		</div>
	)
}
