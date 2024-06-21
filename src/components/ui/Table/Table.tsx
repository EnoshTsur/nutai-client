import styled from "styled-components";

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const TableHead = styled.thead`
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const TableBody = styled.tbody`
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const TableRow = styled.tr`
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
`;

const TableData = styled.td`
  padding: 8px;
  background: linear-gradient(to right, transparent, #212020);
  color: #d3d;
  border: 1px solid #d3d3;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  @media (max-width: 768px) :before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 8px;
    font-weight: bold;
    text-align: left;
  }
`;

interface TableProps {
  readonly headers: ReadonlyArray<string>;
  readonly tableRows: ReadonlyArray<ReadonlyArray<string>>;
}

const Table = ({ headers, tableRows }: TableProps) => {
  return (
    <TableWrapper>
      <TableContainer>
        <TableHead>
          {headers.map((header, index) => (
            <TableHeader key={header + index}>{header}</TableHeader>
          ))}
        </TableHead>
        <TableBody>
          {tableRows.map((row, index) => (
            <TableRow key={row[index] + index}>
              {row.map((col, index) => (
                <TableData key={col + index}>{col}</TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </TableWrapper>
  );
};

export default Table
