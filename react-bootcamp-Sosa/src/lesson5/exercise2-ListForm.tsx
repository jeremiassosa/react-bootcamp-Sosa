import { useState } from "react";

interface Menssage {
  text: string;
}

export default function ListForm() {
  const [messages, setMessages] = useState<Menssage[]>([]);
  const [inputText, setInputText] = useState<string>("");

  function sendMenssage(inputEvent: any) {
    inputEvent.preventDefault();
    if (inputText.trim() === "") {
      return; 
    }
    const newMenssage: Menssage = { text: inputText };
    setMessages([...messages, newMenssage]);
    setInputText("");
  }

  function deleteMessage(positionMenssageDelete: number) {
    const leakedList = messages.filter((_, index) => index !== positionMenssageDelete);
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
