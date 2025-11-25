import React, { useState } from 'react';
import './App.css';

function App() {
  const [matn, setMatn] = useState("Assalomu alaykum");

  const [rang, setRang] = useState("blue");

  const [kasb, setKasb] = useState("Frontend dasturchi");

  const [showPass, setShowPass] = useState(false);

  const [salom, setSalom] = useState("Salom");

  const [textCase, setTextCase] = useState("frontend");

  const [size, setSize] = useState(100);

  const [tugmaMatni, setTugmaMatni] = useState("Yoqish");

  return (
    <div className="container">
      <h1>React useState - 1-8 gacha amaliy vazifalar</h1>

      <div className="task">
        <h2>1. Matnni almashtirish</h2>
        <p>{matn}</p>
        <button onClick={() => setMatn(matn === "Assalomu alaykum" ? "Xush kelibsiz!" : "Assalomu alaykum")}>
          Almashtirish
        </button>
      </div>

      <div className="task">
        <h2>2. Rang almashtirish</h2>
        <p style={{ color: rang }}>Bu matn rangi: {rang}</p>
        <button onClick={() => setRang(rang === "blue" ? "red" : "blue")}>
          Rangni o‘zgartir
        </button>
      </div>

      <div className="task">
        <h2>3. Kasbni almashtirish</h2>
        <p>Hozirgi kasb: <strong>{kasb}</strong></p>
        <button onClick={() => setKasb(kasb === "Frontend dasturchi" ? "React developer" : "Frontend dasturchi")}>
          Kasbni almashtir
        </button>
      </div>

      <div className="task">
        <h2>4. Parolni ko‘rsatish/yashirish</h2>
        <p>Parol: {showPass ? "123456" : "******"}</p>
        <button onClick={() => setShowPass(!showPass)}>
          {showPass ? "Yashirish" : "Ko‘rsatish"}
        </button>
      </div>

      <div className="task">
        <h2>5. Tilni almashtirish</h2>
        <p>{salom} bo‘lsin.</p>
        <button onClick={() => setSalom(salom === "Salom" ? "Hello" : "Salom")}>
          Tilni almashtir
        </button>
      </div>

      <div className="task">
        <h2>6. Katta/Kichik harf</h2>
        <p>{textCase}</p>
        <button onClick={() => setTextCase(textCase === "frontend" ? "FRONTEND" : "frontend")}>
          {textCase === "frontend" ? "KATTA HARF" : "kichik harf"}
        </button>
      </div>

      <div className="task">
        <h2>7. Div hajmini o‘zgartirish (Toggle size)</h2>
        <div className="box" style={{ width: size, height: size }}></div>
        <button onClick={() => setSize(size === 100 ? 200 : 100)}>
          Hajmni o‘zgartir ({size}px)
        </button>
      </div>

      <div className="task">
        <h2>8. Tugma matnini almashtirish</h2>
        <button onClick={() => setTugmaMatni(tugmaMatni === "Yoqish" ? "O‘chirish" : "Yoqish")}>
          {tugmaMatni}
        </button>
      </div>
    </div>
  );
}

export default App;