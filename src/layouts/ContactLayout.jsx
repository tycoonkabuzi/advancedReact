import { Outlet } from "react-router";

const ContactLayout = () => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Outlet />
    </div>
  );
};

export default ContactLayout;
