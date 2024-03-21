import { useState } from "react";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import EditStaffForm from "./EditStaffForm";

export default function StaffRow({ member }) {
  const [showForm, setShowForm] = useState(false);
  const { id, firstName, lastName, expertise } = member;

  return (
    <>
      <Table.Row>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{expertise}</div>
        <div>
          <Button sizes="small" onClick={() => setShowForm((s) => !s)}>
            Edit
          </Button>
        </div>
      </Table.Row>

      {showForm && (
        <EditStaffForm staffToEdit={member} setShowForm={setShowForm} />
      )}
    </>
  );
}
