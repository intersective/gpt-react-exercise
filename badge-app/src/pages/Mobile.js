import ImageBox from '../components/ImageBox';
import TextBox from '../components/TextBox';
import Button from '../components/Button';

function Mobile() {
   return (
      <div className="mobile-layout">
         <TextBox content="Title" />
         {/* ... Other elements ... */}
         <ImageBox />
         {/* ... Other elements ... */}
      </div>
   );
}
export default Mobile;
