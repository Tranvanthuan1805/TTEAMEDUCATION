"use client"

import { useCart } from './CartProvider'
import type { Course } from '@/lib/courses'

export function AddToCartButton({ course }: { course: Course }) {
	const { addItem } = useCart()
	return (
		<button className="btn btn-primary w-full" onClick={() => addItem(course)}>
			Thêm vào giỏ hàng
		</button>
	)
}
