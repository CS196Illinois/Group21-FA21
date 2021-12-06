import TSItem from "./TSItem";
import styling from "./TSList.module.css";

function TSList(props) {
  return (
    <ul className={styling.list}>
      {props.items.map((item) => (
        <TSItem
          key={item.id}
          id={item.id}
          image={item.image}
          description={item.description}
          title={item.title}
          link={item.link}
        />
      ))}
    </ul>
  );
}

export default TSList;
