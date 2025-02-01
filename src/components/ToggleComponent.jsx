import useToggle from "../hooks/useToggle";
const ToggleComponent = () => {
  const [isVisible, toggleVisibility] = useToggle();
  return (
    <>
      <h1> Hook - custom hook</h1>
    </>
  );
};
export default ToggleComponent;
