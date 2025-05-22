
import Account from "../components/account";
import Footer from "../components/footer";
import Header from "../components/header";


function Profile() {
    return (  
        <>
        <Header 
            title="Profile"
            navigateReturn={false}
        />

        <main className="profileMain">
            <Account />
        </main>

        <Footer current="profile" />    
        </>
    );
}

export default Profile;