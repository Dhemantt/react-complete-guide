import './Expenseitem.css';

function Expenseitem(props) {

    return (
        <div className='expense-items'>
            <div>{props.Date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
        
)}

export default Expenseitem