const Welcome = (props) => {
  // 情報の流れは親から子に、単一でする
  return <h1>Hello, {props.name}</h1>;
};
export default Welcome;
