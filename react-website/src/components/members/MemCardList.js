import styling from "./MemCardList.module.css";
import MemCard from "./MemCard";

function MemCardList(props) {
  return (
    <ul className={styling.list}>
      {props.items.map((item) => (
        <MemCard key={item.id} id={item.id} name={item.name} info={item.info} />
      ))}
    </ul>
  );
}

export default MemCardList;
