import { cardContext } from "./context";
import { useContext } from "react";

export const Card = () => {
  const Value = useContext(cardContext)
  return (
          <div className="card" style={{ backgroundColor: Value.color }}>
            <h3>{Value.text}</h3>
          </div>
  )
};
