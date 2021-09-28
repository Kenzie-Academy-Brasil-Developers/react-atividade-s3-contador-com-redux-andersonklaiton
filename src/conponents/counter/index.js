import { useDispatch, useSelector } from "react-redux";
import "./style.css"

const Counter = () => {

    const dispatch = useDispatch()
    const result = useSelector(store=>store.result)

  return (
    <div className="container_all">
      <span>{result}</span>
      <div className="container_buttons">
        <button onClick={()=>dispatch({type: "ADD_NUMBER", payload: 1})}>+</button>
        <button onClick={()=>dispatch({type: "SUB_NUMBER", payload: 1})}>-</button>
      </div>
    </div>
  );
};
export default Counter