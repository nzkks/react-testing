type GreetWithPropsType = {
  name?: string;
};

const GreetWithProps = ({ name }: GreetWithPropsType) => {
  return <div>Hello {name}</div>;
};

export default GreetWithProps;
