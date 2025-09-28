"use client"

import Link from 'next/link'
import Image from 'next/image'
import type { Course } from '@/lib/courses'
import { formatPrice } from '@/lib/courses'
import { useCart } from './CartProvider'

export function CourseCard({ course }: { course: Course }) {
	const { addItem } = useCart()
	return (
		<div className="card overflow-hidden">
			<div className="relative h-44 w-full bg-gray-100">
				<Image src={course.thumbnail} alt={course.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
				{course.badge && (
					<span className="absolute left-2 top-2 badge bg-brand-600 text-white">{course.badge}</span>
				)}
			</div>
			<div className="p-4 space-y-2">
				<Link href={`/courses/${course.id}`} className="block text-base font-semibold hover:underline">
					{course.title}
				</Link>
				<p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
				<div className="flex items-center justify-between pt-2">
					<span className="font-semibold text-gray-900">{formatPrice(course.price)}</span>
					<button className="btn btn-primary" onClick={() => addItem(course)}>Thêm vào giỏ</button>
				</div>
			</div>
		</div>
	)
}
