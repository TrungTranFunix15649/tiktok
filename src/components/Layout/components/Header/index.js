import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/e885705a7f979d85a1822613aed8172c~c5_100x100.jpeg?x-expires=1692187200&x-signature=lIZzQ7d0Th5CTn1QPd%2BUtnU5iuM%3D"
                                alt="Nguyen Van A"
                                fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAIVBMVEX+/v7h4eH////g4OD7+/vp6eny8vLm5ub39/fs7Ozv7++w+auOAAAEm0lEQVRogbWb22KEIAxE5eKC/v8HN6i7XVdhZhR5a6s5TgghXDoMUvPWYs7zNKbklpbSOM05x/IXzZbEHWKcR0MGa+7T1p/SOMc4PEI3ta/R7Zj7Vv40vmJv7YWbGtgvfOpK90M2vQj7wbsxd3K8H4pgFrxqT68O8AWscDf6bbj3l8Ab/E6f+yy6escOKV9l+2Hig+sU7qZrXi+S74AX+BXhJvm6r7/YQRbu433JGzxFid3D2f9syemvbuAF/uI1z13Jxp5J3X7iyCEEYkZZH504NkM2pNUI1qxiYPAW6F00G3bKVheUmsWqhzw5nHoI3Zgc0px3xZD9kHHew2wYYWVKOhixX0B4mNuawagKbq4lCB9HxH41dPsMyGMrM/kXEB7qucWyZ/tVkI9h9m3k1PabOFB8bOsOqfZiO7iZlIR0V74edHT1i391N1ulu0FHRQZtAtroMwHI3a2RsbPTzgwnLr/ytecNDBN3cLkH8cGKhmkpJC897xwt2my1LR1UANGjUOOg3t73HczdvL+toQG2NwZC4xgbTdkonwqiHR/fizkw5+9kI9G/UQnQvBI0V2pRxtj79J+HkzxZUOpSQEQKdfTbIKwStwkBdo04tgj026BHQaajkcF33GL39EeHxePY30+gV4sovh9Bj9xz/cPMLTHuieceQAeri5nFtIiGKcWtqQKmMienFAptCQ2Paj2RMvshNrKJKJOnD2orJg7tSvQamtqLyQPRL8cqEqCpLZGM1/KliWgicstKn9su4lY9bzSz32crZuYLZTRh0VIp85hYkTKDphRoHFpJZ2D59o+mHpNyCol2JFoJcS6jsGjnFDS5x0qig7CfDlaaMpqfu5h5S0G7RI9s1t+OHFytnb6fxo1qflzzMU4fISQykfJFEivaEinbM2Qep3vapg/6iIUKcjq8y6RJP8vNIfT5mJUKZMJ1VKQpx1SZDgtHRBo7cSwtcvP653HAFo4jE7cEeDdQmSruXpYAyili++RE6Lt14cMsC/9bS7ViZ5kKlW9tHRCKh7BLghI62zUGtyZhWdqz9cz2zsVDm18za9BonV2TLYnetnG0kV09L9IO+rfEeO2tW0H2GaSar3qgPxOwktBqGU1y3b8NfpJ19YQmpbKvUBUCrVaaKoPra4AK3qpncV723gYru3HKx39/uvRaawFEbSa4o+O419qlIXll6idaONlr0q/Lprr7EC2ct0ApztRmx+KSeCvgatisQAVHI+jovNxMJS4r5ARuSpzOPg2Xl9vAJ5dwztg+zo1rmOeDs5pOg0uzcgfaD3mqaa+slU9dbgIm+QpwuUM+nt1Fq+9EHVxeHH3tyrm9dHR8PRf+XAQKQXP0wdxQ7oJ90xsXgb67u8d15+1aOejo7dktqRl36nPDvFyD2+hotVjqHAvpl3bvtA1fpYOrbkuYhyl3vtBv0kfmcuHc/T8JhuWfJ5jHpG13tpFGH2DTJruzBYOd2ZK5rmzVWDf4I1H7XIsdvveyjdvsGwbuCb/ptjvffQt8w0KnwJbNdBxQoqneyZCde55IIWYUmI3PgD/4S3/rh4+lvX+K8ZraPzSiLL4vBGfmAAAAAElFTkSuQmCC"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
