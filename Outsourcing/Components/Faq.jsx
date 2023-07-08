import { useState } from "react";

export default function Faq({ id, question, answer }) {
	const [showAnswer, setShowAnswer] = useState(false);

	const toggleAnswer = () => {
		setShowAnswer(!showAnswer);
	};

	return (
		<div className='faqWrapper'>
			<div onClick={toggleAnswer} className='faqQuestionContainer'>
				<p>{question}</p>
				<span className='faqToggle'> {showAnswer ? "-" : "+"} </span>
			</div>
			<div
				className={`faqAnswerContainer ${
					showAnswer ? "" : "faqAnswerContainerHide"
				}`}>
				<p>{answer}</p>
			</div>
		</div>
	);
}
