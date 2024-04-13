import { GreetWithPropsType } from './greet-with-props.types';

const GreetWithProps = ({ name }: GreetWithPropsType) => {
  return <div>Hello {name}</div>;
};

export default GreetWithProps;
