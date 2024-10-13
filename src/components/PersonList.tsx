import { PersonListProps } from "./types";

export function PersonList(props: PersonListProps) {
  return (
    <>
      <div>
        {props.names.map((item) => (
          <h2>
            {item.first} {item.last}
          </h2>
        ))}
      </div>
    </>
  );
}
