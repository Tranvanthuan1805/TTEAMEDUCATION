"use client"

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Course } from '@/lib/courses'

export type CartItem = {
	course: Course
	quantity: number
}

type CartContextType = {
	items: CartItem[]
	addItem: (course: Course) => void
	removeItem: (courseId: string) => void
	clear: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const STORAGE_KEY = 'it-courses.cart.v1'

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([])

	useEffect(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY)
			if (raw) setItems(JSON.parse(raw))
		} catch {}
	}, [])

	useEffect(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
		} catch {}
	}, [items])

	const value = useMemo<CartContextType>(() => ({
		items,
		addItem: (course: Course) => {
			setItems(prev => {
				const exists = prev.find(it => it.course.id === course.id)
				if (exists) {
					return prev.map(it => it.course.id === course.id ? { ...it, quantity: it.quantity + 1 } : it)
				}
				return [...prev, { course, quantity: 1 }]
			})
		},
		removeItem: (courseId: string) => {
			setItems(prev => prev.filter(it => it.course.id !== courseId))
		},
		clear: () => setItems([])
	}), [items])

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
	const ctx = useContext(CartContext)
	if (!ctx) throw new Error('useCart must be used within CartProvider')
	return ctx
}
