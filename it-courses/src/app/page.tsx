import Link from 'next/link'
import { courses } from '@/lib/courses'
import { CourseCard } from '@/components/CourseCard'

export default function HomePage() {
	return (
		<div className="space-y-10">
			<section className="text-center py-8">
				<h1 className="text-3xl sm:text-4xl font-bold">Học lập trình hiện đại</h1>
				<p className="mt-3 text-gray-600">Khóa học chất lượng, cập nhật liên tục, triển khai dễ trên Vercel.</p>
				<div className="mt-6 flex items-center justify-center gap-3">
					<Link href="/courses" className="btn btn-primary">Xem khóa học</Link>
					<a href="https://vercel.com" target="_blank" rel="noreferrer" className="btn btn-outline">Deploy trên Vercel</a>
				</div>
			</section>
			<section>
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-semibold">Khóa học nổi bật</h2>
					<Link href="/courses" className="text-sm text-brand-700 hover:underline">Xem tất cả</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{courses.map(c => (
						<CourseCard key={c.id} course={c} />
					))}
				</div>
			</section>
		</div>
	)
}
