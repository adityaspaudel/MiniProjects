"use client";
import Link from "next/link";
import React from "react";

const Home = () => {
	const games = [
		"1-coinFlipper",
		"2-crosswordPuzzleGame",
		"3-hangman",
		"4-loveCalculator",
		"5-numberGuessingGame",
		"6-quizBattleGame",
		"7-rockPaperScissors",
		"8-snakesAndLadders",
		"9-typingSpeedTestGame",
		"10-memoryCardGame",
		"11-simonSays",
		"12-snakeGame",
		"13-aimTrainingGame",
		"14-wordScrambleGame",
		"15-jumpingGame",
		"16-brickBreaker",
		"17-racingGame",
		"18-ticTacToe-v2",
	];

	const customHooks = [
		"1-counter",
		"2-menuToggler",
		"3-formInputHandler",
		"4-themeSwitcher",
		"5-debounceHook",
		"6-fetchData",
		"7-memoVault",
		"8-useAuthApp",
		"9-infiniteScroll",
	];

	const reduxApps = [
		"1-counter",
		"2-notesApp",
		"3-themeToggle",
		"4-userAuth",
		"5-todosApp",
		"6-langSwitcherApp",
		"7-habitsTracker",
		"8-budgetPlanner",
		"9-expenseTracker",
		"10-inventoryManagementApp",
		"11-moviesApp",
		"12-notificationSystem",
		"13-readingListApp",
		"14-reduxCart",
		"15-weatherApp",
		"16-wishlistApp",
		"17-githubUserFinder",
	];

	const utilityApps = [
		"1-accordion",
		"2-bmiCalculator",
		"3-calculator",
		"4-colorPickerApp",
		"5-counter",
		"6-currencyConverter",
		"7-digitalWatch",
		"9-matrixGenerator",
		"10-musicPlayer",
		"11-passwordGenerator",
		"12-passwordValidator",
		"13-pdfRenderer",
		"14-photoGallery",
		"15-pomodoroTimer",
		"16-qrCodeGenerator",
		"17-randomJokesGenerator",
		"18-reminderApp",
		"19-sidebarToggle",
		"20-themeToggler",
		"21-todosListApps",
		"22-unitConverter",
		"23-websiteSurveys",
		"24-wordsAndCharactersCounter",
		"25-paginationWithAPI",
		"26-urlShortener",
		"27-calendarEventCreator",
		"28-simpleCalendar",
		"29-fuelCostCalculator",
		"30-ageCalculator",
		"31-skeletonTable",
		"32-taskPriorityManager",
		"33-meetingNotesOrganizer",
		"34-slideShow",
		"35-dailyJournals",
		"36-horoscopeCompatibilityCalculator",
		"37-notesWithTaggingSystem",
		"38-invoiceGenerator",
	];

	const renderCards = (items, basePath) =>
		items.map((item, idx) => (
			<Link href={`/${basePath}/${item}`} key={idx}>
				<div
					className="bg-gray-100 hover:bg-green-600 hover:text-white 
					shadow rounded-lg px-4 py-3 text-sm sm:text-base
					hover:scale-105 transition cursor-pointer text-center"
				>
					{item}
				</div>
			</Link>
		));

	return (
		<div className="min-h-screen bg-cyan-900 text-black p-4 sm:p-6">
			<h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center text-green-100">
				React Mini Projects
			</h1>

			{/* Responsive grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
				{/* Utility Apps */}
				<div>
					<h2 className="text-xl sm:text-2xl font-semibold mb-4 text-green-100 text-center">
						Utility Apps
					</h2>
					<div className="flex flex-col gap-3 max-h-[120vh] overflow-y-auto pr-1">
						{renderCards(utilityApps, "utilityApps")}
					</div>
				</div>

				{/* Redux Apps */}
				<div>
					<h2 className="text-xl sm:text-2xl font-semibold mb-4 text-green-100 text-center">
						Redux Apps
					</h2>
					<div className="flex flex-col gap-3 max-h-[120vh] overflow-y-auto pr-1">
						{renderCards(reduxApps, "reduxApps")}
					</div>
				</div>

				{/* Games */}
				<div>
					<h2 className="text-xl sm:text-2xl font-semibold mb-4 text-green-100 text-center">
						Games
					</h2>
					<div className="flex flex-col gap-3 max-h-[120vh] overflow-y-auto pr-1">
						{renderCards(games, "games")}
					</div>
				</div>

				{/* Custom Hooks */}
				<div>
					<h2 className="text-xl sm:text-2xl font-semibold mb-4 text-green-100 text-center">
						Custom Hooks
					</h2>
					<div className="flex flex-col gap-3 max-h-[120vh] overflow-y-auto pr-1">
						{renderCards(customHooks, "customHooks")}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
