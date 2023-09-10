import styles3 from "./Table.module.css";
import EachItem from "./EachItem";

const Table = ({ itemsList }) => {
  return (
    <div>
      {itemsList.length > 0 && (
        <table className={styles3.result}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {itemsList.map((eachItem) => {
              return (
                <EachItem item={eachItem} key={Math.random().toString()} />
              );
            })}
          </tbody>
        </table>
      )}
      {itemsList.length === 0 && (
        <div className={styles3.para}>
          <p>No investment calculated yet.</p>
        </div>
      )}
    </div>
  );
};
export default Table;
