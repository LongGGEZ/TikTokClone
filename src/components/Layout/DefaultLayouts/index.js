import Header from '~/components/Layout/components/Header';
import Siderbar from './Siderbar';
function DefaultLayouts({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Siderbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayouts;
