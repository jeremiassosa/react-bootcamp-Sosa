import { useRef, useState } from "react";

interface Menssage {
  text: string;
}

export default function AutoFocusForm() {
  const [messages, setMessages] = useState<Menssage[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    inputRef.current?.focus();
  }

  function sendMenssage(inputEvent: any) {
    inputEvent.preventDefault();
    if (inputText.trim() === "") {
      return; 
    }
    const newMenssage: Menssage = { text: inputText };
    setMessages([...messages, newMenssage]);
    setInputText("");
    handleClick();
  }
  
  function deleteMessage(positionMenssageDelete: number) {
    const leakedList = messages.filter((_, index) => index !== positionMenssageDelete);
    handleClick();
    setMessages(leakedList);
  }

  return (
    <div style={{
        maxWidth: "350px",
        width: "90%",
        display:"flex",
        justifyContent: "center",
        alignItems:"stretch",
        flexDirection: "column"
    }}>
      {messages.map((message, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          <li style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            {message.text}
            <button onClick={() => deleteMessage(index)}>delete</button>
          </li>
        </div>
      ))}

      <form onSubmit={sendMenssage}>
        <input
          ref={inputRef} 
          type="text" 
          placeholder="Write your text" 
          value={inputText}
          onChange={(inputEvent) => setInputText(inputEvent.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
