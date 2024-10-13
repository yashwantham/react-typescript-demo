import { GreetProps } from "./types";

export function Greet({ name, messageCount = 0, isLoggedIn }: GreetProps) {
  return (
    <>
      <div>
        {isLoggedIn ? (
          <h2>
            Welcome {name}! You have {messageCount} unread messages.
          </h2>
        ) : (
          <h2>Welcome Guest!</h2>
        )}
      </div>
    </>
  );
}
