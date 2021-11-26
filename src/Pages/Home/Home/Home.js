import HomeBanner from '../HomeBanner/HomeBanner';
import HomeEnquery from '../HomeEnquery/HomeEnquery';
import HomeFooter from '../HomeFooter/HomeFooter';
import HomeProducts from '../HomeProducts/HomeProducts';
import Review from '../Review/Review';



const Home = () => {
    
    return (
        <div>
           <HomeBanner></HomeBanner>
           <HomeProducts></HomeProducts>
           <Review></Review>
           <HomeEnquery></HomeEnquery>
           <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;