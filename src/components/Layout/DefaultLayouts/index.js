import Header from '~/components/Layout/components/Header';
import Siderbar from './Siderbar';
import classNames from 'classnames/bind';
import styles from './DefaultLayouts.module.scss';
const cx = classNames.bind(styles);
function DefaultLayouts({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Siderbar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayouts;
