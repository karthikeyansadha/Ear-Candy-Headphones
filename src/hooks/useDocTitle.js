import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Ear-Candy`;
        } else {
            document.title = 'Ear-candy | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
