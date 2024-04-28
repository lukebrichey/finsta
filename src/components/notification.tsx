// NotificationComponent.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for defining prop types
import { Card, CardContent } from './ui/card'; // Update with your actual path to the Card component

interface NotificationProps {
  icon: JSX.Element; // Specify icon prop as a JSX element
  text: string; // Specify text prop as a string
}

const NotificationComponent = ({icon, text} : NotificationProps) => {
  return (
    <Card className="border border-white">
      <CardContent className="flex items-center p-4 bg-white text-black">
        {/* Assuming `icon` is a JSX element representing an icon */}
        <div className="mr-3">{icon}</div>
        <span className="text-lg font-semibold">{text}</span>
      </CardContent>
    </Card>
  );
};

NotificationComponent.propTypes = {
  icon: PropTypes.node.isRequired, // Specify icon prop as a React node
  text: PropTypes.string.isRequired, // Specify text prop as a string
};

export default NotificationComponent;

