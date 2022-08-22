import React, { useState } from "react";
import styles from "../styles/Card.module.css";

export default function CompletedCardItem(props) {
  return (
    <div className={styles.completedTaskItem}>
      <div className={styles.completedTaskItemData}>
        <i
          className={`bi bi-check-circle-fill  ${styles.checked}`}
          onClick={() => props.markInComplete(props.item)}
        ></i>
        <p>{props.item.ItemName}</p>
      </div>
      <div>
        <i
          className={`bi bi-trash ${styles.delete}`}
          onClick={() => props.deleteCompletedItem(props.item.Id)}
        ></i>
      </div>
    </div>
  );
}
