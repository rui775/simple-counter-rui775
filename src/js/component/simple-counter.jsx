import React, { useEffect, useState } from "react";
import "../../styles/simple-counter.css"

const SimpleCounter = () => {
	const [count, setCount] = useState(0);
	
	const reInitTimer = () => {
		setCount(0)
	  };

    useEffect(() => {
		setInterval(() => {
			setCount((init) => (init + 1) % 10000000);
			}, 1000);
    }, []);
	
	const fiveDigit = Math.floor((count / 10000) % 10);
	const fourDigit = Math.floor((count / 1000) % 10);
    const threeDigit = Math.floor((count / 100) % 10);
    const twoDigit = Math.floor((count / 10) % 10);
    const oneDigit = Math.floor(count % 10);

	return (
		<div>
			<div className="container d-flex">
				<span className="badge mainSection">
					<span className="badge text-bg-secondary badgeDigit"><i className="fas fa-clock"></i></span>
					<span className="badge text-bg-secondary badgeDigit">{fiveDigit}</span>
					<span className="badge text-bg-secondary badgeDigit">{fourDigit}</span>
					<span className="badge text-bg-secondary badgeDigit">{threeDigit}</span>
					<span className="badge text-bg-secondary badgeDigit">{twoDigit}</span>
					<span className="badge text-bg-secondary badgeDigit">{oneDigit}</span>
				</span>
			</div>
			<div className="container buttonClass">
				<button type="button" className="btn btn-secondary ms-1" onClick={reInitTimer}>Reinitilize counter</button>
			</div>
		</div>
	);
};

export default SimpleCounter;