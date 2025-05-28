function ChangeContent({ activeTab, setActiveTab }) {
    return (
        <div className="content__navigation">
            <button
                onClick={() => setActiveTab('nowShowing')}
                className={activeTab === 'nowShowing' ? 'active' : ''}>
                Now Showing
            </button>
            <button
                onClick={() => setActiveTab('upcoming')}
                className={activeTab === 'upcoming' ? 'active' : ''}>
                Upcoming
            </button>
        </div>
    );
}

export default ChangeContent;