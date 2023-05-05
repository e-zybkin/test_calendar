import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ru from "date-fns/locale/ru";
import { useMemo } from "react";

function BigCalendar(props) {
	const locales = {
		'ru': ru,
	}

	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales,
	})

	const weekendStyle = {
		backgroundColor: 'red',
		color: 'green',
	};

	//это для пн,вт и тд.
	const { defaultDate, formats } = useMemo(
    () => ({
      defaultDate: new Date(),
      formats: {
        weekdayFormat: (date, culture, localizer) =>
          localizer.format(date, 'eeeeee', culture), //для 2 букв eee
      },
    }),
    []
  )

	return(
		<div>
			<Calendar
				defaultDate={defaultDate}
				localizer={localizer}
				startAccessor="start"
				endAccessor="end"
				culture={"ru"}
				formats={formats}
				events={props.events}
				style={{ 
					width: 1000, 
					height: 500, 
					marginLeft: "auto",
					marginRight: 'auto',
					marginTop: '50px',
					color: 'violet',
					backgroundColor: props.classes //это пропс для смены темы
				}}
				//это для русификации панельки
				messages={{
					date: 'Дата',
					time: 'Время',
					event: 'Событие',
					allDay: 'Весь день',
					week: 'Неделя',
					work_week: 'Рабочая неделя',
					day: 'День',
					month: 'Месяц',
					previous: 'Назад',
					next: 'Вперёд',
					yesterday: 'Вчера',
					tomorrow: 'Завтра',
					today: 'Сегодня',
					agenda: 'Agenda',
				}}
				dayPropGetter={(date) => {
					const dayOfWeek = date.getDay();
					return ((dayOfWeek === 0 || dayOfWeek === 6) ? { style: weekendStyle } : {});
				}}
			/>
		</div>
	);
}

export default BigCalendar;