import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editStaff } from "../../services/apiLecturers";

export function useEditStaff() {
  const queryClient = useQueryClient();

  const { mutate, isLoading: isEditing } = useMutation({
    mutationFn: ({ newdata, id }) => editStaff(newdata, id),
    onSuccess: () => {
      toast.success("Staff details were updated");
      queryClient.invalidateQueries(["staffs"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, mutate };
}
