import Card from "../Card";
import propTypes from "prop-types";
import "./CardList.scss";
import { useList, useListActions } from "../ListProvider";

const CardList = ({ className }) => {
  const list = useList();
  const { removeFromList, toggleItem } = useListActions();

  return (
    <div className={`list-container ${className}`}>
      {list.map((item) => (
        <Card
          key={item.id}
          className="list_card"
          {...item}
          onDelete={() => removeFromList(item.id)}
          onComplete={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  className: propTypes.string,
};

CardList.defaultProps = {
  className: "",
};
