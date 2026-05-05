function Greeting({ name = "Guest", timeOfDay }) {
  let message;

  switch (timeOfDay) {
    case 'morning':
      message = `Good morning, ${name}! Hope you have a great day!`;
      break;
    case 'afternoon':
      message = `Good afternoon, ${name}! How's your day going?`;
      break;
    case 'evening':
      message = `Good evening, ${name}! Relax and unwind!`;
      break;
    default:
      message = `Hello, ${name}!`;
  }

  return <p className="greeting">{message}</p>;
}

export default Greeting;
