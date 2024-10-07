import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

const Example = () => {
  const referenceValue = useRef(0);
  const submitHandler=(e)=>{
       e.preventdefault;
       console.log(referenceValue.current.value)
  }
  return (
    <>
    <form>
        <input type="text" placeholder="username" ref={referenceValue}/>
        <Button onClick={submitHandler}>Submit</Button>
    </form>
    </>
  );
};

export default Example;
