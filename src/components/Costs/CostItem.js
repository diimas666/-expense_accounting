import Card from './Card';
import CostDate from './CostDate';
import './CostItem.css';
function CostItem(props) {
  const changeDescr = () => {
    console.log('click');
  };
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />

        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__price">{props.amount}$</div>
        </div>
        <button onClick={changeDescr}>Изменить описание</button>
      </Card>
    </li>
  );
}
export default CostItem;
