import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "T-001",
      paymentStatus: "Open",
      totalAmount: "$250.00",
      paymentMethod: "PLTR",
    },
    {
      invoice: "T-002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PYPL",
    },
    {
      invoice: "T-003",
      paymentStatus: "Filled",
      totalAmount: "$350.00",
      paymentMethod: "AVAX",
    },
    {
      invoice: "T-004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "PLTR",
    },
    {
      invoice: "T-005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PYPL",
    },
    {
      invoice: "T-006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "AVAX",
    },
    {
      invoice: "T-007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "PLTR",
    },
  ]
  
  export function TradeTable() {
    return (
      <Table>
        <TableCaption>Recent Trades</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell >{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  