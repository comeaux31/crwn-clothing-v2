
import './category-item.styles.scss'
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({category}) => {

    const {imageUrl, title} = category
    const navigate = useNavigate();
    const navigateToSection = () => {
        navigate(`/${title}`);
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

export default CategoryItem