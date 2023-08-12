import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return data.map((list, index) => (
        <Button className={cx('menu-item')} leftIcon={list.icon} to={list.to} onClick={onClick}>
            {list.title}
        </Button>
    ));
    // return (
    //     <Button leftIcon={data.icon} to={data.to}>
    //         {data.title}
    //     </Button>
    // );
}

export default MenuItem;
