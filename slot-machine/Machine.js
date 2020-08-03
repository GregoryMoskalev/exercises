function getNum() {
	return Math.floor(Math.random() * 3);
}

class Machine extends React.Component {
	render() {
		const fruits = [ '🍏', '🍒', '🍇' ];
		const s1 = fruits[getNum()];
		const s2 = fruits[getNum()];
		const s3 = fruits[getNum()];
		const winner = s1 === s2 && s2 === s3;
		return (
			<div className="Machine">
				<p style={{ fontSize: '50px' }}>
					{s1} {s2} {s3}
				</p>
				<p className={winner ? 'win' : 'lose'}>{winner ? 'You WIN!' : 'You lose'}</p>
			</div>
		);
	}
}

ReactDOM.render(<Machine />, document.getElementById('root'));
