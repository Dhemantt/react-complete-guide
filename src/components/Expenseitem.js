import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';

function Expenseitem(props) {
    
    return (
        <div className='expense-item'>
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <ExpenseDetails amount={props.amount} />
        </div>
        
)}

export default Expenseitem