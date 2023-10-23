import ImageBox from '../components/ImageBox';
import TextBox from '../components/TextBox';
import Button from '../components/Button';

function Desktop() {
   return (
      <div className="desktop-layout">
         {/* Grid Layout with ImageBox and TextBox components */}
         <ImageBox />
         <TextBox content="Txt" />
         {/* ... Other elements ... */}
         <Button label="Click" />
         {/* ... Other elements ... */}
         <Button label="Update" />
         <Button label="Download" />
      </div>
   );
}
export default Desktop;
