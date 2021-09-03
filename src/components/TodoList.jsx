import React from 'react';
import '../assets/styles/TodoList.css'

function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }