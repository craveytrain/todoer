import React from 'react'

export default ({ todo: { title, completed } }) => (
	<li>
		<input type="checkbox" checked={completed} />
		{title}
	</li>
)
