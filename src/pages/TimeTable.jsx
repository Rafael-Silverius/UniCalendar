import styled from "styled-components";
import BlurryBox from "../ui/BlurryBox";
import { useState } from "react";
import currentDate from "../helpers/currentDate";
import TimeTableList from "../features/TimeTable/TimeTableList";

const Content = styled.div`
  width: 60%;
`;
const StyledHeader = styled.div`
  background-color: var(--color-green-700);
  padding: 0.8rem;
  font-size: 12px;
  border-radius: var(--border-radius-md);
  width: fit-content;
`;

const StyledTitle = styled.div`
  text-align: center;
`;
const StyledDate = styled.input`
  width: 30%;
  color: black;
  padding: 0 1rem;
  font-weight: 500;
  border-radius: var(--border-radius-md);
  &::-webkit-datetime-edit {
    padding: 1rem;
  }
`;

const DateDiv = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`;

export default function TimeTable() {
  // console.log(newDate);
  const newDate = currentDate;
  const [selectedDate, setSelectedDate] = useState("");

  const handleChange = function (e) {
    setSelectedDate(e.target.value);
  };

  return (
    <Content>
      <BlurryBox>
        <Main>
          <StyledHeader>
            <h2>Welcome back %UserName</h2>
          </StyledHeader>
          <StyledTitle>
            <h1>Timetable</h1>
            <h3>See your upcoming courses</h3>
          </StyledTitle>
          <DateDiv>
            <h2>Select date:</h2>
            <StyledDate
              type="date"
              defaultValue={selectedDate}
              min={newDate}
              onChange={handleChange}
            />
          </DateDiv>
          {selectedDate && <TimeTableList selectedDate={selectedDate} />}
        </Main>
      </BlurryBox>
    </Content>
  );
}
