"use client";
import { useState } from "react";

export default function ValentineCard() {
	const [accepted, setAccepted] = useState(false);

	return (
		<div className="flex items-center justify-center min-h-screen bg-pink-100 overflow-hidden relative">
			{/* Floating hearts */}
			<div className="absolute inset-0 pointer-events-none">
				{[...Array(20)].map((_, i) => (
					<span
						key={i}
						className="absolute text-pink-400 animate-bounce"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${Math.random() * 20 + 20}px`,
							animationDuration: `${Math.random() * 3 + 2}s`,
						}}
					>
						💖
					</span>
				))}
			</div>

			{/* Card */}
			<div className="bg-white shadow-2xl rounded-3xl p-10 text-center z-10 max-w-md animate-fade-in">
				{!accepted ? (
					<>
						<h1 className="text-3xl font-bold text-pink-600 mb-4">
							Will you be my Valentine? 💌
						</h1>

						<p className="text-gray-600 mb-6">
							You make my world brighter every single day ✨
						</p>

						<div className="flex gap-4 justify-center">
							<button
								onClick={() => setAccepted(true)}
								className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg 
                hover:scale-110 hover:bg-pink-600 transition-all duration-300"
							>
								Yes 💖
							</button>

							<button
								className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full 
                hover:translate-x-4 hover:-translate-y-2 transition-all duration-300"
							>
								No 🙈
							</button>
						</div>
					</>
				) : (
					<div className="animate-pulse">
						<h1 className="text-4xl font-bold text-pink-600 mb-4">Yay!!! 💕</h1>
						<p className="text-lg text-gray-700">
							You just made me the happiest person alive 🥰
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
