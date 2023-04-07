import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  .timeWrap{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    h1 {
      margin: 0;
      font-size: 32px;
      color: #343a40;
    }
    .day {
      margin-top: 4px;
      margin-left: 10px;
      color: #868e96;
      font-size: 21px;
    }
  .time{
      color: #868e96;
      font-size: 21px;
      font-weight: 600;
    }
  }
  .tasks{
    color: #343a40;
    font-size: 24px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    
  }
  .fire{
    color: orange;
  }
  .chat{
    color: #343a40;
  }
  .icon-size{
    font-size: 2rem;
    text-indent: 10px;
  }
 
`;

const TodoHead = ({ todoLength, uncheckedTodos }) => {
  const currentDate = new Date();
  const koreanDate = currentDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = weekdays[currentDate.getDay()];
  const options = { hour: 'numeric', minute: 'numeric', timeZone: 'Asia/Seoul' };
  const formatter = new Intl.DateTimeFormat('ko-KR', options);
  return (
    <TodoHeadBlock>
      <div className='timeWrap'>
        <h1>
          {koreanDate}
          <span className="day">
            {dayOfWeek}요일
          </span>
        </h1>
        {/* <span className='time'>
          지금은 {formatter.format()}시
        </span> */}
      </div>
      {todoLength === 0 ? (
        <div className="tasks">오늘 해야 할 일 없어요? 할 일을 추가해주세요!<span className='icon-size'>🤓</span> </div>
      ) : (
        <div className="tasks">
          오늘 해야 할 일 {todoLength}가지 중 아직 {uncheckedTodos}개 남았습니다.<span className='icon-size'>🫠😛😝😜🤪</span>
        </div>
      )}
    </TodoHeadBlock>
  );
}
export default TodoHead;