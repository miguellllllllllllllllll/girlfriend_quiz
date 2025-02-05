import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import PaperTape from "./components/note";
import "./Pinpad.css";

const PASSCODE = "1022";

export default function Pinpad() {
  const [inputValue, setInputValue] = React.useState("");
  const [isUnlocked, setUnlocked] = React.useState(false);
  const [isWrong, setWrong] = React.useState(false);

  const handleButtonClick = (value) => {
    let newInputValue = inputValue + `${value}`;
    setInputValue(newInputValue);

    if (newInputValue.length > 4) {
      setUnlocked(false);
      setWrong(false);
      setInputValue(`${value}`);
    } else if (newInputValue.length === 4) {
      newInputValue === PASSCODE ? setUnlocked(true) : setWrong(true);
    }
  };

  return (
    <>
      <div className="bg">
        <main>
          <section className="numbers">
            <Input
              value={inputValue}
              isUnlocked={isUnlocked}
              isWrong={isWrong}
            />
            <section className="row">
              <Button value={3} onButtonClick={handleButtonClick} />
              <Button value={2} onButtonClick={handleButtonClick} />
              <Button value={1} onButtonClick={handleButtonClick} />
            </section>
            <section className="row">
              <Button value={6} onButtonClick={handleButtonClick} />
              <Button value={5} onButtonClick={handleButtonClick} />
              <Button value={4} onButtonClick={handleButtonClick} />
            </section>
            <section className="row">
              <Button value={9} onButtonClick={handleButtonClick} />
              <Button value={8} onButtonClick={handleButtonClick} />
              <Button value={7} onButtonClick={handleButtonClick} />
            </section>
            <section className="row">
              <Button value={"#"} onButtonClick={handleButtonClick} />
              <Button value={0} onButtonClick={handleButtonClick} />
              <Button value={"*"} onButtonClick={handleButtonClick} />
            </section>
          </section>
        </main>
        <PaperTape
          text="To get the 4 digit code, you have to play the Quiz first!!!"
          color="blue"
        />
      </div>
    </>
  );
}
