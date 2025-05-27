import {Navbar} from '@/components/home'

export default function Layout({children,}: Readonly<{children: React.ReactNode;}>){
    
    return(
        <main>
            <Navbar />
            {children}
        </main>
    );
}