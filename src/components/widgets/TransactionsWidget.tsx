import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

import FeatureVisibility from "./FeatureVisibility";
import WidgetCard from "../cards/WidgetCard";

type Transaction = {
  description: string;
  category: string;
  amount: number;
};

const data: Transaction[] = [
  { description: "Starbucks", category: "Food", amount: -5.5 },
  { description: "Uber", category: "Transport", amount: -18 },
  { description: "Salary", category: "Income", amount: 3200 },
];

const columns: ColumnDef<Transaction>[] = [
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Category",
    accessorKey: "category",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: (info) => {
      const value = info.getValue<number>();

      return (
        <span className={value > 0 ? "text-green-500" : "text-red-500"}>
          ${value}
        </span>
      );
    },
  },
];

export default function TransactionsWidget() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <FeatureVisibility>
      <WidgetCard>
        <table className="w-full text-sm">
          <thead className="text-left border-b border-zinc-200 dark:border-zinc-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-zinc-100 dark:border-zinc-800"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </WidgetCard>
    </FeatureVisibility>
  );
}
