import { NavLink } from "react-router-dom";
import BlurryBox from "../ui/BlurryBox";

export default function Dashboard() {
  return (
    <>
      <BlurryBox>
        <h1>Dashboard</h1>
        <ul>
          <li>
            <NavLink to="/editStaff">Access Staff Details</NavLink>
          </li>

          <li>
            <NavLink to="/editModules">Edit Modules</NavLink>
          </li>
        </ul>
      </BlurryBox>
    </>
  );
}
