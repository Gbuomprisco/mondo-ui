export class TransactionsHelper {
    public getAmountsByDate(transactions) {
        if (!transactions) {
            return;
        }

        return transactions.
            map(transaction => {
                return {
                    value: transaction.account_balance / 100,
                    currency: transaction.currency,
                    key: new Date(transaction.created)
                };
        }).sort((prev, next) => next.key.getTime() - prev.key.getTime());
    }

    public getSpentPastDays(transactions, days: number): number {
        const today = new Date(),
            lastWeek = today.setDate(today.getDate() - days),
            result = transactions.filter(transaction => {
                const isWithinRange = new Date(transaction.created).getTime() > lastWeek;
                return isWithinRange && !transaction.is_load;
            })
            .map(transaction => transaction.amount);

        if (result.length) {
            return result.reduce((acc, current) => {
                return acc + current;
            }) / 100;
        }

        return 0;
    }
}
