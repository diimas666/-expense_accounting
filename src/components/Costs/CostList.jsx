import './CostList.css';
import CostItem from './CostItem';

const CostList = ({ filteredCosts }) => {
  return (
    <ul className="cost-list">
      {filteredCosts.length === 0 ? (
        <h2 className="cost-list__fallback">В этом году расходов нет</h2>
      ) : (
        filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))
      )}
    </ul>
  );
};

export default CostList;
