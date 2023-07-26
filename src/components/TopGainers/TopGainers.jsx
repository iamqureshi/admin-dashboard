import utils from '@/Utils/Utils';
import GainerAndLooserTable from '../Tables/GainerAndLooserTable';

export default function TopGainers() {
  return (
    <>
      <GainerAndLooserTable
        columns={[
          {
            id: "stmOl",
            disablePadding: true,
            label: "STM/OL",
          },
          {
            id: "orders",
            label: "ORDERS",
          },
          {
            id: "premium",
            label: "PREMIUM",
          },
        ]}
        rows={[
          {
            stmOl: "SSKF",
            orders: "1540",
            premium: utils.getDollarPrice(4510),
          },
          {
            stmOl: "KKEK",
            orders: "1087",
            premium: utils.getDollarPrice(35.15),
          },
        ]}
      />
    </>
  );
}
