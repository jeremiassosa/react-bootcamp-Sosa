import { useState } from "react";

interface Mensaje {
  text: string;
}

export default function App() {
  const [messages, setMessages] = useState<Mensaje[]>([]);
  const [inputText, setInputText] = useState<string>("");

  function manejarEnvio(inputEvent: any) {
    inputEvent.preventDefault();
    if (inputText.trim() === "") {
      return; 
    }
    const nuevoMensaje: Mensaje = { text: inputText };
    setMessages([...messages, nuevoMensaje]);
    setInputText("");
  }

  function deleteMessage(positionMenssageDelete: number) {
    const listaFiltrada = messages.filter((_, index) => index !== positionMenssageDelete);
    setMessages(listaFiltrada);
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

      <form onSubmit={manejarEnvio}>
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
