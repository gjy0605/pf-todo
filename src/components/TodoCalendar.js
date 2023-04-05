import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../dist/Calendar.css'; // css import

const TodoCalendar = () => {
  const [value, onChange] = useState(new Date());
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', timeZone: 'Asia/Seoul' };
  const formatter = new Intl.DateTimeFormat('ko-KR', options);
  return (
    <div className='app'>
      <Calendar onChange={onChange} value={value} />
      <p className='text-center'>
        <span className='bold'>선택한 날짜 : </span>{' '}
        {formatter.format(value)}
      </p>
    </div>

  );
};

export default TodoCalendar;