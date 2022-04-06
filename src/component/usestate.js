import React ,{useState}  from 'react';


const Usestatefunc = () =>{

	const [count, setcount] = useState(0);

	
	return(
		<div>
			<h1> Welcome to the Hooks {count}</h1>
				<button onClick={() => setcount(0)}>Reset</button>
				<button style={{margin:'10px'}} onClick={() => setcount(count + 1)}>Increment</button>
				<button onClick={() => setcount(count - 1)}>Decrement</button>
    	</div>
		)
}

export default Usestatefunc; 