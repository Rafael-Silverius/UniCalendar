import Button from "../../ui/Button";
import { useLogout } from "./useLogout";

export default function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <Button disabled={isLoading} onClick={logout} sizes="small">
      Logout
    </Button>
  );
}
