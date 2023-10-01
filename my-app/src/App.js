import { useEffect, useState } from "react";

function App() {
  // hooksのuseStateを使う
  const [date, setDate] = useState(new Date());

  // useEffectを使うことで、レンダーあとに発生する何かしらの処理をここに収めておく
  // useEffectの返り値として関数を返すことでアンマウントされた際に行う処理を追加することも可能
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date(), 1000);
    });

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
