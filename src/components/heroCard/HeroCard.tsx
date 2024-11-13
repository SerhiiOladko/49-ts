interface IHeroCardProps {
  isDark: boolean;
  name: string;
  image: string;
  age: number;
  weapons: string[];
}


function HeroCard({ isDark, name, image, age, weapons }: IHeroCardProps) {
  return (
    <article className={isDark ? "hero-dark" : "hero-light"}>
      <h3>{name}</h3>
      <p>
        {name} is {age} years old
      </p>
      <img src={image} alt="" />
      <p>
        Hero weapons
        {weapons.map((weapon, index) => (
          <span className="weapon" key={index}>
            {" "}
            {weapon}
          </span>
        ))}
      </p>
    </article>
  );
}

export default HeroCard;
