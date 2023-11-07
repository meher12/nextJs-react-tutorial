"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Description from "./components/description";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const calculateIncome = () => {
  let number = 10;
  for (let i = 0; i < 10000; i++) {
    number = number + 1;
  }
  console.log("Calculating... ");
};

function Home() {
  let hideDescription = true;

  const [counter, setCounter] = useState(0);
  const [success, setSuccess] = useState(false);


  const [shouldCalculate, setShouldCalculate] = useState(false);
  const income = useMemo(() => calculateIncome(), [shouldCalculate]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setCounter(counter + 1);
    //console.log(counter);
    if (counter === 10) {
      //setSuccess(true);
      setShouldCalculate(true);
    }
  };

  useEffect(() => {
    console.log("# Event is Success!");
  }, [success]);

  useEffect(() => {
    console.log("## Event is Triggered!");
  }, [counter]);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log("Focus on input done");
    }
    console.log(inputRef.current?.value);
  };

  const handleInputChange = (event: any) => {
    console.log(event.target.value);
  };

  return (
    <main>
      <div className={styles.main}>
        <Header text="Hello from Header" />
        {hideDescription && <Description />}
        <Link href="/about">Go to About</Link>
        <div>Counter: {counter}</div>
        <h5>inputRef:</h5>
        <input ref={inputRef} />
        <h5>handleInputChange:</h5>
        <input onChange={handleInputChange} />
        <div>Income: {income}</div>
        <button onClick={handleClick}>Click to Incrument</button>
        <button onFocus={handleFocus}>Click to Focus</button>
      </div>
    </main>
  );
}

export default Home;
