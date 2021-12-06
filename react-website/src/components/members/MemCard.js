import styling from "./MemCard.module.css";
import Card from "../ui/Card";

function MemCard(props) {
  return (
    <li className={styling.item}>
      <Card>
        <div className={styling.content}>
          <h3>{props.name}</h3>
          <p>{props.info}</p>
        </div>
      </Card>
    </li>
  );
}

export default MemCard;
