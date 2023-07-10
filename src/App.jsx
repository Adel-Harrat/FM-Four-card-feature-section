import "./App.css";
import Card from "./components/Card";

const cards = [
  {
    id: 1,
    color: "border-t-tw-cyan",
    h1: "Supervisor",
    p: "Monitors activity to identify project roadblocks",
    img: "./images/icon-supervisor.svg",
  },
  {
    id: 2,
    color: "border-t-tw-red",
    h1: "Team Builder",
    p: "Scans our talent network to create the optimal team for your project",
    img: "./images/icon-team-builder.svg",
  },
  {
    id: 3,
    color: "border-t-tw-orange",
    h1: "Karma",
    p: "Regularly evaluates our talent to ensure quality",
    img: "./images/icon-karma.svg",
  },
  {
    id: 4,
    color: "border-t-tw-blue",
    h1: "Calculator",
    p: "Uses data from past projects to provide better delivery estimates",
    img: "./images/icon-calculator.svg",
  },
];

function App() {
  return (
    <div className="font-primary min-h-screen bg-tw-light">
      <main className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-[200] text-tw-very-dark mt-16 inline-block">
            Reliable, efficient delivery
          </h1>
          <h2 className="text-2xl md:text-3xl lg:mt-4 lg:text-[2.5rem] font-[700] text-tw-very-dark">
            Powered by Technology
          </h2>
          <p className="text-tw-grayish max-w-lg mx-auto mt-4 leading-6 px-10 lg:px-0">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>

        <section className="my-10 grid-section px-10">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
