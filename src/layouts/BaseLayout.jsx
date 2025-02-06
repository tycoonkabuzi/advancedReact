import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <div style={{ backgroundColor: "Red" }}>
      <Outlet />
    </div>
  );
};

export default BaseLayout;
