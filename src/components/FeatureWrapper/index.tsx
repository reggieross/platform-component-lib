import React from 'react';

interface ConditionalRowProps {
  isFeatured: boolean;
}

export const PlatformFeatureWrapper: React.FC<ConditionalRowProps> = ({
  isFeatured,
  children,
}) => {
  return <div>{isFeatured && children}</div>;
};
