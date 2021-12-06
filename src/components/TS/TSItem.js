import Card from "../ui/Card";
import styling from "./TSItem.module.css";

function TSItem(props) {
  return (
    <li className={styling.item}>
      <Card>
        <div className={styling.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styling.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styling.actions}>
          <button className="btn">
            <a
              className="link"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default TSItem;
