import React from 'react';

interface PropTypes {
    size?: number
}

const SmallLoader = React.memo<PropTypes>(({size = 30}) => {
    return (
        <div className="flex items-center justify-center w-full h-full">
          ИДЕТ ЗАГРУЗКА НАХУЙ ВСЕМ ЖДАТЬ
        </div>
    );
});

export default SmallLoader;