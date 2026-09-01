import { useEffect } from "react";

function EffectExample() {
    useEffect(() => {
        console.log("Component Loaded");
    }, []);
    return (
        <h1>Hello</h1>
    );
}
export default EffectExample;