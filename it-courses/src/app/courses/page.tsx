import { courses } from '@/lib/courses'
import { CourseCard } from '@/components/CourseCard'

export const metadata = { title: 'Tất cả khóa học' }

export default function CoursesPage() {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Tất cả khóa học</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{courses.map(c => (
					<CourseCard key={c.id} course={c} />
				))}
			</div>
		</div>
	)
}
