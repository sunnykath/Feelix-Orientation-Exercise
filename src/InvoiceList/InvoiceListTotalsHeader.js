import { Box, Combobox, TotalsHeader } from "@myob/myob-widgets";

export default function InvoiceListTotalsHeader() {
  const totalItems = [
    <TotalsHeader.TotalItem
      key="totals-1"
      label="Total amount"
      count="$999.99"
    />,
    <TotalsHeader.TotalItem
      key="totals-2"
      label="Balance due"
      count="$4554.00"
    />,
    <TotalsHeader.TotalItem
      key="totals-3"
      label="Overdue"
      count="$50.00"
      className="overdue"
    />,
  ];

  const customerMetaData = [
    { columnName: "name", columnWidth: "63px", showData: true },
    { columnName: "description", columnWidth: "243px" },
  ];

  const customerItems = [
    { name: "All", description: "All Customers" },
    { name: "ABN", description: "ABN Not Disclosed - Withholdings" },
    { name: "CAP", description: "Capital Acquisitions" },
    { name: "FRE", description: "GST Free" },
  ];

  const totalsHeaderActions = [
    <Box width="350px">
      <Combobox
        addNewItem={{
          label: "Create tax code",
          onAddNew: () => console.log("onAddNew callback"),
        }}
        items={customerItems}
        metaData={customerMetaData}
        name="Customer"
        label="Customer"
        onChange={() => {
          console.log("onChange callback");
        }}
        defaultItem={customerItems[0]}
      />
    </Box>,
  ];

  return <TotalsHeader actions={totalsHeaderActions} totalItems={totalItems} />;
}
