import Navbar from "@/components/shared/navbar";

interface LandingLayoutProps {
    children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className="w-full flex flex-col scroll-smooth min-h-screen">
            <Navbar/>
            {children}
        </div>
    );
}