import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h4>Preact Island</h4>
      <p>{greeting}! Thank you for visiting!</p>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
