import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const NotificationComponent = ({ avatarUrl, text }: NotificationProps) => {
  return (
    <Card className="my-2 mx-auto max-w-md bg-black border border-gray-200 rounded-lg shadow-lg">
      <CardContent className="flex items-center p-3">
        <div className="mr-3">
          <Avatar style={{ width: '40px', height: '40px' }}>
            <AvatarImage src={avatarUrl} alt="User Avatar" />
            <AvatarFallback delayMs={600}>👤</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-white text-sm font-semibold truncate">{text}</span>
        </div>
      </CardContent>
    </Card>
  );
};

NotificationComponent.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NotificationComponent;
