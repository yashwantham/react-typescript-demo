import { personProps } from "./types";

export function Person(props: personProps) {
  return (
    <>
      <div>
        {props.name.first} {props.name.last}
      </div>
    </>
  );
}
