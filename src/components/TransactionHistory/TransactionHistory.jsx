import PropTypes from 'prop-types';
import {
  TransactionTable,
  HeadTable,
  BodyTable,
  Tr,
  TrBody,
  Th,
  Td,
} from "components/TransactionHistory/TransactionHistory.styled"

export const TransactionHistory = ({transactions }) => {
    return (<TransactionTable>
      <HeadTable>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </HeadTable>

      <BodyTable>
        {transactions.map(transaction => (
          <TrBody key={transaction.id}>
            <Td>{transaction.type}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.currency}</Td>
          </TrBody>
        ))}
      </BodyTable>
    </TransactionTable>)
}