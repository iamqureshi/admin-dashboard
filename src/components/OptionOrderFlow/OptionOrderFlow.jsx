import OptionOrderFlowTable from "../Tables/OptionOrderFlowTable";
import useOptionOrderFlow from "./OptionOrderFlow.hooks";

export default function OptionOrderFlow() {
  const { optionTableLoading, options} = useOptionOrderFlow();
  
  return (
    <>
      <OptionOrderFlowTable
//         setOptionTableOffset={setOptionTableOffset}
  //      optionTableOffset={optionTableOffset}
    //    totalRecords={totalCount} 
        loading={optionTableLoading}
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
        rows={(options && options) || []}
      />
    </>
  );
}
