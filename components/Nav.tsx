import NavProvider from "./nav/NavProvider";
import TopNav from "./nav/TopNav";
import SideNav from "./nav/SideNav";

export default function Nav() {
  return (
    <NavProvider>
      <TopNav />
      <SideNav />
    </NavProvider>
  );
}
