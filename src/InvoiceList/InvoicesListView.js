import React from "react";
import {
  Button,
  PageHead,
  StandardTemplate,
  ThemeProvider,
  FilterBar,
  Select,
  DatePicker,
  Search,
  TextLink,
  Text,
  Alert,
} from "@myob/myob-widgets";
import {
  InvoiceListTableBody,
  InvoiceListTableHeader,
} from "./InvoicesListTable";
import "./InvoiceListView.css";
import InvoiceListTotalsHeader from "./InvoiceListTotalsHeader";

export default function InvoicesListView() {
  const alerts = [
    <Alert tone="info">
      You have <strong>1,200</strong> open invoices eligible for invoice
      financing with total value of <strong>$2,123.43</strong>. Access funds in
      as little as 24 hours while you wait to be paid. Subject to approval.{" "}
      <Text>
        <TextLink href={"/#"} marginRight="sm">
          Set up Invoice Financing
        </TextLink>
        <TextLink href={"/#"}>Don't show again</TextLink>
      </Text>
    </Alert>,
  ];

  const filterBar = (
    <FilterBar onReset={() => console.log("onFiltersreset")} resizeDelay={20}>
      <Select name="Status" label="Status">
        <Select.Option value="All" label="All" />
        <Select.Option value="All" label="Overdue" />
      </Select>
      <Select name="Type" label="Type">
        <Select.Option value="All" label="All" />
        <Select.Option value="Item" label="Item" />
        <Select.Option value="Service" label="Service" />
      </Select>
      <Select name="Period" label="Period">
        <Select.Option value="-3m" label="Last 3 months" />
      </Select>
      <FilterBar.Group>
        <DatePicker name="date-from" label="Date from" />
        <DatePicker name="date-to" label="Date to" />
      </FilterBar.Group>
      <Search
        name="search"
        onChange={() => console.log("onSearchChange")}
        label="Search"
      />
    </FilterBar>
  );

  const invoicePageHead = (
    <PageHead title="Invoices">
      <Button type="primary">Create invoice</Button>
    </PageHead>
  );

  return (
    <StandardTemplate
      fluid
      pageHead={invoicePageHead}
      filterBar={filterBar}
      tableHeader={<InvoiceListTableHeader />}
      subHeadChildren={<InvoiceListTotalsHeader />}
      alert={alerts}
    >
      <InvoiceListTableBody />
    </StandardTemplate>
  );
}
