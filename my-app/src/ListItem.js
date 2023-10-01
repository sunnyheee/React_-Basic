function ListItem(props) {
  console.log(props.item.isDone);
  return (
    <li>
      <h2 onClick={() => props.onClick(props.item.id)}>{props.item.name}</h2>
      <p>¥{props.item.price}</p>
      {props.item.isDone && <p>Purchased</p>}
    </li>
  );
}
export default ListItem;
