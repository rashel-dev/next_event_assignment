import Footer from '@/components/shared/Footer/Footer';
import Header from '@/components/shared/Header/Header';
import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default PublicLayout;