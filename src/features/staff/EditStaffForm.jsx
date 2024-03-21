import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useEditStaff } from "./useEditStaff";

const FormRow = styled.div`
  display: flex;
`;

export default function EditStaffForm({ staffToEdit, setShowForm }) {
  const { id: editId, ...editValues } = staffToEdit;
  const { isEditing, mutate } = useEditStaff();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: editValues,
  });

  function onSubmit(data) {
    // console.log(data);
    mutate(
      { newdata: { ...data }, id: editId },
      {
        onSuccess: () => {
          setShowForm((s) => !s);
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="First Name">
        <Input
          type="text"
          id="firstName"
          disabled={isEditing}
          {...register("firstName", { required: "This field is required!" })}
        ></Input>
      </FormRow>
      <FormRow label="Last Name">
        <Input
          type="text"
          id="lastName"
          disabled={isEditing}
          {...register("lastName", { required: "This field is required!" })}
        ></Input>
      </FormRow>
      <FormRow label="expertise">
        <Input
          type="text"
          id="expertise"
          disabled={isEditing}
          {...register("expertise", { required: "This field is required!" })}
        ></Input>
      </FormRow>

      <FormRow>
        <Button type="reset" variations="secondary" sizes="small">
          Cancel
        </Button>
        <Button type="submit" sizes="small">
          Edit Staff
        </Button>
      </FormRow>
    </form>
  );
}
