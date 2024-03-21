import styled from "styled-components";
import { getRoom } from "../../services/apiLectures";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";

const ListItem = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ListRow = styled.div`
  background-color: #55d62a92;
  border-radius: var(--border-radius-md);
  margin-bottom: 0.8rem;
  padding: 1.2rem 2.4rem;
`;

export default function CourseItem({ lecture }) {
  const {
    name: lectureName,
    duration: lectureDuration,
    modules: { name: moduleName, roomId },
  } = lecture;

  const { isLoading, data: room } = useQuery({
    queryKey: [roomId],
    queryFn: () => getRoom(roomId),
  });
  if (isLoading) return <Spinner />;
  const { name: roomName, description: roomDesc } = room[0];

  return (
    <ListRow>
      <h2>Module: {moduleName}</h2>
      <ListItem>
        <span>Couse: {lectureName}</span>
        <span>Starting Hour: $hour</span>
        <span>Duration: {lectureDuration} Hours</span>
        <span>
          Class: {roomName} | {roomDesc}
        </span>
        <span>Instructor $:name</span>
      </ListItem>
    </ListRow>
  );
}
