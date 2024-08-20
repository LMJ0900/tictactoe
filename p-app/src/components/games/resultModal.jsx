import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <>
      <dialog ref={ref} className="result-modal">
        <h2>Your Score : {result} </h2>
        <p>
          The target time was <strong>{targetTime} second.</strong>
        </p>
        <p>
          You stopped the timer wiht <strong>X second left.</strong>
        </p>
        <form method="dialog">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
});

export default ResultModal;
