import { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    return (
        <div>
            <p>Name</p>
            <input
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />

            <p>Hello,{name}</p>
        </div>
    );
}

export default Form;