const Card = ({ card }) => {
  let areaName;
  switch (card.id) {
    case 1:
      areaName = "first";
      break;
    case 2:
      areaName = "second";
      break;
    case 3:
      areaName = "third";
      break;
    case 4:
      areaName = "fourth";
      break;
    default:
      areaName = "please make the ids like 1,2,3 & 4";
  }
  return (
    <article
      className={`bg-white p-10 drop-shadow-xl rounded-lg overflow-hidden border-t-4 border-cyan-400 ${card.color}`}
    >
      <h3 className="text-2xl font-bold text-tw-very-dark">{card.h1}</h3>
      <p className="text-tw-grayish mt-3">{card.p}</p>
      <div className="flex justify-end mt-10">
        <img src={card.img} alt={card.p} />
      </div>
    </article>
  );
};

export default Card;
