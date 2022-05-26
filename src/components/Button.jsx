import { useState } from "react";



export default function Button () {
  const [msg, setMsg] = useState("버튼이 눌리지 않았다.");
  return (
    <div>
      <button onClick={click}>button</button>
      <p>{msg}</p>
    </div>
  );

  function click() {
    setMsg('버튼이 방금 눌렸다.');
    setTimeout(() => {
      setMsg("버튼이 눌리지 않았다.");
    }, 5000);
  }
};