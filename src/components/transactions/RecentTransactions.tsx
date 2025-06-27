import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { Transaction } from "@/types"
import { format } from "date-fns"

interface RecentTransactionsProps {
  transactions: Transaction[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    {transaction.borrower?.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{transaction.borrower?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(transaction.created_at), "MMM dd, yyyy")}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline">₱{transaction.total_price.toFixed(2)}</Badge>
                <p className="text-xs text-muted-foreground mt-1">
                  Due: {format(new Date(transaction.due_date), "MMM dd")}
                </p>
              </div>
            </div>
          ))}
          {transactions.length === 0 && (
            <div className="text-center py-4 text-muted-foreground text-sm">No recent transactions</div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
