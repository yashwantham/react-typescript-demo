type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export function Button(props: ButtonProps) {
  return (
    <>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </>
  );
}
