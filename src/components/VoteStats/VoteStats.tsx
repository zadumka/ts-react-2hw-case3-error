import styles from "./VoteStats.module.css";
import { Votes } from "../../types/votes";

interface Votes { 
  good: number; 
  neutral: number; 
  bad: number;
}

interface VoteStatsProps { 
  votes: Votes; 
  totalVotes: number; 
  positiveRate: number;
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
