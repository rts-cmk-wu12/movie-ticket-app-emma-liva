import Header from "../components/header";
import Account from "../components/account";
import Footer from "../components/footer";
import LogIn from "../components/logIn";

function Profile() {
    const userId = localStorage.getItem('user');

    return (  
        <>
        <Header 
            title="Profile"
            navigateReturn={false}
        />

        <main className="profile-main">
            {userId ? (
                <Account userId={userId} />
            ) : (
                <LogIn />
            )}
        </main>

        <Footer current="profile" />    
        </>
    );
}

export default Profile;