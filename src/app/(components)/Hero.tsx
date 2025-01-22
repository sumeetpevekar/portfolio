import Left from "./Left";
import Right from "./Right";
import styles from "./styles.module.css";

const Hero: React.FC = () => {
    return (
        <>
            <div className={styles.parentContainer}>
                <Left />
                <Right />
            </div>
        </>
    );
};

export default Hero;
