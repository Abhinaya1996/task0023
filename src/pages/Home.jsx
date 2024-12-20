import homestyles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faLeaf, faCartShopping, faShieldAlt, faFlag, faRecycle, faCapsules, faWeightScale, faBurger } from '@fortawesome/free-solid-svg-icons';
import Blog from '../components/Blog';
import Ingredients from '../components/Ingredients';

export default function Home(){
    return <>
    <div className={homestyles.bannerSection}>
        <div className={homestyles.contentWrapper}>
        <h1 className={homestyles.bannerTitle}>Essential Vitamins</h1>
        <div className={homestyles.row}>
            <div className={homestyles.column}>
                <p className={homestyles.plineThin}>Online Medical Supplies</p>
                <p className={homestyles.plineMedium}>Get Your Vitamins <br/> & Minerals</p>
                <p className={homestyles.button}>Explore</p>
            </div>
            <div className={homestyles.column}>
                <img src="/assets/f2-1.png.png" alt="Probiotics" style={{height: '330px', width: '300px'}}/>
            </div>
            <div className={homestyles.column}>
                <ul className={homestyles.listService}>
                    <li className={homestyles.listItem}>
                        <span className={homestyles.circleIcon}>
                            <FontAwesomeIcon style={{ color: 'white' }} icon={faCapsules} size="2x" />
                        </span>
                        <div className={homestyles.listItemText}>
                            <h4>Vitamins</h4>
                            <p>Increased Vitamins and</p>
                            <p>minerals in your diet</p>
                        </div>
                    </li>

                    <li className={homestyles.listItem}>
                        <span className={homestyles.circleIcon}>
                            <FontAwesomeIcon style={{ color: 'white' }} icon={faWeightScale} size="2x" />
                        </span>
                        <div className={homestyles.listItemText}>
                            <h4>Weight Loss</h4>
                            <p>Weight Loss </p>
                            <p>Find scientifically proven solutions</p>
                        </div>
                    </li>

                    <li className={homestyles.listItem}>
                        <span className={homestyles.circleIcon}>
                            <FontAwesomeIcon style={{ color: 'white' }} icon={faBurger} size="2x" />
                        </span>
                        <div className={homestyles.listItemText}>
                            <h4>Functional Foods</h4>
                            <p>Functional Foods</p>
                            <p>From protein powers to baby formula</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>

    </div>

    <div className={homestyles.overlappingSection}>
    <div className={homestyles.circleWrapper}>
        <div className={homestyles.circle}>
            <FontAwesomeIcon icon={faFlask} size="2x" />
        </div>
        <div className={homestyles.circleText}>
            <h4>Clinically Studied</h4>
            <p>All products that we offer have<br/>
            undergone lab and safety tests</p>
        </div>
    </div>

    <div className={homestyles.circleWrapper}>
        <div className={homestyles.circle}>
            <FontAwesomeIcon icon={faLeaf} size="2x" />
        </div>
        <div className={homestyles.circleText}>
            <h4>Vegetarian Friendly</h4>
            <p>We have a wide selection of vegetarian<br/>
            products to meet your needs</p>
        </div>
    </div>

    <div className={homestyles.circleWrapper}>
        <div className={homestyles.circle}>
            <FontAwesomeIcon icon={faFlag} size="2x" />
        </div>
        <div className={homestyles.circleText}>
            <h4>Made in India</h4>
            <p>Shop local and explore health products<br/>
            made right here in India</p>
        </div>
    </div>
</div>

<div className={homestyles.overlappingSection2}>
    <div className={homestyles.circleWrapper2}>
        <div className={homestyles.circle}>
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </div>
        <div className={homestyles.circleText}>
            <h4>Free shipping</h4>
            <p>We deliver to your door with no<br/>
            shipping costs on your orders</p>
        </div>
    </div>

    <div className={homestyles.circleWrapper2}>
        <div className={homestyles.circle}>
            <FontAwesomeIcon icon={faShieldAlt} size="2x" />
        </div>
        <div className={homestyles.circleText}>
            <h4>No Risk</h4>
            <p>We ensure that all products are safe<br/>
and within their use-by date</p>
        </div>
    </div>

    <div className={homestyles.circleWrapper2}>
        <div className={homestyles.circle}>
            <FontAwesomeIcon icon={faRecycle} size="2x" />
        </div>
        <div className={homestyles.circleText}>
            <h4>GMO free</h4>
            <p>Natural, no modified products and<br/>
derivatives for those who need it</p>
        </div>
    </div>
</div>

    



    

    
    <Ingredients/>
    <Blog/>
    
    </>
}