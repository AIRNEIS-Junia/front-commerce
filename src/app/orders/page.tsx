import React from "react";
import styles from "./orders.module.css";
import RecapLine from "@/components/Order/Recap/RecapLine";

const Orders = () => {
  const ordersData = [
    { year: 2024, lines: [1, 2, 3, 4, 5] },
    { year: 2023, lines: [1, 2, 3, 4, 5] },
  ];
  return (
    <main
      className={`${styles.main} w-mobile-container lg:w-tabletContainer mx-auto p-4`}
    >
      <div className={styles.header}></div>
      <h1 className={"pb-11 text-center"}>Orders</h1>
      {ordersData.map((order, orderIndex) => (
        <section key={orderIndex} className={styles.year}>
          <div className={styles.titleContainer}>
            <h4>{order.year}</h4>
          </div>
          {order.lines.map((line, lineIndex) => (
            <RecapLine key={lineIndex} />
          ))}
        </section>
      ))}
    </main>
  );
};

export default Orders;
