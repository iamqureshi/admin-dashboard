import useEquityHook from "./Equity.hooks";
import EquityAndDarkPoolPrice from "./EquityAndDarkPoolPriceTable";

export default function Equity() {
  const { equityList } = useEquityHook();
  
  return (
    <>
      <EquityAndDarkPoolPrice
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
            id: "size",
            label: "SIZE",
          },
          {
            id: "priceInCents",
            label: "IPOS",
          },
        ]}
        rows={(equityList && equityList) || []}
      />
    </>
  );
}
