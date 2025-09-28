"use client"

import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { formatPrice } from '@/lib/courses'

export const metadata = { title: 'Thanh toán' }

export default function CheckoutPage() {
	const { items, clear } = useCart()
	const total = items.reduce((sum, it) => sum + it.course.price * it.quantity, 0)
	const [loading, setLoading] = useState(false)
	const [orderId, setOrderId] = useState<string | null>(null)

	async function submitOrder() {
		setLoading(true)
		try {
			const res = await fetch('/api/order', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ items: items.map(i => ({ id: i.course.id, qty: i.quantity })) })
			})
			const data = await res.json()
			setOrderId(data.id)
			clear()
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="max-w-2xl">
			<h1 className="text-2xl font-bold mb-4">Thanh toán</h1>
			{items.length === 0 && !orderId && (
				<p className="text-gray-600">Giỏ hàng trống.</p>
			)}
			{orderId ? (
				<div className="card p-6 space-y-2">
					<p className="font-semibold">Đặt hàng thành công!</p>
					<p>Mã đơn hàng: {orderId}</p>
				</div>
			) : (
				<div className="card p-6 space-y-4">
					<ul className="space-y-1 text-sm text-gray-700">
						{items.map(it => (
							<li key={it.course.id} className="flex justify-between">
								<span>{it.course.title} x{it.quantity}</span>
								<span>{formatPrice(it.course.price * it.quantity)}</span>
							</li>
						))}
					</ul>
					<div className="flex justify-between font-semibold">
						<span>Tổng</span>
						<span>{formatPrice(total)}</span>
					</div>
					<button className="btn btn-primary w-full" onClick={submitOrder} disabled={loading || items.length === 0}>
						{loading ? 'Đang xử lý...' : 'Đặt hàng'}
					</button>
				</div>
			)}
		</div>
	)
}
