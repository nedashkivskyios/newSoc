import React, {FC} from 'react';
import styles from "./DialogItems.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogItemsDataType} from "../../../../state/state";

type PropsType = {
  dialogItemsData: DialogItemsDataType
}

export const DialogItems: FC<PropsType> = ({dialogItemsData}) => {
  return (
    <div className={styles.dialogItems}>
      {dialogItemsData.map((d, i) => <DialogItem key={`${d.id}-${i}`} title={d.title} id={d.id}/>)}
    </div>
  );
};
