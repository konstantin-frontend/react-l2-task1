import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";

function App() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");
	const [isValueValid, setIsValueValid] = useState(false);

	const onInputButtonClick = () => {
		const promptValue = prompt();
		if (promptValue.length < 3) {
			setError("Введенное значение должно содержать минимум 3 символа");
			setValue("");
			setIsValueValid(false);
		} else {
			setValue(promptValue);
			setError("");
			setIsValueValid(true);
		}
	};

	const onAddButtonClick = () => {
		if (value) {
			setList((list) => [...list, { id: Date.now(), value }]);
			setValue("");
			setError("");
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles.pageHeading}>Ввод значения</h1>
				<p className={styles.noMarginText}>
					Текущее значение <code>value</code>: "
					<output className={styles.currentValue}>{value}</output>"
				</p>
				{error !== "" && <div className={styles.error}>{error}</div>}
				<div className={styles.buttonsContainer}>
					<button
						className={styles.button}
						onClick={onInputButtonClick}
					>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={!isValueValid}
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles.listContainer}>
					<h2 className={styles.listHeading}>Список:</h2>
					{list.length ? (
						<ul className={styles.list}>
							{list.map(({ id, value }) => {
								return (
									<li className={styles.listItem} key={id}>
										{value} (Дата и время создания:{" "}
										{new Date(id)
											.toLocaleString("ru-RU")
											.split(",")
											.join("")}
										)
									</li>
								);
							})}
						</ul>
					) : (
						<p className={styles.noMarginText}>
							Нет добавленных элементов
						</p>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
