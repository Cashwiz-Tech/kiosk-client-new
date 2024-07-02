import "./payments-button.css";

interface PaymentsButtonProps {
  onClick: () => void;
  type: "INC" | "DEC";
  width: number;
  height: number;
  disabled: boolean;
}

const PaymentsButton = ({
  onClick,
  type,
  height,
  width,
  disabled,
}: PaymentsButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`payments-button-container ${
        disabled ? "diabled-payments-button-container" : ""
      }`}
    >
      <img
        src={`/${type === "INC" ? "plus" : "minus"}.svg`}
        className="payments-button-icon"
        alt="payments-button"
      />
    </button>
  );
};

export default PaymentsButton;
