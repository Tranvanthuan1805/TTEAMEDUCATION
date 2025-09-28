import Image from 'next/image'
import { getCourseById, formatPrice } from '@/lib/courses'
import { notFound } from 'next/navigation'
import { AddToCartButton } from '@/components/AddToCartButton'

type Props = { params: { id: string } }

export function generateMetadata({ params }: Props) {
	const { id } = params
	const course = getCourseById(id)
	if (!course) return { title: 'Khóa học' }
	return { title: course.title, description: course.description }
}

export default function CourseDetailPage({ params }: Props) {
	const { id } = params
	const course = getCourseById(id)
	if (!course) notFound()

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<div className="lg:col-span-2 space-y-4">
				<div className="relative h-64 w-full rounded-xl overflow-hidden bg-gray-100">
					<Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
				</div>
				<h1 className="text-2xl font-bold">{course.title}</h1>
				<p className="text-gray-700">{course.description}</p>
				<p className="text-sm text-gray-600">Trình độ: {course.level}</p>
			</div>
			<aside className="card p-6 h-fit space-y-4">
				<p className="text-2xl font-semibold">{formatPrice(course.price)}</p>
				<AddToCartButton course={course} />
			</aside>
		</div>
	)
}
