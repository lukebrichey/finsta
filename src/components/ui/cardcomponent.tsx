import React from 'react';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});

CardContent.displayName = 'CardContent';

export default CardContent;
