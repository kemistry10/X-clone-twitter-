'use client'
import MainContent from '../MainContent';
import RightSideBar from '../RightSideBar';
import SideBar from '../SideBar';
import styles from './HomePage.module.scss'


const HomePage = () => {
    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <SideBar avatarUrl={''} />
            {/* MainContent */}
            <MainContent />
            {/* RightSidebar */}
            <RightSideBar />
        </div>
    )
}

export default HomePage;