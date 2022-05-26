import { useEffect, useRef, useState } from "react";



export default function Button () {
  const [msg, setMsg] = useState("버튼이 눌리지 않았다.");
  const timer = useRef();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);


  return (
    <div>
      <button onClick={click}>button</button>
      <p>{msg}</p>
    </div>
  );

  function click() {
    setMsg('버튼이 방금 눌렸다.');
    timer.current = setTimeout(() => {
      setMsg("버튼이 눌리지 않았다.");
    }, 5000);
  }
};