interface data {
  className: string;
  name: string;
}

const Button = ({ className, name }: data) => {
  return (
    <div>
      <button className={`${className}`}>{name}</button>
    </div>
  );
};
export default Button;
