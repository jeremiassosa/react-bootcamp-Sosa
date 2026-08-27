import { useState} from "react";

export default function LimitCaracters() {
  const [menssage, setMenssage] = useState<string>("");
  const LIMITE = 50;


  const inputChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMenssage(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "350px",
        width: "90%",
        display: "flex",
        flexDirection: "column",
     }}
    >
      <label htmlFor="mensaje" style={{ fontWeight: "bold" }}>
        Escribe tu mensaje:
      </label>
      
      <textarea
        id="mensaje"
        placeholder="Escribe algo aquí..."
        value={menssage}
        onChange={inputChangeText}
        style={{
          width: "100%",
          height: "80px",
          padding: "8px",
          borderRadius: "4px",
          border: `1px solid ${menssage.length > LIMITE ? "red" : "#ccc"}`,
          outline: "none",
          resize: "none",
        }}
      />

      <span
        style={{
          alignSelf: "flex-end",
          fontSize: "14px",
          fontWeight: menssage.length > LIMITE ? "bold" : "normal",
          color: menssage.length > LIMITE ? "red" : "#666",
        }}
      >
        {menssage.length} / {LIMITE}
      </span>
    </div>
  );
}
