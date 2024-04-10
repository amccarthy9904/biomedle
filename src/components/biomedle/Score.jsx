
const Score = ({ name, area, id }) => {

  return (
    <li>
      <div>
        <span>{name}</span> - <span>{area}km<sup>2</sup></span>
      </div>
    </li>
  );
};

export default Score;