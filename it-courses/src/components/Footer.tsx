export function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="container-page py-6 text-sm text-gray-600 flex items-center justify-between">
				<p>© {new Date().getFullYear()} IT Courses. All rights reserved.</p>
				<p className="hidden sm:block">Triển khai dễ dàng trên Vercel.</p>
			</div>
		</footer>
	)
}
