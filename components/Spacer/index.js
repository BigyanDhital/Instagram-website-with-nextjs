const Spacer = ({ space, margin }) => {
  let style = {};
  if (margin) style.margin = `${space}px`;
  else style.padding = `${space}px`;
  return <div {...{ style }} />;
};

export default Spacer;
