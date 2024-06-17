import styles from "./Mycontainer.module.css"

function Mycontainer(props) {
    return (
        <>
            <div className={styles.Mycontainer}>
                {props.children}
            </div>
        </>
    )
}

export default Mycontainer