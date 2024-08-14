interface Props {
  buttonText: string;
  colour?: "primary" | "secondary";
  onButtonClick: (msg: string) => void;
}

const ButtonWithColourParam = ({
  buttonText,
  colour = "primary",
  onButtonClick,
}: Props) => {
  return (
    <>
      <button
        className={"btn btn-" + colour}
        onClick={() => onButtonClick("Hello Mr. Coder!")}
      >
        {buttonText}
      </button>
    </>
  );
};

export default ButtonWithColourParam;
