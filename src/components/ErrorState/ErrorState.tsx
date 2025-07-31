import { ErrorMessage } from "./styled.ts";
import type {ErrorStateProps} from "./types.ts";

export default function ErrorState ({ error }: ErrorStateProps) {
  return (
    <ErrorMessage>
      <h3>Error {error.status}</h3>
      <p>{error.message}</p>
      <p>Please try again later.</p>
    </ErrorMessage>
  );
};

ErrorState.displayName = "ErrorState";


