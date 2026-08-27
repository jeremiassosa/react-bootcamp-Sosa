import { useState } from "react";

// Actualizamos la estructura para que guarde tanto el nombre como la tarea
interface Menssage {
  name: string;
  tarea: string;
}

export default function DinamicList() {
  const [messages, setMessages] = useState<Menssage[]>([]);

  const [inputTextName, setInputTextName] = useState<string>("");
  const [inputTextWork, setInputTextWork] = useState<string>("");

  function sendMenssage(inputEventName: any) {
    inputEventName.preventDefault();

    if (inputTextName.trim() === "" || inputTextWork.trim() === "") {
      return;
    }
    const newMenssage: Menssage = {
      name: inputTextName,
      tarea: inputTextWork,
    };

    setMessages([...messages, newMenssage]);

    setInputTextName("");
    setInputTextWork("");
  }

  function deleteMessage(positionMenssageDelete: number) {
    const leakedList = messages.filter(
      (_, index) => index !== positionMenssageDelete,
    );
    setMessages(leakedList);
  }

  return (
    <div
      style={{
        maxWidth: "350px",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {messages.map((message, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <strong>{message.name}:</strong> {message.tarea}
            </span>
            <button onClick={() => deleteMessage(index)}>delete</button>
          </li>
        </div>
      ))}

      <form
        onSubmit={sendMenssage}
      >
        <input
          type="text"
          placeholder="Name"
          value={inputTextName}
          onChange={(inputEventName) =>
            setInputTextName(inputEventName.target.value)
          }
        />
        <input
          type="text"
          placeholder="Work"
          value={inputTextWork}
          onChange={(inputEventTarea) =>
            setInputTextWork(inputEventTarea.target.value)
          }
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
