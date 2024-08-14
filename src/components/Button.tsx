interface Props {
  buttonName: string;
}

const Button = ({ buttonName }: Props) => {
  return <button className="btn btn-primary">{buttonName}</button>;
};

export default Button;
