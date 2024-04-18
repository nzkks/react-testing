import { GreetWithPropsType } from './greet-with-props.types';

const GreetWithProps = ({ name }: GreetWithPropsType) => {
  return <div>{`Hello ${name ? name : 'Guest'}`}</div>;
};

export default GreetWithProps;
