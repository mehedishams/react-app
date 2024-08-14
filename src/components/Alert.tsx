interface Props {
  text: string;
  color: string;
  onClose?: () => void;
}

const Alert = (props: Props) => {
  return (
    <div className={"alert alert-" + props.color + " alert-dismissable "}>
      {props.text}
      <button type="button" className="btn-close" onClick={props.onClose} />
    </div>
  );
};

export default Alert;
