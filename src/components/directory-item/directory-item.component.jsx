
import './directory-item.styles.scss'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {

    const {imageUrl, title} = category
    const navigate = useNavigate();
    const navigateToSection = () => {
        navigate(`shop/${title}`);
    }
    
return (
    <div className='category-container' onClick={navigateToSection} >
        <div className="background-image" 
          style={{
              backgroundImage: `url(${imageUrl})`
          }} />
      
        <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </div>
    </div>
)

};

export default DirectoryItem