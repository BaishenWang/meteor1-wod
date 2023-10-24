import ReactDOM from 'react-dom';

const Buzzs = () => (
  <>
    <TopMenu/>
    <CenterImage/>
    <BottomFooter/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Buzzs/>);