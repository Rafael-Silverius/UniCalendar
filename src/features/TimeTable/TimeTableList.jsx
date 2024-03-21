import styled from "styled-components";
import CourseItem from "./CourseItem";
import Spinner from "../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getLecturesOfDate, getRoom } from "../../services/apiLectures";
import EmptyDate from "./EmptyDate";

const DateTitle = styled.h2`
  text-align: center;
  padding: 2.4rem;
`;

const CoursesList = styled.div`
  margin-top: 2rem;
  background-color: #0000004e;
  padding: 0 2.4rem 2.4rem;
  border-radius: var(--border-radius-md);
`;

export default function TimeTableList({ selectedDate }) {
  const {
    isLoading: lectLoading,
    data: lectures,
    error,
  } = useQuery({
    queryKey: [selectedDate],
    queryFn: () => getLecturesOfDate(selectedDate),
  });

  if (lectLoading) return <Spinner />;

  // console.log(lectures);

  return (
    <CoursesList>
      <DateTitle>{selectedDate}</DateTitle>
      {lectures.length > 0 &&
        lectures.map((lecture) => (
          <CourseItem lecture={lecture} key={lecture.name} />
        ))}
      {lectures.length == 0 && <EmptyDate />}
    </CoursesList>
  );
}
