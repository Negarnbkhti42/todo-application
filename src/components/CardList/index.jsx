import Card from "../Card";

const CardList = ({ list, className }) => {
  return (
    <div className={`list-container ${className}`}>
      {list.map((item) => (
        <Card key={item.id} className="list_card" {...item} />
      ))}
    </div>
  );
};

export default CardList;
