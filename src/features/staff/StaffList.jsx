import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import StaffRow from "./StaffRow";
import { useStaff } from "./useStaff";

export default function StaffList() {
  const { staff, isLoading } = useStaff();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="1fr 1fr 1fr 1fr ">
      <Table.Header>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Expertise</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={staff}
        render={(member) => <StaffRow member={member} key={member.id} />}
      />
    </Table>
  );
}
