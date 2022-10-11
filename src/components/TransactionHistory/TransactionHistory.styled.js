import styled from 'styled-components';
const TransactionTable = styled.table`
  border: 1px solid #eee;
  table-layout: fixed;
  width: 50%;
  margin-bottom: 20px;
`;
const HeadTable = styled.thead``;
const BodyTable = styled.tbody``;
const Tr = styled.tr``;
const TrBody = styled.tr`
  :nth-of-type(odd) {
    background: #fff;
  }
  :nth-of-type(even) {
    background: #f7f7f7;
  }
`;
const Th = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #2596be;
  border: 1px solid #dddddd;
`;
const Td = styled.td`
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: center;
`;

export { TransactionTable, HeadTable, BodyTable, Tr, TrBody, Th, Td };
