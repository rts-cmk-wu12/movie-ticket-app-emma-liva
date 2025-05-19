import { useState } from "react";

function ChangeContent({ onTabChange }) {
    const [activeTab, setActiveTab] = useState('nowShowing'); 

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        onTabChange(tab); 
    };

    return (
        <>
            <div className="content">
                <div className="content__navigation">
                    <button
                        onClick={() => handleTabChange('nowShowing')}
                        className={activeTab === 'nowShowing' ? 'active' : ''}>
                        Now Showing
                    </button>
                    <button
                        onClick={() => handleTabChange('upcoming')}
                        className={activeTab === 'upcoming' ? 'active' : ''}>
                        Upcoming
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChangeContent;