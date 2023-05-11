import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import BigCalendar from '../BigCalendar/BigCalendar';
import PrimeTimePicker from '../PrimeTimePicker/PrimeTimePicker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'primereact/resources/primereact.min.css';

const events = [
	{
		title: "Big Meeting",
		allDay: true,
		start: new Date(2023,3,2),
		end: new Date(2023,3,3),
	},
	{
		title: "Vacation",
		start: new Date(2023,3,6),
		end: new Date(2023,3,8),
	},
	{
		title: "Conference",
		start: new Date(2023,3,20),
		end: new Date(2023,3,24),
	}
]

function App() {
	const [newEvent, setNewEvent] = useState({
		title: "", 
		start: "",
		end: "",
	})
	
	const [allEvents, setAllEvents] = useState(events)
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		let themeLink = document.getElementById('app-theme');
		console.log(themeLink);
		
		const darkTheme = 'lara-dark-indigo';
		
		const lightTheme = 'lara-light-indigo';
		
		if (themeLink) {
			themeLink.href = `${process.env.PUBLIC_URL}/themes/${darkMode ? darkTheme : lightTheme}/theme.css`;
		}
		
	}, [darkMode]);

	function handleAddEvent() {
		setAllEvents([...allEvents, newEvent]);
	}

	function handleDarkTheme() {
		setDarkMode(!darkMode)
	}

  return (
		<>
			<div className={styles.newEventBox}>
				<label className={styles.filter__switch}>
					<input
						type="checkbox"
						onChange={handleDarkTheme}
						checked={darkMode}
					/>
					<span
						className={styles.filter__slider}
					/>
				</label>

				<h1 className=''>Календарь</h1>
				<h2 className=''>Добавить новое событие:</h2>
				<div className={styles.newEventBox__form}>
					<input
						type="text"
						placeholder="Название"
						value = {newEvent.title}
						onChange={(e) => {
							setNewEvent({...newEvent, title: e.target.value})
						}}
					/>

					<PrimeTimePicker
						placeholder='Дата начала' 
						onChange={(start) => {
							setNewEvent({...newEvent, start: start.value})
						}}
					/>

					<PrimeTimePicker
						placeholder='Дата окончания'
						onChange={(end) => {
							setNewEvent({...newEvent, end: end.value})
						}}
					/>

					<button
						onClick={handleAddEvent}
					>Добавить событие</button>
				</div>
			</div>
			
			<BigCalendar 
				events={allEvents}
			/>
		</>
  );
}

export default App;
