"use client";

import * as React from "react";
import {
  CancelCircleIcon,
  CursorProgress02Icon,
  Search01Icon,
} from "hugeicons-react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DatePickerWithRange } from "./DatePickerWithRange";
// import { invoices as data } from "@/lib/damp-data";
import { FaCross, FaX } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/services/userService";
import { useAppSelector } from "@/lib/hooks";
import Cookies from "js-cookie";

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "rowId",
    header: "Row ID",
    cell: ({ row }) => <div>{row.getValue("rowId")}</div>,
  },
  {
    accessorKey: "productName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Product Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("productName")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "TZS",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-right">Quantity</div>,
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"));
      return <div className="text-right font-medium">{quantity}</div>;
    },
  },
  {
    accessorKey: "ownerFullName",
    header: "Owner Full Name",
    cell: ({ row }) => <div>{row.getValue("ownerFullName")}</div>,
  },
  {
    accessorKey: "ownerLockNumber",
    header: "Owner Lock Number",
    cell: ({ row }) => <div>{row.getValue("ownerLockNumber")}</div>,
  },
  {
    accessorKey: "ownerPhoneNumber",
    header: "Owner Phone Number",
    cell: ({ row }) => <div>{row.getValue("ownerPhoneNumber")}</div>,
  },
  {
    accessorKey: "pickupCenter",
    header: "Pickup Center",
    cell: ({ row }) => <div>{row.getValue("pickupCenter")}</div>,
  },
  {
    accessorKey: "origin",
    header: "Origin",
    cell: ({ row }) => <div>{row.getValue("origin")}</div>,
  },
  {
    accessorKey: "destination",
    header: "Destination",
    cell: ({ row }) => <div>{row.getValue("destination")}</div>,
  },
  {
    accessorKey: "targetPerson",
    header: "Target Person",
    cell: ({ row }) => <div>{row.getValue("targetPerson")}</div>,
  },
  {
    accessorKey: "agreementCreatedAt",
    header: "Agreement Created At",
    cell: ({ row }) => (
      <div>{new Date(row.getValue("agreementCreatedAt")).toLocaleString()}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "cancelled",
    header: "Cancelled",
    cell: ({ row }) => <div>{row.getValue("cancelled") ? "Yes" : "No"}</div>,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy invoice ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function OrdersTable() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const accessToken = Cookies.get("next-auth.session-token");

  const {
    data: orders,
    isError,
    isLoading,
  } = useQuery({
    queryKey: "orders",
    queryFn: () => getOrders(accessToken),
  });

  console.log("error", isError);
  console.log("orders from query", orders);

  const table = useReactTable({
    data: orders ?? [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4 max-sm:flex-col max-sm:py-2">
        <div className="flex items-center space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
          <div className="relative max-sm:w-full">
            <Input
              placeholder="Search orders..."
              value={table.getColumn("productName")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table
                  .getColumn("productName")
                  ?.setFilterValue(event.target.value)
              }
              className="pl-8 max-sm:w-full"
            />
            <div className="absolute inset-y-0 left-0 flex items-center text-center py-3 px-3">
              <Search01Icon size={18} className="text-muted-foreground" />
            </div>
          </div>

          <DatePickerWithRange />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto max-sm:w-full">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="max-sm:w-full">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {["PENDING", "ACCEPTED", "DECLINED"].map((status, i) => (
                <DropdownMenuCheckboxItem
                  key={i}
                  className="capitalize"
                  onCheckedChange={(value) => {
                    if (status === "all")
                      table.getColumn("status")?.setFilterValue("");
                    table.getColumn("status")?.setFilterValue(status);
                  }}
                >
                  {status}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <CancelCircleIcon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      <div className="rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
