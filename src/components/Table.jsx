import TableRow from "./TableRow";
import styles from "./Table.module.css";
import data from "../data";

const Table = () => {
  return (
    <table className={styles.table_container}>
      <thead className={styles.table}>
        <tr>
          <th>№</th>
          <th>English</th>
          <th>Transcription</th>
          <th>Перевод</th>
          <th>Тег</th>
        </tr>
      </thead>
      <tbody>
        {data.map((word) => (
          <TableRow key={word.id} {...word} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
