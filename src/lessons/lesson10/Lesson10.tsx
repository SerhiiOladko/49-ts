import { useEffect, useState } from 'react';
import styles from './Lesson10.module.css';
import Loader from './Loader';

function FetchCatFact({ onNewFact }: { onNewFact: (fact: string) => void }) {
  const [isLoading, setIsLoading] = useState(false);

  const fetchFact = () => {
    setIsLoading(true);
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => onNewFact(data.fact))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div>
      <button className={styles.button} onClick={fetchFact} disabled={isLoading}>
        GET MORE INFO
      </button>
      {isLoading && <Loader />}
    </div>
  );
}

function FactList({ facts }: { facts: string[] }) {
  return (
    <div className={styles.factBlock}>
      {facts.map((fact, index) => (
        <p key={index} className={styles.fact}>
          {fact}
        </p>
      ))}
    </div>
  );
}

export default function Lesson10(): JSX.Element {
  const [facts, setFacts] = useState<string[]>([]);

  const handleNewFact = (fact: string) => {
    setFacts(prevFacts => [...prevFacts, fact]);
  };

  const handleDeleteAll = () => {
    setFacts([]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cat Facts</h1>
      <FetchCatFact onNewFact={handleNewFact} />
      {facts.length > 0 && (
        <button className={styles.button} onClick={handleDeleteAll}>
          DELETE ALL DATA
        </button>
      )}
      {facts.length > 0 && <FactList facts={facts} />}
    </div>
  );
}

