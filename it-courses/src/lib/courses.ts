export type Course = {
	id: string
	title: string
	description: string
	level: 'Beginner' | 'Intermediate' | 'Advanced'
	price: number
	badge?: string
	thumbnail: string
}

export const courses: Course[] = [
	{
		id: 'nextjs-pro',
		title: 'Next.js Pro: Xây dựng ứng dụng production',
		description: 'Tối ưu hiệu năng, SEO, server actions, và deploy lên Vercel.',
		level: 'Intermediate',
		price: 990000,
		badge: 'Bán chạy',
		thumbnail: '/images/next-pro.svg'
	},
	{
		id: 'typescript-101',
		title: 'TypeScript 101: Từ cơ bản đến nâng cao',
		description: 'Kiểu dữ liệu, generics, module resolution và best practices.',
		level: 'Beginner',
		price: 690000,
		thumbnail: '/images/ts-101.svg'
	},
	{
		id: 'react-performance',
		title: 'React Performance: useMemo, concurrency, profiling',
		description: 'Nâng cao FPS, tối ưu rendering, tránh re-renders không cần thiết.',
		level: 'Advanced',
		price: 1190000,
		thumbnail: '/images/react-perf.svg'
	}
]

export function getCourseById(id: string): Course | undefined {
	return courses.find(c => c.id === id)
}

export function formatPrice(vnd: number): string {
	return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(vnd)
}
