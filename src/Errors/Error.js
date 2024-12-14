import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Lab from '../Components/Lab'

const Error = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={handleError}>
        <Lab />
      </ErrorBoundary>
    </div>
  );
};

const handleError = ({ error, resetErrorBoundary }) => {
  return (
    <center>
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}  style={{ backgroundColor: 'black', color: 'white'}}>Try Again</button>
    </div>
    </center>
  );
};

export default Error;
