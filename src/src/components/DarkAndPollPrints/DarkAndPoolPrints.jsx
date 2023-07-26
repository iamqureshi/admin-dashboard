import utils from "@/Utils/Utils";
import DarkPoolPrintTable from "../Tables/DarkPoolPrintTable";
export default function DarkAndPoolPrints() {
  return (
    <>
      <DarkPoolPrintTable
        columns={[
          {
            id: "time",
            disablePadding: true,
            label: "TIME",
          },
          {
            id: "ticker",
            label: "TICKER",
          },
          {
            id: "sizeAndPrice",
            label: "SIZE @ PRICE",
          },
          {
            id: "notionalValue",
            label: "NOTIONAL VALUE",
          },
        ]}
        rows={[
          {
            time: 1,
            ticker: "ticker1",
            sizeAndPrice: `300 @ ${utils.getDollarPrice(1540)}`,
            notionalValue: utils.getDollarPrice(12.5),
          },
          {
            time: 2,
            ticker: "ticker2",
            sizeAndPrice: `300 @ ${utils.getDollarPrice(10)}`,
            notionalValue: utils.getDollarPrice(2.5),
          },
          {
            time: 3,
            ticker: "ticker3",
            sizeAndPrice: `36546 @ ${utils.getDollarPrice(105)}`,
            notionalValue: utils.getDollarPrice(26.5),
          },
          {
            time: 4,
            ticker: "ticker4",
            sizeAndPrice: `6 @ ${utils.getDollarPrice(105)}`,
            notionalValue: utils.getDollarPrice(9.5),
          },
          {
            time: 5,
            ticker: "ticker2",
            sizeAndPrice: `300 @ ${utils.getDollarPrice(10)}`,
            notionalValue: utils.getDollarPrice(2.5),
          },
          {
            time: 5,
            ticker: "ticker3",
            sizeAndPrice: `36546 @ ${utils.getDollarPrice(105)}`,
            notionalValue: utils.getDollarPrice(26.5),
          },
          {
            time: 6,
            ticker: "ticker4",
            sizeAndPrice: `6 @ ${utils.getDollarPrice(105)}`,
            notionalValue: utils.getDollarPrice(9.5),
          },
        ]}
      />
    </>
  );
}
