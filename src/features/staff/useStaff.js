import { useQuery } from "@tanstack/react-query";
import { getStaff } from "../../services/apiLecturers";

export function useStaff() {
  const { isLoading, data: staff } = useQuery({
    queryKey: ["staffs"],
    queryFn: getStaff,
  });
  return { isLoading, staff };
}
