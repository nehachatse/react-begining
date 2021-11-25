import styles from './Button.module.css'

function getStyleForType({type}){
    return type
}

export default function Button(props){
    const {title, type, disabled} = props;
    /*
        //1. inline css
        const style = {
            padding: 0.5 rem,
            background: red,
        }

        for aplly inline css => use style ={style}

        //2. common css
        styling in index.css and use style for elements from their

        //3. module css
        create seperate module.css file for each component
    */
    const style = getStyleForType(type);

    return (
        <>
        <button disabled = {disabled} className = {styles.button}>{title}</button>
        </>
    )
}