import React from 'react';
import styled from 'styled-components';
import { BsFire, BsChatDotsFill } from 'react-icons/bs'

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
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

const TodoHead = ({ todoLength }) => {
  const currentDate = new Date();
  const koreanDate = currentDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = weekdays[currentDate.getDay()];

  return (
    <TodoHeadBlock>
      <h1>
        {koreanDate}
        <span className="day">
          {dayOfWeek}요일
        </span>
      </h1>
      {todoLength === 0 ? (
        <div className="tasks">오늘은 해야할 일이 없어요? 아닐걸요?.. 할 일을 추가하세요!<span className='icon-size'>🤓</span> </div>
      ) : (
        <div className="tasks">
          오늘 해야 할 일 {todoLength}가지 중 아직 {todoLength}개 남았습니다.<span className='icon-size'>🫠😛😝😜🤪</span>
        </div>
        // {[...Array(4)].map((_, index) => (
        //             <BsFire key={index} className="fire" />
        //           ))}
      )}
    </TodoHeadBlock>
  );
}

export default TodoHead;