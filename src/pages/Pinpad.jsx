import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import PostIt from "../components/PostIt";
import Banner from "../components/Banner";
import "/src/Pinpad.css";
import Logo from "/src/assets/tf2title.png";
import icon from "/src/assets/tf2icon.svg";
import Navbar from "../components/Navbar";

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
      {/* <Banner
        images={[Logo, icon]} // Multiple images
        size="100px"
        fit="contain"
        color="#f0f0f0"
        spacing="0px"
      /> */}
      <Navbar />
      <div className="bg">
        <main>
          <section className="numbers">
            <Input
              className="input"
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
        <PostIt text="To get the 4 digit code you have to play the quiz first!!!" />
      </div>
    </>
  );
}
