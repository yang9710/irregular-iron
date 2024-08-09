import React, { useEffect } from "react";
import './index.css';

export default function HelloWorld() {

  useEffect(() => {
    console.log("Hello World");
    const element = document.getElementById("hello");
    element?.addEventListener("click", handleClick);
    return () => {
      element?.removeEventListener("click", handleClick);
    }
  }, [])

  const handleClick = ()=> {
    console.log('location', location);
    window.location.href = '/about';
    // window.open('/about');
  }

  return <div className="hello" id="hello">Hello World</div>;
}
