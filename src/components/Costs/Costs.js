import './Costs.css';
import { useState } from 'react';
import Card from './Card';
import CostsFilter from './CostsFilter';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';
const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <Card className="costs">
        <CostsFilter
          selectedYear={selectedYear}
          onChangeYear={yearChangeHandler}
        />
        <CostsDiagram costs={filteredCosts} />
       <CostList filteredCosts={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
