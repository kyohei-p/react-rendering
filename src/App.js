import { ChildArea } from "./ChildArea";
import "./styles.css";
import { useState, useCallback, useMemo } from "react";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setopen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => {
    setopen(!open);
  };

  const onClickClose = useCallback(() => setopen(false), []);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
