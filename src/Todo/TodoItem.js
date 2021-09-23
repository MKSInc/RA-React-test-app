import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '20px 4px',
		border: '1px solid gray',
		borderRadius: '4px',
		marginBottom: '20px',
	},
	input: {
		marginRight: '10px'
	}
}

function TodoItem({ todo, index, onChange }) {
	console.log('todo', todo);

	const { removeTodo } = useContext(Context);
	const classes = [];

	if (todo.completed) {
		classes.push('done');
	}

	return (
		<li style={styles.li}>
			<span className={classes.join(' ')}>
				<input style={styles.input}
							 type='checkbox'
							 checked={todo.completed}
							 onChange={() => onChange(todo.id)} />
				<strong>{index + 1}</strong>
				&nbsp;
				{todo.title}
			</span>

			<button className='rm' onClick={removeTodo.bind(null, todo.id)}>x</button>
		</li>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired,
}

export default TodoItem