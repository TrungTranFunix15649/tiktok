import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/e973da223e52d36bf5acc3483c3c0ebe~c5_100x100.jpeg?x-expires=1692972000&x-signature=p55B9AqtJ014X%2F3pzgH5EpvvHi4%3D"
                alt="account"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>tainguyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Anh Tài</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
