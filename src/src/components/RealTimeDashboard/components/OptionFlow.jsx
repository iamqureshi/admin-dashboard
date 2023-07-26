import React from "react";
import OptionFlowTable from "./OptionFlowTable";
import useOptionFlow from "./OptionFlow.hooks";

export default function OptionFlow() {
  const { optionFlowList } = useOptionFlow();

  return (
    <>
      <OptionFlowTable
        columns={[
          {
            id: "tradeTime",
            disablePadding: true,
            label: "TIME",
          },
          {
            id: "ticker",
            label: "TICKER",
          },
          {
            id: "expirationDate",
            label: "EXPIRATION",
          },
          {
            id: "strikePriceInCents",
            label: "STRIKE",
          },
          {
            id: "contractType",
            label: "CONTRACT",
          },
          {
            id: "sentiment",
            label: "SENTIMENT",
          },
          {
            id: "referencePriceInCents",
            label: "REFERENCE",
          },
          {
            id: "size",
            label: "SIZE @ PRICE",
          },
          {
            id: "bidPriceInCent",
            label: "BID @ ASK",
          },
        ]}
        rows={(optionFlowList && optionFlowList) || []}
      />
    </>
  );
}
