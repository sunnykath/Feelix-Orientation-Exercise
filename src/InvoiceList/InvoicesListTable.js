import { Table, Checkbox, Label, EInvoiceIcon } from "@myob/myob-widgets";

const iconWidth = "42px";

export function InvoiceListTableHeader() {
  return (
    <Table
      hasActions
      responsiveWidths={[
        {
          "min-width": "735px",
          config: [
            { columnName: "IssueDate", styles: { width: "115px" } },
            { columnName: "DueDate", styles: { width: "110px" } },
            { columnName: "Status", styles: { width: "100px" } },
            { columnName: "eInvoicing", styles: { width: "42px" } },
            { columnName: "PONumber", styles: { visibility: "hidden" } },
          ],
        },
        {
          "min-width": "1315px",
          config: [
            { columnName: "InvoiceNo", styles: { width: "115px" } },
            { columnName: "Amount", styles: { width: "120px" } },
            { columnName: "BalanceDue", styles: { width: "150px" } },
          ],
        },
      ]}
    >
      <Table.Header>
        <Table.HeaderItem width="auto" cellRole="checkbox">
          <Checkbox
            name="bulk-select"
            label="Bulk select"
            hideLabel
            onChange={() => {}}
          />
        </Table.HeaderItem>
        <Table.HeaderItem onSort={() => {}} columnName="IssueDate">
          Issue Date
        </Table.HeaderItem>
        <Table.HeaderItem columnName="eInvoicing" />
        <Table.HeaderItem onSort={() => {}} columnName="InvoiceNo">
          Invoice No
        </Table.HeaderItem>
        <Table.HeaderItem onSort={() => {}} columnName="Customer">
          Customer
        </Table.HeaderItem>
        <Table.HeaderItem onSort={() => {}} columnName="PONumber">
          PO Number
        </Table.HeaderItem>
        <Table.HeaderItem onSort={() => {}} columnName="Amount" align="right">
          Amount ($)
        </Table.HeaderItem>
        <Table.HeaderItem
          onSort={() => {}}
          columnName="BalanceDue"
          align="right"
        >
          Balance Due ($)
        </Table.HeaderItem>
        <Table.HeaderItem onSort={() => {}} columnName="DueDate">
          Due Date
        </Table.HeaderItem>
        <Table.HeaderItem onSort={() => {}} columnName="Status">
          Status
        </Table.HeaderItem>
        <Table.HeaderItem columnName="Activity">Activity</Table.HeaderItem>
      </Table.Header>
    </Table>
  );
}

export function InvoiceListTableBody() {
  const tableData = [
    {
      Id: 1,
      IssueDate: "25/09/2022",
      InvoiceNo: "001",
      Customer: "Sollicitudin Ultricies",
      PONumber: "some text",
      Amount: 10.0,
      BalanceDue: 10.0,
      DueDate: "25/10/2022",
      Status: "Closed",
      Activity: "Emailed",
    },
    {
      Id: 2,
      IssueDate: "04/06/2023",
      InvoiceNo: "002",
      Customer: "Bob Kelso",
      PONumber: "some other text",
      Amount: 45.0,
      BalanceDue: 45.0,
      DueDate: "04/07/2023",
      Status: "Open",
      Activity: "Delivery Failed",
    },
    {
      Id: 3,
      IssueDate: "15/11/2023",
      InvoiceNo: "003",
      Customer: "John Doe",
      PONumber: "sample po",
      Amount: 20.0,
      BalanceDue: 20.0,
      DueDate: "15/12/2023",
      Status: "Open",
      Activity: "Payment Received",
    },
    {
      Id: 4,
      IssueDate: "02/03/2024",
      InvoiceNo: "004",
      Customer: "Jane Smith",
      PONumber: "test po",
      Amount: 75.0,
      BalanceDue: 75.0,
      DueDate: "02/04/2024",
      Status: "Open",
      Activity: "Phone Call",
    },
    {
      Id: 5,
      IssueDate: "10/07/2024",
      InvoiceNo: "005",
      Customer: "ABC Company",
      PONumber: "example po",
      Amount: 30.0,
      BalanceDue: 30.0,
      DueDate: "10/08/2024",
      Status: "Closed",
      Activity: "Payment Reminder",
    },
    {
      Id: 6,
      IssueDate: "21/12/2024",
      InvoiceNo: "006",
      Customer: "XYZ Corporation",
      PONumber: "dummy po",
      Amount: 50.0,
      BalanceDue: 0.0,
      DueDate: "21/01/2025",
      Status: "Closed",
      Activity: "Refund Issued",
    },
    {
      Id: 7,
      IssueDate: "08/05/2025",
      InvoiceNo: "007",
      Customer: "John Smith",
      PONumber: "another po",
      Amount: 15.0,
      BalanceDue: 15.0,
      DueDate: "08/06/2025",
      Status: "Open",
      Activity: "Meeting Scheduled",
    },
    {
      Id: 8,
      IssueDate: "17/10/2025",
      InvoiceNo: "008",
      Customer: "Acme Corporation",
      PONumber: "xyz123",
      Amount: 90.0,
      BalanceDue: 0.0,
      DueDate: "17/11/2025",
      Status: "Closed",
      Activity: "Invoice Sent",
    },
    {
      Id: 9,
      IssueDate: "03/03/2026",
      InvoiceNo: "009",
      Customer: "Jane Doe",
      PONumber: "abc789",
      Amount: 25,
      BalanceDue: 10.0,
      DueDate: "03/04/2026",
      Status: "Open",
      Activity: "Follow-up Call",
    },
    {
      Id: 10,
      IssueDate: "12/08/2026",
      InvoiceNo: "010",
      Customer: "XYZ Enterprises",
      PONumber: "test123",
      Amount: 60.0,
      BalanceDue: 60.0,
      DueDate: "12/09/2026",
      Status: "Closed",
      Activity: "Payment Received",
    },
  ];

  return (
    <Table hasActions onRowSelect={() => {}}>
      <Table.Body>
        {tableData.map((row) => (
          <Table.Row key={row.Id}>
            <Table.RowItem width="auto" cellRole="checkbox" valign="middle">
              <Checkbox />
            </Table.RowItem>
            <Table.RowItem columnName="IssueDate">
              {row.IssueDate}
            </Table.RowItem>
            <Table.RowItem columnName="eInvoicing">
              {row.Id % 2 === 0 && <EInvoiceIcon color="brand" />}
            </Table.RowItem>
            <Table.RowItem columnName="InvoiceNo">
              <a href={`/#`}>{row.InvoiceNo}</a>
            </Table.RowItem>
            <Table.RowItem columnName="Customer" textWrap="Wrap">
              <a href={`/#`}>{row.Customer}</a>
            </Table.RowItem>
            <Table.RowItem columnName="PONumber">{row.PONumber}</Table.RowItem>
            <Table.RowItem columnName="Amount" align="right">
              {row.Amount}
            </Table.RowItem>
            <Table.RowItem columnName="BalanceDue" align="right">
              {row.BalanceDue}
            </Table.RowItem>
            <Table.RowItem columnName="DueDate">
              <Label tone={row.Status === "Open" ? "danger" : "neutral"}>
                {row.DueDate}
              </Label>
            </Table.RowItem>
            <Table.RowItem columnName="Status">
              <Label
                type="boxed"
                tone={row.Status === "Open" ? "danger" : "success"}
              >
                {row.Status}
              </Label>
            </Table.RowItem>
            <Table.RowItem columnName="Activity">{row.Activity}</Table.RowItem>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
