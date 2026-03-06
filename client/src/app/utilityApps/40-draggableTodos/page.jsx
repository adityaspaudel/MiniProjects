"use client";

import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";

import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";

export default function Page() {
	const [todos, setTodos] = useState([
		{ id: "1", text: "Learn Next.js" },
		{ id: "2", text: "Build Todo App" },
		{ id: "3", text: "Practice Drag and Drop" },
		{ id: "4", text: "Master React" },
	]);

	const handleDragEnd = (event) => {
		const { active, over } = event;

		if (active.id !== over.id) {
			setTodos((items) => {
				const oldIndex = items.findIndex((i) => i.id === active.id);
				const newIndex = items.findIndex((i) => i.id === over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	};

	return (
		<div className="max-w-md mx-auto mt-20">
			<h1 className="text-2xl font-bold mb-6">Draggable Todos</h1>

			<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
				<SortableContext items={todos} strategy={verticalListSortingStrategy}>
					{todos.map((todo) => (
						<SortableItem key={todo.id} todo={todo} />
					))}
				</SortableContext>
			</DndContext>
		</div>
	);
}
