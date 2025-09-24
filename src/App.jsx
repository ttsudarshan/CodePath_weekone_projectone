import events from "./data/events";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">⚽ FC Barcelona Upcoming Games</h1>
      <div className="cards-container">
        {events.map((event, index) => (
          <Card
            key={index}
            title={event.title}
            subtitle={event.subtitle}
            image={event.image}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
