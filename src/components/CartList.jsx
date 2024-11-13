import { IoCloseCircleSharp } from "react-icons/io5";
import { HiPlusCircle } from "react-icons/hi2";

const CartList = ({ items, onClear, onRemove }) => {
  return (
    <div>
      <ul style={{maxWidth:'600px', marginBottom:'20px', cursor:"pointer"}} className="list-group">
        {items.map((item) => (
          <li  key={item.id} className=" list-group-item  item">
            {item.name}
            <IoCloseCircleSharp onClick={()=>onRemove(item.id)} />

            <HiPlusCircle />

          </li>
        ))}
      </ul>

      <button onClick={() => onClear()} className="btn btn-primary">
        Clear
      </button>
    </div>
  );
};

export default CartList;
