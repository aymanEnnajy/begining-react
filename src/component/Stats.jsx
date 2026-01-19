import { useState } from "react";

function Stats() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display:"flex",textAlign: "center", marginTop: "40px" }}>
     
      
      <button style={{width:"200px", fontSize:"35px", backgroundColor:"gray"}} onClick={() => setCount(count + 1)}>
        +
      </button>
 <h1 style={{fontSize:"35px"}}>{count}</h1>

      <button style={{width:"200px", fontSize:"35px", backgroundColor:"gray"}} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default Stats;
