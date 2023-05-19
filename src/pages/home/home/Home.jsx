import Banner from "../banner/Banner";
import Category from "../category/Category";
import Event from "../event/Event";
import Story from "../story/Story";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Story></Story>
            <Event></Event>
        </div>
    );
};

export default Home;