import React, { useState } from "react";

const FormPatient1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [isErrorNumber, setIsErrorNumber] = useState(false);
  const [isErrorNumbe, setIsErrorNumbe] = useState(false);

  const handle = () => {
    setEmail("");
    setName("");
    setNumber("");
    // const regu= new RegExp(`{}`)
    console.log(name.length);

    if (name.length > 3) {
      setIsError(true);
    }
    if (!isNaN(number)) {
      setIsErrorNumber(true);
    }
    const regu = new RegExp("@", "gi");
    if (email.includes(regu)) {
      setIsErrorNumbe(true);
    }
  };

  return (
    <div>
      FormPatient1
      <div className="flex flex-col gap-10">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="mansjhddh"
        />
        {isError && <p className="text-red-600">this need to be fixed</p>}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        {isErrorNumbe && <p className="text-red-600">this need to be email</p>}
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="mansjhddh"
        />
        {isErrorNumber && <p className="text-red-600">this need to be nuber</p>}
      </div>
      <button className="p-10" onClick={() => handle()}>
        sumbit
      </button>
    </div>
  );
};

export default FormPatient1;
