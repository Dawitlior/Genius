import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            <p>dashboard page (protected)</p>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}
export default DashboardPage;