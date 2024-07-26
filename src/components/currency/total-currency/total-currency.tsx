import Counter from "lib/counter";
import styles from "./total-currency.module.css";
import {
  formatPriceComma,
  formatPriceDot,
} from "utils/format-price.ts/format-price";

type Props = {
  totalPayable: number;
  countPayments: number;
  totalPayment: number;
  type?: "confirm" | "select";
};

export default function TotalCurrency({
  totalPayable,
  countPayments,
  totalPayment,
  type = "select",
}: Props) {
  const getContent = () => {
    if (type === "confirm") {
      return {
        countPayments,
        countPaymentsLabel: "מספר תשלומים",
        totalPayable: formatPriceComma(totalPayable),
        totalPayment: `סך כל תשלום ${formatPriceComma(totalPayment)} ש”ח`,
        totalPaymentLabel: "סה”כ ריבית 25 ש”ח",
      };
    } else {
      return {
        countPayments: (
          <Counter value={countPayments} setValue={() => null} size="mini" />
        ),
        countPaymentsLabel: "מספר התשלומים לבחירה",
        totalPayable: formatPriceDot(totalPayable),
        totalPayment: `סך כל תשלום ${formatPriceComma(totalPayment)} ₪`,
        totalPaymentLabel: "(סה”כ ריבית 25 ₪)",
      };
    }
  };

  const content = getContent();

  return (
    <div className={styles.totalCurrency}>
      <div className={styles.countPayments}>
        <span className={`${styles.countText} ${styles[type]}`}>
          {content.countPaymentsLabel}
        </span>
        <div className={styles.count}>{content.countPayments}</div>
      </div>
      <div className={styles.total}>
        <div className={`${styles.totalValue} ${styles[type]}`}>
          <span className={`${styles.totalPayable} ${styles[type]}`}>
            סה״כ לתשלום
          </span>
          <span className={`${styles.totalPayable} ${styles[type]}`}>
            {content.totalPayable} ₪
          </span>
          <span className={`${styles.totalPayment} ${styles[type]}`}>
            {content.totalPayment}
          </span>
          <span className={`${styles.totalPayment} ${styles[type]}`}>
            {content.totalPaymentLabel}
          </span>
        </div>
        <hr className={styles.hr} />
      </div>
    </div>
  );
}
