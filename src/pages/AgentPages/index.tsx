import React from "react";
import DataTable from "@atom/DataTable/DataTable";
import { getColumns, getDummyData } from "./helper";

export default function Form() {
  const onAction = (row: any, action: any) => {};
  const cols = getColumns(onAction);
  return (
    <div>
      <title>AgentPages</title>
      <DataTable columns={cols} dataSource={getDummyData()} />
    </div>
  );
}
