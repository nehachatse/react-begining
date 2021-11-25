import styles from './CategoryItems.module.css'

export default function CategoryItem({url, title}){
    return (
        <div className={styles.categ}>
            <img src={url} alt="title" />
            <div>
                {title}
            </div>
        </div>
    )
}