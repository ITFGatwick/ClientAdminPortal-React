import './Options.css';

export default function Options(props) {
    const onDecreaseFontSizeClick = () => {
    }

    const onIncreaseFontSizeClick = () => {
    }

    return <div className="options">
        <label htmlFor="font-size">Font size: </label>
        <button aria-label="Decrease font-size" onClick={onDecreaseFontSizeClick}>-</button>
        <p>{props.fontSize}</p>
        <button aria-label="Increase font-size" onClick={onIncreaseFontSizeClick}> +</button >
    </div >
}