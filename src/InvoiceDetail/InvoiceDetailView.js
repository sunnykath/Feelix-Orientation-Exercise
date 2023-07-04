import {
  Alert,
  Box,
  Button,
  ButtonLink,
  ButtonRow,
  Checkbox,
  ClockIcon,
  Combobox,
  DatePicker,
  DetailHeader,
  DollarIcon,
  Dropdown,
  Input,
  Label,
  LineItemTable,
  LineItemTemplate,
  MoreIcon,
  RadioButtonGroup,
  Text,
  TextArea,
  TextLink,
  Tooltip,
  TotalsHeader,
} from "@myob/myob-widgets";
import { useState } from "react";
import "./InvoiceDetailView.css";

export default function InvoiceDetailView() {
  const totalItems = [
    <TotalsHeader.TotalItem
      key="totals-1"
      label="Total amount"
      count="$111.00"
    />,
    <TotalsHeader.TotalItem
      key="totals-2"
      label="Balance due"
      count="$10.00"
    />,
    <TotalsHeader.TotalItem
      key="totals-3"
      label="Overdue"
      count="$101.00"
      //   className="overdue"
    />,
  ];

  const headerActions = [
    <ButtonLink key="button-1" icon={<ClockIcon />}>
      Active history
    </ButtonLink>,
    <ButtonLink key="button-2" icon={<DollarIcon />}>
      Receive payment
    </ButtonLink>,
  ];

  const accountsMetaData = [
    { columnName: "accountNo", columnWidth: "63px", showData: true },
    { columnName: "description", columnWidth: "243px", showData: true },
  ];

  const accountItems = [
    { accountNo: "4-123", description: "My Sales Account 1" },
    { accountNo: "4-456", description: "Sales Account 2" },
    { accountNo: "4-354", description: "Sales Account XYZ" },
  ];

  const customerMetaData = [
    { columnName: "name", columnWidth: "243px", showData: true },
  ];

  const customerItems = [
    { name: "Customer 1" },
    { name: "Test Customer" },
    { name: "Customer XYZ" },
  ];

  const primary = (
    <div>
      <Combobox
        addNewItem={{
          label: "Create new customer",
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
        labelAccessory={
          <Tooltip triggerContent={<span> *</span>}>Required</Tooltip>
        }
      />
      <Text tone="neutral">Billing Address</Text>
      <Text>
        Patrick Bateman
        <br />
        34 Bailey Avenue <br />
        Mooranbin Victoria 3025 <br />
        Australia <br />
      </Text>
    </div>
  );

  const secondary = (
    <div>
      <Input
        name="InvoiceNo"
        label="Invoice Number"
        labelAccessory={
          <Tooltip triggerContent={<span> *</span>}>Required</Tooltip>
        }
      />
      <Input name="CusomterPONumber" label="Cusomter PO number" />
      <DatePicker
        label="Issue Date"
        labelAccessory={
          <Tooltip triggerContent={<span> *</span>}>Required</Tooltip>
        }
        name="Issue Date"
      />
      <DatePicker
        disabled
        label="Due Date"
        labelAccessory={
          <Tooltip triggerContent={<span> *</span>}>Required</Tooltip>
        }
        name="Due Date"
      />
      <RadioButtonGroup
        label="Amounts are"
        name="dh-example-1"
        options={["Tax inclusive", "Tax exclusive"]}
        onChange={() => ({})}
      />
    </div>
  );

  const dropdownItems = [
    <Dropdown.Item key="action1" label="Action one" value="table-action1" />,
    <Dropdown.Item key="action2" label="Action two" value="table-action2" />,
  ];
  const dropdownToggle = (
    <Dropdown.Toggle size="xs" aria-label="more options">
      <MoreIcon size="16px" />
    </Dropdown.Toggle>
  );

  const columnConfig = [
    {
      config: [
        {
          columnName: "Amount ($) *",
          styles: { width: "120px", align: "right" },
        },
        {
          columnName: "Tax code *",
          styles: { width: "90px" },
        },
        {
          columnName: "Job",
          styles: { width: "90px" },
        },
        {
          columnName: "moreOption",
          styles: { width: "36px" },
        },
      ],
    },
  ];
  const headerLabels = [
    "Description",
    <>
      Account * <Tooltip />
    </>,
    "Amount ($) *",
    "Job",
    "Tax code *",
    "moreOption",
  ];
  const [data, setData] = useState([
    {
      id: 1,
      description: "Yak shaving - 1/2 hour",
      account: { accountNo: "4-123", description: "My Sales Account 1" },
      amount: "48.50",
      job: {},
      taxcode: { name: "GST" },
    },
    {
      id: 2,
      description: "Yak shower - 1/2 hour",
      account: { accountNo: "4-456", description: "Sales Account 2" },
      amount: "50.00",
      job: {},
      taxcode: { name: "WET" },
    },
    {
      id: 3,
      description: "Yak blow dry - 1/2 hour",
      amount: "12.50",
    },
  ]);
  const items = [
    {
      name: "ABN",
    },
    { name: "CAP" },
    { name: "GST" },
    { name: "FRE" },
    { name: "INP" },
    { name: "GNR" },
    { name: "NTR" },
  ];

  const metaData = [
    { columnName: "name", columnWidth: "63px", showData: true },
  ];

  const onRemoveRow = (index) => {
    setData(data.filter((value, dataIndex) => dataIndex !== index));
  };

  const onAddRow = (newData) => {
    setData(data.concat(newData));
  };

  const onRowChange = (index, name, value) => {
    data[index][name] = value;
    setData([...data]);
  };

  const moveRow = (dragIndex, hoverIndex) => {
    const dragRow = data[dragIndex];
    const newData = data.slice();

    newData.splice(dragIndex, 1);
    newData.splice(hoverIndex, 0, dragRow);

    setData(newData);
  };

  const renderRow = (index, data, onChange, labels) => (
    <LineItemTable.Row
      id={data.id}
      key={data.id}
      index={index}
      moveRow={moveRow}
      labels={labels}
    >
      <TextArea
        name="description"
        value={data.description ? data.description : ""}
        onChange={onChange}
        autoSize
        label="Description"
      />
      <Combobox
        items={accountItems}
        metaData={accountsMetaData}
        selected={data.account ? data.account : {}}
        onChange={LineItemTable.valueHandler(onChange, "account")}
        name="account"
        label="Account"
      />
      <TextArea
        name="amount"
        value={data.amount ? data.amount : ""}
        onChange={onChange}
        autoSize
        label="Amount ($)"
      />
      <Combobox
        items={items}
        metaData={metaData}
        selected={data.job ? data.job : {}}
        onChange={LineItemTable.valueHandler(onChange, "job")}
        name="job"
        label="Job"
      />
      <Combobox
        items={items}
        metaData={metaData}
        selected={data.taxcode ? data.taxcode : {}}
        onChange={LineItemTable.valueHandler(onChange, "taxcode")}
        name="taxcode"
        label="Tax code"
      />
      <Dropdown
        right
        items={dropdownItems}
        onSelect={() => {}}
        toggle={dropdownToggle}
        label="dropdown"
      />
    </LineItemTable.Row>
  );

  const notesToCustomer = (
    <Box width="400px" padding="xl">
      <Box style={{ display:"flex", flexDirection: "col", justifyContent:"space-between" }}>
        <Text tone="neutral" marginBottom="5xs">
          Notes to customer <Tooltip></Tooltip>
        </Text>
        <Checkbox
          name="stay signed in"
          label="Save as default"
        />
      </Box>
      <Combobox
        // marginBottom="0px"
        style={{marginBottom:"0px"}}
        width="xl"
        addNewItem={{
          label: "Create new note",
          onAddNew: () => console.log("onAddNew callback"),
        }}
        items={[]}
        metaData={[]}
        name="notes"
        onChange={() => {
          console.log("onChange callback");
        }}
      />
      <TextArea width="xl" rows={3}/>
    </Box>
  );

  const mockOptions = <DetailHeader primary={primary} secondary={secondary} />;

  const alerts = [
    <Alert tone="info">
      You're conditionally pre-approved to add the green pay now button to your
      invoice. Your customers can pay instantly by card, BPay or Apple Pay.
      <Text>
        <TextLink href={"/#"} marginRight="sm">
          Add 'pay now' to your invoices
        </TextLink>
      </Text>
    </Alert>,
  ];

  const primaryButtons = [
    <Button type="secondary">Cancel</Button>,
    <Button type="secondary">Save and...</Button>,
    <Button>Save</Button>,
  ];

  const secondaryyButtons = [
    <Button type="secondary">Delete</Button>,
    <Button type="secondary">Create Payment</Button>,
    <Button type="secondary">View PDF</Button>,
    <Button type="secondary">Email Invoice</Button>,
    <Button type="secondary">Save as recurring</Button>,
  ];

  const buttonRow = (
    <ButtonRow primary={primaryButtons} secondary={secondaryyButtons} />
  );

  return (
    <LineItemTemplate
      pageHead={
        <TotalsHeader
          title="Invoice 00000123"
          actions={headerActions}
          totalItems={totalItems}
          tag={
            <Label type="boxed" color="red">
              Open
            </Label>
          }
        />
      }
      options={mockOptions}
      actions={buttonRow}
      alert={alerts}
    >
      <LineItemTable
        data={data}
        className="custom-table"
        onAddRow={onAddRow}
        onRowChange={onRowChange}
        onRemoveRow={onRemoveRow}
        renderRow={renderRow}
        labels={headerLabels}
        columnConfig={columnConfig}
      >
        <Box display="flex" justifyContent="space-between">
          {notesToCustomer}
          <LineItemTable.Total>
            <LineItemTable.Totals title="Subtotal" amount="$111.00" />
            <LineItemTable.Totals
              title="Freight ($)"
              amount="Set Up Frieght Account"
            />
            <LineItemTable.Totals title="Tax" amount="$2.00" />
            <LineItemTable.Totals title="Total" amount="$111.00" />
            <LineItemTable.Totals title="Amount paid" amount="$10.00" />
            <LineItemTable.Totals title="Balance due" amount="$101.00" />
          </LineItemTable.Total>
        </Box>
      </LineItemTable>
    </LineItemTemplate>
  );
}
