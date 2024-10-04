import { FaSearch } from 'react-icons/fa';
import styles from './RightSideBar.module.scss'
import Link from 'next/link';

const RightSideBar = () => {
    return (
        <div className={styles.rightSideBar}>
            <h1></h1>
            <div className={styles.searchBar}>
                <FaSearch className={styles.searchIcon} />
                <input 
                type="text"
                placeholder='Search'
                className={styles.searchInput}
                 />
            </div>
            <div className={styles.upgradeBanner}>
                <div className={styles.upgradeContent}>
                <h2>Upgrade to Premium+</h2>
                <p>Enjoy additional benefits, zero ads, and the largest reply prioritization.</p>
                <button className={styles.upgradeButton}>Upgrade to Premium+</button>
                </div>
            </div>
            <div className={styles.trending}>
                <h2>Explore <span className={styles.betaTag}>Beta</span></h2>
                <ul className={styles.trendingList}>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>CSS ~ 1 hour ago</span>
                            <h3>
                                Developer spends 4 hours centering a div, finally gives up
                            </h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>CSS ~ 2 hour ago</span>
                            <h3>
                                Dilemma, which color is best?
                            </h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>CSS ~ 3 hour ago</span>
                            <h3>
                                Footers; to be sticky or not to be sticky?
                            </h3>
                        </div>
                    </li>
                    <li>
                        <div className={styles.trendingInfo}>
                            <span>CSS ~ 4 hour ago</span>
                            <h3>
                                Dark v light mode; cam we choose?
                            </h3>
                        </div>
                    </li>
                </ul>
                <Link className={styles.showMore} href="#showMore">Show More</Link>
            </div>
            <div className={styles.whoToFollow}>
                <h2>Who to Follow</h2>
                <ul className={styles.followList}>
                    <li>
                        <div className={styles.userInfo}>
                            <img 
                            src="https://randomuser.me/api/portraits/men/42/jpg" 
                            alt="chiller" 
                            />
                            <div>
                                <h3>chiller</h3>
                                <span>@chiller</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                    <li>
                        <div className={styles.userInfo}>
                            <img 
                            src="https://randomuser.me/api/portraits/men/45/jpg" 
                            alt="dude" 
                            />
                            <div>
                                <h3>cooldude</h3>
                                <span>@cooldude</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                    <li>
                        <div className={styles.userInfo}>
                            <img 
                            src="https://randomuser.me/api/portraits/women/4/jpg" 
                            alt="travellady" 
                            />
                            <div>
                                <h3>travellady</h3>
                                <span>@ctravellady</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                </ul>
                <Link className={styles.showMore} href="#showMore">Show More</Link>
            </div>
            <div className={styles.footerLinks}>
                <Link href="#TermsOfService">Terms of Service</Link> · <Link href="#privatePolicy">Private Policy</Link> ·{" "}
                <Link href="#CookiePolicy">Cookie Policy</Link> · <Link href="#Accessibility">Accessibility</Link> ·{" "}
                <Link href="#AdsInfo">Ads info</Link> · <Link href="#More">More...</Link> ·{" "}
                <p>© 2024 X Corp.</p>
            </div>
        </div>
    )
}

export default RightSideBar;