import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import React from 'react';
import Error from './error';
const layout = ({ children }) => {
  return (
    <div>
      <ErrorBoundary fallback={<Error />}>
        {children}
        <p>Вернуться наверх</p>
      </ErrorBoundary>
    </div>
  );
};

export default layout;
